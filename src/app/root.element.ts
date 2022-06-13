import { AppRouterConfiguration } from './app-router-configuration.js'
import { FASTElement, css, customElement, html } from '@microsoft/fast-element'
import { FASTRouter } from "@microsoft/fast-router";

FASTRouter;

@customElement({
	name: 'app-root',
	styles: css`
		:host {
			contain: content;
		}

		:host,
		fast-router {
			display: block;
			width: 100%;
			height: 100%;
		}
	`,
	template: html<RootElement>`
		<fast-router :config=${(x) => x.routerConfiguration}></fast-router>
	`,
})
export class RootElement extends FASTElement {
	routerConfiguration = new AppRouterConfiguration()
}
