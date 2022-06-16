import '../components/map.element.js'
import { FASTElement, customElement, html } from '@microsoft/fast-element'

@customElement({
	name: 'app-de-nuke-page',
	template: html`
		<app-map mapName="de_nuke"></app-map>
	`,
})
export class DeNukePageElement extends FASTElement {}
