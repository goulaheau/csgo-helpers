import '../components/map.element.js'
import { StuffSelectorElement } from '../components/stuff-selector.element'
import { StuffLocalizations } from '../core/interfaces/stuff-localizations'
import { StuffLocalizationsByStuff } from '../core/interfaces/stuff-localizations-by-stuff'
import { readStream } from '../core/streams/read-stream'
import mapUrl from '/assets/maps/de_inferno.png'
import {
	FASTElement,
	customElement,
	html,
	observable,
} from '@microsoft/fast-element'

@customElement({
	name: 'app-de-inferno-page',
	template: html`
		<app-map
			:mapUrl="${() => mapUrl}"
			:stuffLocalizations="${(x) => x.stuffLocalizations}"
		></app-map>
	`,
})
export class DeInfernoPageElement extends FASTElement {
	readonly stuffLocalizationsByStuff: StuffLocalizationsByStuff = {
		smoke: {
			arrivals: [
				{
					id: 1,
					x: 887,
					y: 613,
				},
			],
			departuresByArrivalId: {
				1: [
					{
						id: 1,
						endId: 1,
						x: 609,
						y: 683,
						videoUrl: 'https://giant.gfycat.com/GraciousDecentAnhinga.mp4',
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