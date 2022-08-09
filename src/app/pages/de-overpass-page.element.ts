import '../components/map.element.js'
import {
	AbstractMapPageElement,
	mapPageElementTemplate,
} from './abstract-map-page.element'
import { customElement } from '@microsoft/fast-element'

@customElement({
	name: 'app-de-overpass-page',
	template: mapPageElementTemplate,
})
export class DeOverpassPageElement extends AbstractMapPageElement {
	readonly mapId = 6
}
