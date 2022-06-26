import { StuffArrival } from '../app/core/interfaces/stuff-arrival'
import { StuffDeparture } from '../app/core/interfaces/stuff-departure'
import { StuffDeparturesByArrivalId } from '../app/core/interfaces/stuff-departures-by-arrival-id'
import { StuffLocalizations } from '../app/core/interfaces/stuff-localizations'
import { StuffLocalizationsByStuff } from '../app/core/interfaces/stuff-localizations-by-stuff'
import { MapName } from '../app/core/types/map-name'
import { Stuff } from '../app/core/types/stuff'
import deAncientFlashArrivals from '../db/de_ancient/flashes/arrivals.json'
import deAncientFlashDepartures from '../db/de_ancient/flashes/departures.json'
import deAncientGrenadeArrivals from '../db/de_ancient/grenades/arrivals.json'
import deAncientGrenadeDepartures from '../db/de_ancient/grenades/departures.json'
import deAncientMolotovArrivals from '../db/de_ancient/molotoves/arrivals.json'
import deAncientMolotovDepartures from '../db/de_ancient/molotoves/departures.json'
import deAncientSmokeArrivals from '../db/de_ancient/smokes/arrivals.json'
import deAncientSmokeDepartures from '../db/de_ancient/smokes/departures.json'
import deDust2FlashArrivals from '../db/de_dust2/flashes/arrivals.json'
import deDust2FlashDepartures from '../db/de_dust2/flashes/departures.json'
import deDust2GrenadeArrivals from '../db/de_dust2/grenades/arrivals.json'
import deDust2GrenadeDepartures from '../db/de_dust2/grenades/departures.json'
import deDust2MolotovArrivals from '../db/de_dust2/molotoves/arrivals.json'
import deDust2MolotovDepartures from '../db/de_dust2/molotoves/departures.json'
import deDust2SmokeArrivals from '../db/de_dust2/smokes/arrivals.json'
import deDust2SmokeDepartures from '../db/de_dust2/smokes/departures.json'
import deInfernoFlashArrivals from '../db/de_inferno/flashes/arrivals.json'
import deInfernoFlashDepartures from '../db/de_inferno/flashes/departures.json'
import deInfernoGrenadeArrivals from '../db/de_inferno/grenades/arrivals.json'
import deInfernoGrenadeDepartures from '../db/de_inferno/grenades/departures.json'
import deInfernoMolotovArrivals from '../db/de_inferno/molotoves/arrivals.json'
import deInfernoMolotovDepartures from '../db/de_inferno/molotoves/departures.json'
import deInfernoSmokeArrivals from '../db/de_inferno/smokes/arrivals.json'
import deInfernoSmokeDepartures from '../db/de_inferno/smokes/departures.json'
import deMirageFlashArrivals from '../db/de_mirage/flashes/arrivals.json'
import deMirageFlashDepartures from '../db/de_mirage/flashes/departures.json'
import deMirageGrenadeArrivals from '../db/de_mirage/grenades/arrivals.json'
import deMirageGrenadeDepartures from '../db/de_mirage/grenades/departures.json'
import deMirageMolotovArrivals from '../db/de_mirage/molotoves/arrivals.json'
import deMirageMolotovDepartures from '../db/de_mirage/molotoves/departures.json'
import deMirageSmokeArrivals from '../db/de_mirage/smokes/arrivals.json'
import deMirageSmokeDepartures from '../db/de_mirage/smokes/departures.json'
import deNukeFlashArrivals from '../db/de_nuke/flashes/arrivals.json'
import deNukeFlashDepartures from '../db/de_nuke/flashes/departures.json'
import deNukeGrenadeArrivals from '../db/de_nuke/grenades/arrivals.json'
import deNukeGrenadeDepartures from '../db/de_nuke/grenades/departures.json'
import deNukeMolotovArrivals from '../db/de_nuke/molotoves/arrivals.json'
import deNukeMolotovDepartures from '../db/de_nuke/molotoves/departures.json'
import deNukeSmokeArrivals from '../db/de_nuke/smokes/arrivals.json'
import deNukeSmokeDepartures from '../db/de_nuke/smokes/departures.json'
import deOverpassFlashArrivals from '../db/de_overpass/flashes/arrivals.json'
import deOverpassFlashDepartures from '../db/de_overpass/flashes/departures.json'
import deOverpassGrenadeArrivals from '../db/de_overpass/grenades/arrivals.json'
import deOverpassGrenadeDepartures from '../db/de_overpass/grenades/departures.json'
import deOverpassMolotovArrivals from '../db/de_overpass/molotoves/arrivals.json'
import deOverpassMolotovDepartures from '../db/de_overpass/molotoves/departures.json'
import deOverpassSmokeArrivals from '../db/de_overpass/smokes/arrivals.json'
import deOverpassSmokeDepartures from '../db/de_overpass/smokes/departures.json'
import deVertigoFlashArrivals from '../db/de_vertigo/flashes/arrivals.json'
import deVertigoFlashDepartures from '../db/de_vertigo/flashes/departures.json'
import deVertigoGrenadeArrivals from '../db/de_vertigo/grenades/arrivals.json'
import deVertigoGrenadeDepartures from '../db/de_vertigo/grenades/departures.json'
import deVertigoMolotovArrivals from '../db/de_vertigo/molotoves/arrivals.json'
import deVertigoMolotovDepartures from '../db/de_vertigo/molotoves/departures.json'
import deVertigoSmokeArrivals from '../db/de_vertigo/smokes/arrivals.json'
import deVertigoSmokeDepartures from '../db/de_vertigo/smokes/departures.json'

export class DbService {
	static readonly json: {
		[mapName in MapName]: {
			[stuff in Stuff]: {
				arrivals: StuffArrival[]
				departures: StuffDeparture[]
			}
		}
	} = {
		de_ancient: {
			smoke: {
				arrivals: deAncientSmokeArrivals,
				departures: deAncientSmokeDepartures,
			},
			flash: {
				arrivals: deAncientFlashArrivals,
				departures: deAncientFlashDepartures,
			},
			molotov: {
				arrivals: deAncientMolotovArrivals,
				departures: deAncientMolotovDepartures,
			},
			grenade: {
				arrivals: deAncientGrenadeArrivals,
				departures: deAncientGrenadeDepartures,
			},
		},
		de_dust2: {
			smoke: {
				arrivals: deDust2SmokeArrivals,
				departures: deDust2SmokeDepartures,
			},
			flash: {
				arrivals: deDust2FlashArrivals,
				departures: deDust2FlashDepartures,
			},
			molotov: {
				arrivals: deDust2MolotovArrivals,
				departures: deDust2MolotovDepartures,
			},
			grenade: {
				arrivals: deDust2GrenadeArrivals,
				departures: deDust2GrenadeDepartures,
			},
		},
		de_inferno: {
			smoke: {
				arrivals: deInfernoSmokeArrivals,
				departures: deInfernoSmokeDepartures,
			},
			flash: {
				arrivals: deInfernoFlashArrivals,
				departures: deInfernoFlashDepartures,
			},
			molotov: {
				arrivals: deInfernoMolotovArrivals,
				departures: deInfernoMolotovDepartures,
			},
			grenade: {
				arrivals: deInfernoGrenadeArrivals,
				departures: deInfernoGrenadeDepartures,
			},
		},
		de_mirage: {
			smoke: {
				arrivals: deMirageSmokeArrivals,
				departures: deMirageSmokeDepartures,
			},
			flash: {
				arrivals: deMirageFlashArrivals,
				departures: deMirageFlashDepartures,
			},
			molotov: {
				arrivals: deMirageMolotovArrivals,
				departures: deMirageMolotovDepartures,
			},
			grenade: {
				arrivals: deMirageGrenadeArrivals,
				departures: deMirageGrenadeDepartures,
			},
		},
		de_nuke: {
			smoke: {
				arrivals: deNukeSmokeArrivals,
				departures: deNukeSmokeDepartures,
			},
			flash: {
				arrivals: deNukeFlashArrivals,
				departures: deNukeFlashDepartures,
			},
			molotov: {
				arrivals: deNukeMolotovArrivals,
				departures: deNukeMolotovDepartures,
			},
			grenade: {
				arrivals: deNukeGrenadeArrivals,
				departures: deNukeGrenadeDepartures,
			},
		},
		de_overpass: {
			smoke: {
				arrivals: deOverpassSmokeArrivals,
				departures: deOverpassSmokeDepartures,
			},
			flash: {
				arrivals: deOverpassFlashArrivals,
				departures: deOverpassFlashDepartures,
			},
			molotov: {
				arrivals: deOverpassMolotovArrivals,
				departures: deOverpassMolotovDepartures,
			},
			grenade: {
				arrivals: deOverpassGrenadeArrivals,
				departures: deOverpassGrenadeDepartures,
			},
		},
		de_vertigo: {
			smoke: {
				arrivals: deVertigoSmokeArrivals,
				departures: deVertigoSmokeDepartures,
			},
			flash: {
				arrivals: deVertigoFlashArrivals,
				departures: deVertigoFlashDepartures,
			},
			molotov: {
				arrivals: deVertigoMolotovArrivals,
				departures: deVertigoMolotovDepartures,
			},
			grenade: {
				arrivals: deVertigoGrenadeArrivals,
				departures: deVertigoGrenadeDepartures,
			},
		},
	}

	static getStuffLocalizationsByStuff(
		mapName: MapName,
	): StuffLocalizationsByStuff {
		const mapJson: {
			[stuff in Stuff]: {
				arrivals: StuffArrival[]
				departures: StuffDeparture[]
			}
		} = DbService.json[mapName]

		return Object.keys(mapJson).reduce((accumulator, stuff) => {
			accumulator[stuff as Stuff] = {} as StuffLocalizations

			accumulator[stuff as Stuff].arrivals = mapJson[stuff as Stuff].arrivals
			accumulator[stuff as Stuff].departuresByArrivalId =
				DbService.getDeparturesByArrivalId(mapJson[stuff as Stuff].departures)

			return accumulator
		}, {} as StuffLocalizationsByStuff)
	}

	private static getDeparturesByArrivalId(
		stuffDepartures: StuffDeparture[],
	): StuffDeparturesByArrivalId {
		return stuffDepartures.reduce((accumulator, stuffDeparture) => {
			if (!accumulator[stuffDeparture.arrivalId]) {
				accumulator[stuffDeparture.arrivalId] = []
			}

			accumulator[stuffDeparture.arrivalId].push(stuffDeparture)

			return accumulator
		}, {} as StuffDeparturesByArrivalId)
	}
}