import { buildStream } from '../core/streams/build-stream'
import { MapName } from '../core/types/map-name'
import { RecognizedRoute, Router } from '@microsoft/fast-router'

export class AppRoutingEventSink {
	static instance = new AppRoutingEventSink()

	controller!: ReadableStreamController<MapName>

	actualMapName$ = buildStream<MapName>((controller) => {
		this.controller = controller
	})

	constructor() {
		return AppRoutingEventSink.instance
	}

	onNavigationEnd(_: Router, route: RecognizedRoute): void {
		const actualMapName = route.endpoint.path.split('/')[1] as MapName

		this.controller.enqueue(actualMapName)
	}

	onUnhandledNavigationMessage(): void {}
	onNavigationBegin(): void {}
	onPhaseBegin(): void {}
	onPhaseEnd(): void {}
}