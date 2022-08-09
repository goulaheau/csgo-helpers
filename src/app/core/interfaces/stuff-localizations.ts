import { StuffArrival } from './stuff-arrival'
import { StuffDeparturesByArrivalId } from './stuff-departures-by-arrival-id'

export interface StuffLocalizations {
	arrivals: StuffArrival[]
	departuresByArrivalId: StuffDeparturesByArrivalId
}
