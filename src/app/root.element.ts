import { buildStream } from './core/streams/build-stream'
import { AppRouterConfiguration } from './router/app-router-configuration'
import { FASTElement, css, customElement, html } from '@microsoft/fast-element'
import { FASTRouter } from '@microsoft/fast-router'
import { SupabaseClient, createClient } from '@supabase/supabase-js'

FASTRouter

@customElement({
	name: 'app-root',
	styles: css`
		:host {
			contain: content;
		}
	`,
	template: html<RootElement>`
		<fast-router :config=${(x) => x.routerConfiguration}></fast-router>
	`,
})
export class RootElement extends FASTElement {
	static supabase: SupabaseClient

	static editing = false
	static controller: ReadableStreamController<boolean>
	static editing$: ReadableStream<boolean>
	static editingReader: ReadableStreamDefaultReader<boolean>

	routerConfiguration = new AppRouterConfiguration()

	static setupNewStream(): void {
		RootElement.editingReader?.cancel()
		RootElement.editing$ = buildStream<boolean>((controller) => {
			RootElement.controller = controller
		})
		RootElement.editingReader = RootElement.editing$.getReader()
	}

	connectedCallback(): void {
		RootElement.setupNewStream()

		RootElement.supabase = createClient(
			'https://cdllvkmnlpuuaxeuzegp.supabase.co',
			'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNkbGx2a21ubHB1dWF4ZXV6ZWdwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTY4NjY4ODUsImV4cCI6MTk3MjQ0Mjg4NX0.2BliLwnyG1tUqOmXTnleFYzxmgZoGstr4WNZdiDsKSE',
		)

		super.connectedCallback()
	}
}
