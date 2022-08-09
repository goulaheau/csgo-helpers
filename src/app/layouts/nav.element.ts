import { readStream } from '../core/streams/read-stream'
import { MapName } from '../core/types/map-name'
import { RootElement } from '../root.element'
import { AppRoutingEventSink } from '../router/app-routing-event-sink'
import {
	FASTElement,
	Observable,
	bind,
	css,
	customElement,
	html,
	observable,
	repeat,
	when,
} from '@microsoft/fast-element'
// @ts-ignore
import { twoWay } from '@microsoft/fast-element/binding/two-way'
import { User } from '@supabase/supabase-js'

@customElement({
	name: 'app-nav',
	styles: css`
		ul {
			padding: 0;
			margin: 0;
			background: #000;
			height: 100vh;
			width: calc((100vw - 100vh) / 2);
			display: flex;
			flex-direction: column;
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

		.edit {
			flex-grow: 1;
			display: flex;
			align-items: end;
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
			${when(
				(x) => !!x.user,
				html<NavElement>`
					<li class="edit">
						<label>
							<input
								type="checkbox"
								:checked="${bind((x) => x.editing, twoWay)}"
							/>

							Éditer
						</label>
					</li>
				`,
			)}
		</ul>
	`,
})
export class NavElement extends FASTElement {
	@observable actualMapName!: MapName
	@observable user: User | null = null

	private _editing = false

	get editing(): boolean {
		Observable.track(this, 'editing')
		return this._editing
	}

	set editing(editing: boolean) {
		this._editing = editing
		RootElement.editing = editing
		RootElement.controller.enqueue(editing)
		Observable.notify(this, 'editing')
	}

	mapNames: MapName[] = [
		'de_ancient',
		'de_dust2',
		'de_inferno',
		'de_mirage',
		'de_nuke',
		'de_overpass',
		'de_vertigo',
	]

	connectedCallback(): void {
		super.connectedCallback()

		const reader = AppRoutingEventSink.instance.actualMapName$.getReader()

		readStream(reader, (actualMapName) => {
			this.actualMapName = actualMapName
		})

		this.getUser()

		RootElement.supabase.auth.onAuthStateChange(() => {
			this.getUser()
		})
	}

	private getUser(): void {
		this.user = RootElement.supabase.auth.user()
	}
}
