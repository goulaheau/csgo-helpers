import { StuffSelectorElement } from '../components/stuff-selector.element'
import { StuffLocalizations } from '../core/interfaces/stuff-localizations'
import { StuffLocalizationsByStuff } from '../core/interfaces/stuff-localizations-by-stuff'
import { readStream } from '../core/streams/read-stream'
import { Stuff } from '../core/types/stuff'
import { DbService } from '../db.service'
import deAncientMapUrl from '/assets/maps/de_ancient.png'
import deDust2MapUrl from '/assets/maps/de_dust2.png'
import deInfernoMapUrl from '/assets/maps/de_inferno.png'
import deMirageMapUrl from '/assets/maps/de_mirage.png'
import deNukeMapUrl from '/assets/maps/de_nuke.png'
import deOverpassMapUrl from '/assets/maps/de_overpass.png'
import deVertigoMapUrl from '/assets/maps/de_vertigo.png'
import {
	ElementViewTemplate,
	FASTElement,
	html,
	observable,
	when,
} from '@microsoft/fast-element'

export const mapPageElementTemplate: ElementViewTemplate<AbstractMapPageElement> = html<AbstractMapPageElement>`
	${when(
		(x) => !!x.stuffLocalizations,
		html<AbstractMapPageElement>`
			<app-map
				:mapId="${(x) => x.mapId}"
				:mapUrl="${(x) => x.mapUrl}"
				:stuff="${(x) => x.stuffActivated}"
				:stuffLocalizations="${(x) => x.stuffLocalizations}"
			></app-map>
		`,
	)}
`

export abstract class AbstractMapPageElement extends FASTElement {
	abstract readonly mapId: number

	@observable
	stuffLocalizationsByStuff: StuffLocalizationsByStuff | null = null

	@observable
	stuffActivated!: Stuff

	@observable
	stuffLocalizations: StuffLocalizations | null = null

	@observable
	mapUrl!: string

	readonly mapIdToMapUrl: { [mapId: number]: string } = {
		1: deAncientMapUrl,
		2: deDust2MapUrl,
		3: deInfernoMapUrl,
		4: deMirageMapUrl,
		5: deNukeMapUrl,
		6: deOverpassMapUrl,
		7: deVertigoMapUrl,
	}

	connectedCallback(): void {
		this.mapUrl = this.mapIdToMapUrl[this.mapId]

		DbService.getStuffLocalizationsByStuff(this.mapId).then(
			(stuffLocalizationsByStuff) => {
				this.stuffLocalizationsByStuff = stuffLocalizationsByStuff

				if (this.stuffLocalizationsByStuff) {
					this.stuffLocalizations =
						this.stuffLocalizationsByStuff[StuffSelectorElement.stuffActivated]
				}
			},
		)
		this.stuffActivated = StuffSelectorElement.stuffActivated

		super.connectedCallback()

		setTimeout(() => {
			readStream(
				StuffSelectorElement.stuffActivatedReader,
				(stuffActivated) => {
					this.stuffActivated = StuffSelectorElement.stuffActivated

					this.stuffLocalizations =
						this.stuffLocalizationsByStuff?.[stuffActivated] ?? null
				},
			)
		})
	}

	disconnectedCallback(): void {
		StuffSelectorElement.setupNewStream()
		super.disconnectedCallback()
	}
}
