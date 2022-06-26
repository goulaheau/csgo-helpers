export async function readStream<Response>(
	reader: ReadableStreamDefaultReader<Response>,
	handleResponseCallback: (response: Response) => void,
): Promise<void> {
	let readDone = false

	do {
		const read = await readNext(reader)

		if (!read.done) {
			handleResponseCallback(read.value)
		}

		readDone = read.done
	} while (!readDone)
}

async function readNext<Response>(
	reader: ReadableStreamDefaultReader<Response>,
): Promise<ReadableStreamDefaultReadResult<Response>> {
	return await reader.read()
}
