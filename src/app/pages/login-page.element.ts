import { RootElement } from '../root.element'
import {
	FASTElement,
	bind,
	customElement,
	html,
	observable,
} from '@microsoft/fast-element'
// @ts-ignore
import { twoWay } from '@microsoft/fast-element/binding/two-way'

@customElement({
	name: 'app-login-page',
	template: html<LoginPageElement>`
		<input
			:value="${bind((x) => x.email, twoWay)}"
			type="text"
			placeholder="Email"
		/>

		<button @click="${(x) => x.login()}">Login</button>
	`,
})
export class LoginPageElement extends FASTElement {
	@observable
	email = ''

	login(): void {
		try {
			RootElement.supabase.auth.signIn(
				{ email: this.email },
				{ shouldCreateUser: false },
			)
			alert('Check your email for the login link!')
		} catch (error) {
			console.error(error)
		}
	}
}
