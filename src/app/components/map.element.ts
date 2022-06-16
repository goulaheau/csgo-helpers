import { MapName } from '../types/map-name'
import deDust2Url from '/assets/maps/de_dust2.png'
import deNukeUrl from '/assets/maps/de_nuke.png'
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

		.end {
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

		.end:hover,
		.end[aria-selected] {
			opacity: 1;
		}

		.start {
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

		.end:hover + .starts-container .start,
		.end:hover + .starts-container svg,
		.end[aria-selected] + .starts-container .start,
		.end[aria-selected] + .starts-container svg {
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
			width: 100%;
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
				(x) => x.ends,
				html<{ id: number; x: number; y: number }, MapElement>`
					<button
						@click="${(end, c) => c.parent.select(end.id)}"
						aria-selected="${(end, c) =>
							c.parent.endIdSelected === end.id ? 'true' : null}"
						class="end"
						style="
							left: ${(end) => `calc(${end.x} / 1024 * 100%)`};
							top: ${(end) => `calc(${end.y} / 1024 * 100%)`};
						"
					></button>

					<div class="starts-container">
						${repeat(
							(end, c) => c.parent.starts[end.id],
							html<{
								id: number
								endId: number
								x: number
								y: number
								videoUrl: string
							}>`
								<button
									class="start"
									@click="${(start, c) =>
										c.parentContext.parent.showStuff(start.videoUrl, c.event)}"
									style="
											left: ${(start) => `calc(${start.x} / 1024 * 100%)`};
											top: ${(start) => `calc(${start.y} / 1024 * 100%)`};
										"
								></button>

								<svg viewBox="0 0 1024 1024">
									<line
										x1="${(_, c) => c.parent.x + 10}"
										y1="${(_, c) => c.parent.y + 10}"
										x2="${(start) => start.x + 10}"
										y2="${(start) => start.y + 10}"
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
	@attr() mapName!: MapName

	@observable endIdSelected: number | null = null
	@observable videoUrl: string | null = null

	@observable mapUrl!: string

	videoElement!: HTMLVideoElement

	ends: { id: number; x: number; y: number }[] = [
		{
			id: 1,
			x: 483,
			y: 402,
		},
		{
			id: 2,
			x: 250,
			y: 227,
		},
	]

	starts: {
		[endId: number]: {
			id: number
			endId: number
			x: number
			y: number
			videoUrl: string
		}[]
	} = {
		1: [
			{
				id: 1,
				endId: 1,
				x: 447,
				y: 885,
				videoUrl: 'https://giant.gfycat.com/CapitalClearAlligator.mp4',
			},
			{
				id: 2,
				endId: 1,
				x: 544,
				y: 648,
				videoUrl: 'https://giant.gfycat.com/WellwornKindIaerismetalmark.mp4',
			},
			{
				id: 3,
				endId: 1,
				x: 285,
				y: 405,
				videoUrl: 'https://giant.gfycat.com/IdioticAdventurousArabianoryx.mp4',
			},
		],
		2: [
			{
				id: 4,
				endId: 2,
				x: 133,
				y: 454,
				videoUrl: 'https://giant.gfycat.com/RashDizzyHarborporpoise.mp4',
			},
		],
	}

	mapNameChanged(): void {
		this.mapUrl = this.getMapUrl(this.mapName)
	}

	private getMapUrl(mapName: MapName): string {
		switch (mapName) {
			case 'de_dust2':
				return deDust2Url

			case 'de_nuke':
				return deNukeUrl

			default:
				throw new Error('Map non gérée')
		}
	}

	closeVideoWhenClickedOutside = (event: any) => {
		const elementClicked = event.path[0]

		if (elementClicked === this.videoElement) {
			return
		}

		this.videoUrl = null
		document.removeEventListener('click', this.closeVideoWhenClickedOutside)
	}

	select(endIdToToggle: number): void {
		if (endIdToToggle === this.endIdSelected) {
			this.endIdSelected = null

			return
		}

		this.endIdSelected = endIdToToggle
	}

	showStuff(videoUrl: string, event: Event): void {
		event.stopPropagation()
		this.videoUrl = videoUrl

		document.addEventListener('click', this.closeVideoWhenClickedOutside)
	}
}
