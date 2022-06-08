import '../components/map.element.js'
import { FASTElement, customElement, html } from '@microsoft/fast-element'

@customElement({
	name: 'app-de-dust2-page',
	template: html`
		<app-map mapName="de_dust2"></app-map>
	`,
})
export class DeDust2PageElement extends FASTElement {}
