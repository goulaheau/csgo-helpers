import '../components/map.element.js'
import { StuffSelectorElement } from '../components/stuff-selector.element'
import { StuffLocalizations } from '../core/interfaces/stuff-localizations'
import { StuffLocalizationsByStuff } from '../core/interfaces/stuff-localizations-by-stuff'
import { readStream } from '../core/streams/read-stream'
import mapUrl from '/assets/maps/de_dust2.png'
import {
	FASTElement,
	customElement,
	html,
	observable,
} from '@microsoft/fast-element'

@customElement({
	name: 'app-de-dust2-page',
	template: html<DeDust2PageElement>`
		<app-map
			:mapUrl="${() => mapUrl}"
			:stuffLocalizations="${(x) => x.stuffLocalizations}"
		></app-map>
	`,
})
export class DeDust2PageElement extends FASTElement {
	readonly stuffLocalizationsByStuff: StuffLocalizationsByStuff = {
		smoke: {
			arrivals: [
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
			],
			departuresByArrivalId: {
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
						videoUrl:
							'https://giant.gfycat.com/WellwornKindIaerismetalmark.mp4',
					},
					{
						id: 3,
						endId: 1,
						x: 285,
						y: 405,
						videoUrl:
							'https://giant.gfycat.com/IdioticAdventurousArabianoryx.mp4',
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
			},
		},
		flash: {
			arrivals: [],
			departuresByArrivalId: {},
		},
		molotov: {
			arrivals: [],
			departuresByArrivalId: {},
		},
		grenade: {
			arrivals: [],
			departuresByArrivalId: {},
		},
	}

	@observable
	stuffLocalizations!: StuffLocalizations

	connectedCallback(): void {
		this.stuffLocalizations =
			this.stuffLocalizationsByStuff[StuffSelectorElement.stuffActivated]

		super.connectedCallback()

		setTimeout(() => {
			readStream(
				StuffSelectorElement.stuffActivatedReader,
				(stuffActivated) => {
					this.stuffLocalizations =
						this.stuffLocalizationsByStuff[stuffActivated]
				},
			)
		})
	}

	disconnectedCallback(): void {
		StuffSelectorElement.setupNewStream()
		super.disconnectedCallback()
	}
}