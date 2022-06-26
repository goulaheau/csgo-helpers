import { AppRouterConfiguration } from './router/app-router-configuration'
import { FASTElement, css, customElement, html } from '@microsoft/fast-element'
import { FASTRouter } from '@microsoft/fast-router'

FASTRouter

@customElement({
	name: 'app-root',
	styles: css`
		:host {
			contain: content;
		}
	`,
	template: html<RootElement>`
		<fast-router :config=${(x) => x.routerConfiguration}></fast-router>
	`,
})
export class RootElement extends FASTElement {
	routerConfiguration = new AppRouterConfiguration()
}