import '../components/stuff-selector.element'
import './nav.element'
import { css, html } from '@microsoft/fast-element'
import { FASTElementLayout } from '@microsoft/fast-router'

export const defaultLayout = new FASTElementLayout(
	html`
		<nav>
			<app-nav></app-nav>
		</nav>

		<main>
			<slot></slot>

			<app-stuff-selector></app-stuff-selector>
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
			display: flex;
		}
	`,
)
