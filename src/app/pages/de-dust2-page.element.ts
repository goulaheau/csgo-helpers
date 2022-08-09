import '../components/map.element.js'
import {
	AbstractMapPageElement,
	mapPageElementTemplate,
} from './abstract-map-page.element'
import { customElement } from '@microsoft/fast-element'

@customElement({
	name: 'app-de-dust2-page',
	template: mapPageElementTemplate,
})
export class DeDust2PageElement extends AbstractMapPageElement {
	readonly mapId = 2
}
