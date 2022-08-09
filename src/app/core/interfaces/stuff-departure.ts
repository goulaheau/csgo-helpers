import { Stuff } from '../types/stuff'

export interface StuffDeparture {
	id: number
	arrivalId: number
	x: number
	y: number
	stuff: Stuff
	videoUrl: string
}
