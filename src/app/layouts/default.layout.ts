import { css, html } from '@microsoft/fast-element'
import { FASTElementLayout } from '@microsoft/fast-router'

export const defaultLayout = new FASTElementLayout(
	html`
		<nav>
			<ul>
				<li>
					<h1>CS:GO Helpers</h1>
				</li>
				<li>
					<a href="/csgo-helpers/de_dust2">de_dust2</a>
				</li>
				<li>
					<a href="/csgo-helpers/de_nuke">de_nuke</a>
				</li>
			</ul>
		</nav>

		<main>
			<slot></slot>
		</main>
	`,
	css`
		* {
			font-family: sans-serif;
		}

		:host {
			display: flex;
			width: 100%;
			height: 100%;
		}

		main {
			flex-grow: 1;
		}

		ul {
			padding: 0;
			margin: 0;
		}

		li > * {
			padding: 10px 20px;
			color: #fff;
			font-size: 1.5rem;
			display: block;
			background: #000;
		}

		h1 {
			margin: 0;
		}

		a {
			text-decoration: none;
		}

		a:hover {
			background: #212121;
		}
	`,
)
