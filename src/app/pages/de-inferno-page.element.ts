import '../components/map.element.js'
import {
	AbstractMapPageElement,
	mapPageElementTemplate,
} from './abstract-map-page.element'
import { customElement } from '@microsoft/fast-element'

@customElement({
	name: 'app-de-inferno-page',
	template: mapPageElementTemplate,
})
export class DeInfernoPageElement extends AbstractMapPageElement {
	readonly mapId = 3
}
