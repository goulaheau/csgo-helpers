import '../components/map.element.js'
import { StuffSelectorElement } from '../components/stuff-selector.element'
import { StuffLocalizations } from '../core/interfaces/stuff-localizations'
import { StuffLocalizationsByStuff } from '../core/interfaces/stuff-localizations-by-stuff'
import { readStream } from '../core/streams/read-stream'
import mapUrl from '/assets/maps/de_nuke.png'
import {
	FASTElement,
	customElement,
	html,
	observable,
} from '@microsoft/fast-element'

@customElement({
	name: 'app-de-nuke-page',
	template: html`
		<app-map
			:mapUrl="${() => mapUrl}"
			:stuffLocalizations="${(x) => x.stuffLocalizations}"
		></app-map>
	`,
})
export class DeNukePageElement extends FASTElement {
	readonly stuffLocalizationsByStuff: StuffLocalizationsByStuff = {
		smoke: {
			arrivals: [],
			departuresByArrivalId: {},
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