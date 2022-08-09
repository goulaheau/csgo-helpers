import { StuffLocalizations } from '../core/interfaces/stuff-localizations'
import { readStream } from '../core/streams/read-stream'
import { Stuff } from '../core/types/stuff'
import { DbService } from '../db.service'
import { RootElement } from '../root.element'
import {
	FASTElement,
	attr,
	css,
	customElement,
	html,
	observable,
	ref,
	repeat,
} from '@microsoft/fast-element'

@customElement({
	name: 'app-map',
	styles: css`
		:host {
			display: flex;
		}

		*:focus {
			outline: none;
		}

		.map {
			width: 100vh;
			height: 100vh;
			position: relative;
			z-index: 0;
			background: 0 0% / contain no-repeat;
			margin: auto;
		}

		.arrival {
			position: absolute;
			border-radius: 50%;
			background: yellow;
			width: calc(20 / 1024 * 100%);
			height: calc(20 / 1024 * 100%);
			opacity: 0.75;
			cursor: pointer;
			border: none;
			padding: 0;
		}

		.arrival:hover,
		.arrival[aria-selected] {
			opacity: 1;
		}

		.departure {
			display: none;
			position: absolute;
			border-radius: 50%;
			background: red;
			width: calc(20 / 1024 * 100%);
			height: calc(20 / 1024 * 100%);
			cursor: pointer;
			border: none;
			padding: 0;
		}

		.arrival:hover + .departures-container .departure,
		.arrival:hover + .departures-container svg,
		.arrival[aria-selected] + .departures-container .departure,
		.arrival[aria-selected] + .departures-container svg {
			display: block;
		}

		svg {
			pointer-events: none;
			display: none;
			position: absolute;
			z-index: -1;
			width: auto;
			max-height: 100vh;
			max-width: 100vw;
			aspect-ratio: 1;
		}

		svg line {
			stroke: green;
			stroke-width: calc(2 / 1024 * 100%);
		}

		.video-container {
			position: absolute;
			top: calc(112 / 1024 * 100%);
			height: calc(800 / 1024 * 100%);
			width: 100vh;
			justify-content: center;
		}

		video {
			height: 100%;
			width: auto;
		}
	`,
	template: html<MapElement>`
		<div
			${ref('mapElement')}
			@click="${(x, c) => x.handleClick(c.event)}"
			class="map"
			style="background-image: url(${(x) => x.mapUrl})"
		>
			${repeat(
				(x) => x.stuffLocalizations.arrivals,
				html<{ id: number; x: number; y: number }, MapElement>`
					<button
						@click="${(arrival, c) => c.parent.select(arrival.id)}"
						aria-selected="${(arrival, c) =>
							c.parent.arrivalIdSelected === arrival.id ? 'true' : null}"
						class="arrival"
						id="${(arrival) => arrival.id}"
						style="
							left: ${(arrival) => `calc(${arrival.x} / 1024 * 100%)`};
							top: ${(arrival) => `calc(${arrival.y} / 1024 * 100%)`};
						"
					></button>

					<div class="departures-container">
						${repeat(
							(arrival, c: any) =>
								c.parent.stuffLocalizations.departuresByArrivalId[arrival.id],
							html<{
								id: number
								arrivalId: number
								x: number
								y: number
								videoUrl: string
							}>`
								<button
									class="departure"
									@click="${(departure, c) =>
										c.parentContext.parent.showStuff(departure.videoUrl)}"
									style="
											left: ${(departure) => `calc(${departure.x} / 1024 * 100%)`};
											top: ${(departure) => `calc(${departure.y} / 1024 * 100%)`};
										"
								></button>

								<svg viewBox="0 0 1024 1024">
									<line
										x1="${(_, c) => c.parent.x + 10}"
										y1="${(_, c) => c.parent.y + 10}"
										x2="${(departure) => departure.x + 10}"
										y2="${(departure) => departure.y + 10}"
									/>
								</svg>
							`,
						)}
					</div>
				`,
			)}
		</div>

		<div
			class="video-container"
			style="display: ${(x) => (x.videoUrl ? 'flex' : 'none')}"
		>
			<video
				${ref('videoElement')}
				src="${(x) => x.videoUrl}"
				autoplay
				loop
				muted
				controls
			></video>
		</div>
	`,
})
export class MapElement extends FASTElement {
	@attr() mapId!: number
	@attr() mapUrl!: string
	@attr() stuff!: Stuff
	@attr() stuffLocalizations!: StuffLocalizations

	@observable arrivalIdSelected: number | null = null
	@observable videoUrl: string | null = null

	@observable editing = false

	mapElement!: HTMLDivElement
	videoElement!: HTMLVideoElement

	arrivalCreation: { x: number; y: number } | null = null
	arrivalEditionId: number | null = null

	connectedCallback(): void {
		this.editing = RootElement.editing

		super.connectedCallback()

		setTimeout(() => {
			readStream(RootElement.editingReader, (editing) => {
				this.editing = editing
			})
		})
	}

	disconnectedCallback(): void {
		RootElement.setupNewStream()
		super.disconnectedCallback()
	}

	handleClick(event: PointerEvent | any): void {
		if (!this.editing) {
			return
		}

		const x =
			Math.round((event.offsetX * 1024) / this.mapElement.offsetWidth) - 10
		const y =
			Math.round((event.offsetY * 1024) / this.mapElement.offsetHeight) - 10

		const elementClicked = event.path[0]

		if (elementClicked.className === 'map') {
			if (this.arrivalEditionId) {
				this.createDeparture(+this.arrivalEditionId, x, y)
			} else {
				this.createArrivalAndDeparture(x, y)
			}
		}

		if (elementClicked.className === 'arrival') {
			this.arrivalEditionId = elementClicked.id
		}
	}

	private async createArrivalAndDeparture(x: number, y: number): Promise<void> {
		if (!this.arrivalCreation) {
			this.arrivalCreation = { x, y }

			return
		}

		const videoUrl = window.prompt('URL :')

		if (!videoUrl) {
			this.arrivalCreation = null

			return
		}

		const response = await DbService.createArrival(
			this.arrivalCreation.x,
			this.arrivalCreation.y,
			this.mapId,
		)

		const arrival = response.data[0]

		await this.createDeparture(arrival.id, x, y, videoUrl)

		this.arrivalCreation = null
	}

	private async createDeparture(
		arrivalId: number,
		x: number,
		y: number,
		videoUrl: string | null = null,
	): Promise<void> {
		if (!videoUrl) {
			videoUrl = window.prompt('URL :')
		}

		if (!videoUrl) {
			this.arrivalEditionId = null

			return
		}

		await DbService.createDeparture(arrivalId, x, y, this.stuff, videoUrl)

		this.arrivalEditionId = null
	}

	closeVideoWhenClickedOutside = (event: any) => {
		const elementClicked = event.path[0]

		if (elementClicked === this.videoElement) {
			return
		}

		this.videoUrl = null
		document.removeEventListener('click', this.closeVideoWhenClickedOutside)
	}

	select(arrivalIdToToggle: number): void {
		if (arrivalIdToToggle === this.arrivalIdSelected) {
			this.arrivalIdSelected = null

			return
		}

		this.arrivalIdSelected = arrivalIdToToggle
	}

	showStuff(videoUrl: string): void {
		this.videoUrl = videoUrl

		setTimeout(() => {
			document.addEventListener('click', this.closeVideoWhenClickedOutside)
		})
	}
}
