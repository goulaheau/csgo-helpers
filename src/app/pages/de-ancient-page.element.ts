import '../components/map.element.js'
import {
	AbstractMapPageElement,
	mapPageElementTemplate,
} from './abstract-map-page.element'
import { customElement } from '@microsoft/fast-element'

@customElement({
	name: 'app-de-ancient-page',
	template: mapPageElementTemplate,
})
export class DeAncientPageElement extends AbstractMapPageElement {
	readonly mapId = 1
}
