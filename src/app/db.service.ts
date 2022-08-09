import { StuffDeparture } from './core/interfaces/stuff-departure'
import { StuffLocalizationsByStuff } from './core/interfaces/stuff-localizations-by-stuff'
import { RootElement } from './root.element'

export class DbService {
	static async getStuffLocalizationsByStuff(
		mapId: number,
	): Promise<StuffLocalizationsByStuff | null> {
		const arrivalsResponse = await RootElement.supabase
			.from('arrival')
			.select()
			.eq('mapId', mapId)

		if (arrivalsResponse.error) {
			return null
		}

		const ret: StuffLocalizationsByStuff = {
			smoke: {
				arrivals: [],
				departuresByArrivalId: {},
			},
			flash: {
				arrivals: [],
				departuresByArrivalId: {},
			},
			molotov: {
				arrivals: [],
				departuresByArrivalId: {},
			},
			grenade: {
				arrivals: [],
				departuresByArrivalId: {},
			},
		}

		let promises: PromiseLike<any>[] = []

		arrivalsResponse.data.forEach((arrival) => {
			promises.push(
				RootElement.supabase
					.from('departure')
					.select()
					.eq('arrivalId', arrival.id)
					.then((departureResponse) => {
						if (departureResponse.error) {
							return
						}

						departureResponse.data.forEach((departure: StuffDeparture) => {
							if (!ret[departure.stuff].arrivals.includes(arrival)) {
								ret[departure.stuff].arrivals.push(arrival)
							}

							if (!ret[departure.stuff].departuresByArrivalId[arrival.id]) {
								ret[departure.stuff].departuresByArrivalId[arrival.id] = []
							}

							ret[departure.stuff].departuresByArrivalId[arrival.id].push(
								departure,
							)
						})
					}),
			)
		})

		await Promise.all(promises)

		return ret
	}

	static async createArrival(
		x: number,
		y: number,
		mapId: number,
	): Promise<any> {
		return RootElement.supabase.from('arrival').insert([{ x, y, mapId }])
	}

	static async createDeparture(
		arrivalId: number,
		x: number,
		y: number,
		stuff: string,
		videoUrl: string,
	): Promise<any> {
		return RootElement.supabase
			.from('departure')
			.insert([{ arrivalId, x, y, stuff, videoUrl }])
	}
}
