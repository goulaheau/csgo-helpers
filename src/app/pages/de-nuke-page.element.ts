import '../components/map.element.js'
import {
	AbstractMapPageElement,
	mapPageElementTemplate,
} from './abstract-map-page.element'
import { customElement } from '@microsoft/fast-element'

@customElement({
	name: 'app-de-nuke-page',
	template: mapPageElementTemplate,
})
export class DeNukePageElement extends AbstractMapPageElement {
	readonly mapId = 5
}
