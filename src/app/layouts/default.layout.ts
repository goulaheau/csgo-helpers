import { html } from '@microsoft/fast-element'
import { FASTElementLayout } from '@microsoft/fast-router'

export const defaultLayout = new FASTElementLayout(
	html`
		<slot></slot>
	`,
)
