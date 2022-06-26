import { readStream } from '../core/streams/read-stream'
import { MapName } from '../core/types/map-name'
import { AppRoutingEventSink } from '../router/app-routing-event-sink'
import {
	FASTElement,
	css,
	customElement,
	html,
	observable,
	repeat,
} from '@microsoft/fast-element'

@customElement({
	name: 'app-nav',
	styles: css`
		ul {
			padding: 0;
			margin: 0;
			background: #000;
			height: 100vh;
			width: calc((100vw - 100vh) / 2);
		}

		li {
			list-style-type: none;
		}

		li > * {
			padding: 10px 20px;
			color: #fff;
			font-size: 1.5rem;
			display: block;
		}

		h1 {
			margin: 0;
		}

		a {
			text-decoration: none;
		}

		a:hover,
		a.activated {
			background: #212121;
		}

		.activated {
			font-weight: 700;
		}
	`,
	template: html<NavElement>`
		<ul>
			<li>
				<h1>CS:GO Helpers</h1>
			</li>

			${repeat(
				(x) => x.mapNames,
				html<string, NavElement>`
					<li>
						<a
							href="/csgo-helpers/${(map) => map}"
							class="${(map, c) =>
								c.parent.actualMapName === map ? 'activated' : ''}"
						>
							${(map) => map}
						</a>
					</li>
				`,
			)}
		</ul>
	`,
})
export class NavElement extends FASTElement {
	@observable actualMapName!: MapName

	mapNames: MapName[] = [
		'de_dust2',
		'de_nuke',
		'de_vertigo',
		'de_overpass',
		'de_inferno',
		'de_mirage',
		'de_ancient',
	]

	connectedCallback(): void {
		super.connectedCallback()

		const reader = AppRoutingEventSink.instance.actualMapName$.getReader()

		readStream(reader, (actualMapName) => {
			this.actualMapName = actualMapName
		})
	}
}