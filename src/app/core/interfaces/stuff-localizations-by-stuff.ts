import { Stuff } from '../types/stuff'
import { StuffLocalizations } from './stuff-localizations'

export type StuffLocalizationsByStuff = {
	[stuff in Stuff]: StuffLocalizations
}
