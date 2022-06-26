export function buildStream<Response>(
	startCallback: (controller: ReadableStreamController<Response>) => any,
): ReadableStream<Response> {
	return new ReadableStream<Response>({
		start: startCallback,
	})
}
