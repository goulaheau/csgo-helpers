import '../components/map.element.js'
import {
	AbstractMapPageElement,
	mapPageElementTemplate,
} from './abstract-map-page.element'
import { customElement } from '@microsoft/fast-element'

@customElement({
	name: 'app-de-mirage-page',
	template: mapPageElementTemplate,
})
export class DeMiragePageElement extends AbstractMapPageElement {
	readonly mapId = 4
}
