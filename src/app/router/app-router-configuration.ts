import { defaultLayout } from '../layouts/default.layout'
import { DeAncientPageElement } from '../pages/de-ancient-page.element'
import { DeDust2PageElement } from '../pages/de-dust2-page.element'
import { DeInfernoPageElement } from '../pages/de-inferno-page.element'
import { DeMiragePageElement } from '../pages/de-mirage-page.element'
import { DeNukePageElement } from '../pages/de-nuke-page.element'
import { DeOverpassPageElement } from '../pages/de-overpass-page.element'
import { DeVertigoPageElement } from '../pages/de-vertigo-page.element'
import { LoginPageElement } from '../pages/login-page.element'
import { AppRoutingEventSink } from './app-routing-event-sink'
import { RouterConfiguration } from '@microsoft/fast-router'

export class AppRouterConfiguration extends RouterConfiguration {
	configure(): void {
		this.title = 'CS:GO Helpers'

		this.defaultLayout = defaultLayout

		this.routes.map({
			path: 'csgo-helpers',
			children: [
				{
					path: 'login',
					title: 'Login',
					element: LoginPageElement,
				},
				{
					path: 'de_dust2',
					title: 'de_dust2',
					element: DeDust2PageElement,
				},
				{
					path: 'de_nuke',
					title: 'de_nuke',
					element: DeNukePageElement,
				},
				{
					path: 'de_vertigo',
					title: 'de_vertigo',
					element: DeVertigoPageElement,
				},
				{
					path: 'de_overpass',
					title: 'de_overpass',
					element: DeOverpassPageElement,
				},
				{
					path: 'de_inferno',
					title: 'de_inferno',
					element: DeInfernoPageElement,
				},
				{
					path: 'de_mirage',
					title: 'de_mirage',
					element: DeMiragePageElement,
				},
				{
					path: 'de_ancient',
					title: 'de_ancient',
					element: DeAncientPageElement,
				},
			],
		})

		this.routes.fallback({ redirect: 'csgo-helpers/de_dust2' })
	}

	public createEventSink(): AppRoutingEventSink {
		return this.construct(AppRoutingEventSink)
	}
}
