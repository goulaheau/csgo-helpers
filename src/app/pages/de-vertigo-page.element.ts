import '../components/map.element.js'
import {
	AbstractMapPageElement,
	mapPageElementTemplate,
} from './abstract-map-page.element'
import { customElement } from '@microsoft/fast-element'

@customElement({
	name: 'app-de-vertigo-page',
	template: mapPageElementTemplate,
})
export class DeVertigoPageElement extends AbstractMapPageElement {
	readonly mapId = 7
}
