import { DbService } from '../../db/db.service'
import '../components/map.element.js'
import { StuffSelectorElement } from '../components/stuff-selector.element'
import { StuffLocalizations } from '../core/interfaces/stuff-localizations'
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
	readonly stuffLocalizationsByStuff =
		DbService.getStuffLocalizationsByStuff('de_inferno')

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
