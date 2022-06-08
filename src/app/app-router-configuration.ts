import { defaultLayout } from './layouts/default.layout.js'
import { DeDust2PageElement } from './pages/de-dust2-page.element.js'
import { RouterConfiguration } from '@microsoft/fast-router'

export class AppRouterConfiguration extends RouterConfiguration {
	configure(): void {
		this.title = 'CS:GO Helpers'

		this.defaultLayout = defaultLayout

		this.routes.map(
			{ path: '', redirect: 'de_dust2' },
			{ path: 'de_dust2', title: 'de_dust2', element: DeDust2PageElement },
		)

		this.routes.fallback({ redirect: '' })
	}
}
