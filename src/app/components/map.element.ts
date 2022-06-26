import { StuffLocalizations } from '../core/interfaces/stuff-localizations'
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
		<div class="map" style="background-image: url(${(x) => x.mapUrl})">
			${repeat(
				(x) => x.stuffLocalizations.arrivals,
				html<{ id: number; x: number; y: number }, MapElement>`
					<button
						@click="${(arrival, c) => c.parent.select(arrival.id)}"
						aria-selected="${(arrival, c) =>
							c.parent.arrivalIdSelected === arrival.id ? 'true' : null}"
						class="arrival"
						style="
							left: ${(arrival) => `calc(${arrival.x} / 1024 * 100%)`};
							top: ${(arrival) => `calc(${arrival.y} / 1024 * 100%)`};
						"
					></button>

					<div class="departures-container">
						${repeat(
							(arrival, c) =>
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
										c.parentContext.parent.showStuff(
											departure.videoUrl,
											c.event,
										)}"
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
	@attr() mapUrl!: string
	@attr() stuffLocalizations!: StuffLocalizations

	@observable arrivalIdSelected: number | null = null
	@observable videoUrl: string | null = null

	videoElement!: HTMLVideoElement

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

	showStuff(videoUrl: string, event: Event): void {
		event.stopPropagation()
		this.videoUrl = videoUrl

		document.addEventListener('click', this.closeVideoWhenClickedOutside)
	}
}