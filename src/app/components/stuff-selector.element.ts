import { buildStream } from '../core/streams/build-stream'
import { Stuff } from '../core/types/stuff'
import {
	FASTElement,
	attr,
	css,
	customElement,
	html,
	repeat,
} from '@microsoft/fast-element'

@customElement({
	name: 'app-stuff-selector',
	styles: css`
		ul {
			margin: 0;
			padding: 0;
			background: #000;
			height: 100vh;
			width: calc((100vw - 100vh) / 2);
		}

		li {
			list-style-type: none;
			cursor: pointer;
			padding: 10px 20px;
			color: #fff;
			font-size: 1.5rem;
			display: block;
		}

		li:hover,
		li.activated {
			background: #212121;
		}

		.activated {
			font-weight: 700;
		}
	`,
	template: html<StuffSelectorElement>`
		<ul>
			${repeat(
				(x) => x.stuffs,
				html<Stuff, StuffSelectorElement>`
					<li
						@click="${(stuff, c) => c.parent.activate(stuff)}"
						class="${(stuff, c) =>
							c.parent.activated === stuff ? 'activated' : ''}"
					>
						${(stuff, c) => c.parent.capitalizeFirstLetter(stuff)}
					</li>
				`,
			)}
		</ul>
	`,
})
export class StuffSelectorElement extends FASTElement {
	@attr
	activated: Stuff = 'smoke'

	static stuffActivated: Stuff = 'smoke'

	static controller: ReadableStreamController<Stuff>
	static stuffActivated$: ReadableStream<Stuff>
	static stuffActivatedReader: ReadableStreamDefaultReader<Stuff>

	readonly stuffs = ['smoke', 'flash', 'molotov', 'grenade']

	static setupNewStream(): void {
		StuffSelectorElement.stuffActivatedReader?.cancel()
		StuffSelectorElement.stuffActivated$ = buildStream<Stuff>((controller) => {
			StuffSelectorElement.controller = controller
		})
		StuffSelectorElement.stuffActivatedReader =
			StuffSelectorElement.stuffActivated$.getReader()
	}

	connectedCallback(): void {
		StuffSelectorElement.setupNewStream()

		super.connectedCallback()
	}

	activate(stuff: Stuff): void {
		this.activated = stuff

		StuffSelectorElement.stuffActivated = stuff
		StuffSelectorElement.controller.enqueue(stuff)
	}

	capitalizeFirstLetter(string: string) {
		return string.charAt(0).toUpperCase() + string.slice(1)
	}
}