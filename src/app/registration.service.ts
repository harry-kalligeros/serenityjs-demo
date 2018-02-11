import { Injectable } from '@angular/core';

import * as low from 'lowdb';
import * as LocalStorage from 'lowdb/adapters/LocalStorage';
import { Registration } from './registration';
import { Ticket } from './ticket';

const adapter = new LocalStorage('db');

@Injectable()
export class RegistrationService {
	db = low(adapter);
	workshopTypes = ['workshopA', 'workshopB', 'workshopC'];
	talkTicketTypes = ['earlyTickets', 'regularTickets', 'vipTickets'];


	constructor() {
		this.db.defaults({
			registrations: [],
			countries: this.countriesList(),
			tickets: []
		})
			.write();
	}

	fetchRegistrations() {
		return this.db.get('registrations')
			.value();
	}

	fetchCountries() {
		return this.db.get('countries')
			.value();
	}

	fetchTalkTickets() {
		return this.fetchTicketByType(this.talkTicketTypes);
	}

	fetchWorkshopTickets() {
		return this.fetchTicketByType(this.workshopTypes);
	}

	fetchTicketByType(ticketTypes: string[]) {
		return this.flatten(this.db.get('tickets').value())
			.reduce((acc: Ticket, row: Ticket) => {
				const entries = Object.entries(row);
				const key: string = entries[0][0];
				const value: number = entries[0][1];
				const result = acc;
				if (ticketTypes.includes(key)) {
					if (!result[key]) {
						result[key] = value;
					} else {
						result[key] += value;
					}
				}
				return result;
			}, {})
			;
	}

	// Data is automatically saved to localStorage
	persistRegistration(record: Registration) {
		this.db.get('registrations')
			.push(record)
			.write();
	}

	persistTicket(record: Ticket) {
		this.db.get('tickets')
			.push(record)
			.write();
	}

	private countriesList() {
		return [
			{
				code: 'GB',
				value: 'United Kingdom'
			}, {
				code: 'AL',
				value: 'Albania'
			}, {
				code: 'AD',
				value: 'Andorra'
			}, {
				code: 'AT',
				value: 'Austria'
			}, {
				code: 'BY',
				value: 'Belarus'
			}, {
				code: 'BE',
				value: 'Belgium'
			}, {
				code: 'BA',
				value: 'Bosnia and Herzegovina'
			}, {
				code: 'BG',
				value: 'Bulgaria'
			}, {
				code: 'HR',
				value: 'Croatia (Hrvatska)'
			}, {
				code: 'CY',
				value: 'Cyprus'
			}, {
				code: 'CZ',
				value: 'Czech Republic'
			}, {
				code: 'FR',
				value: 'France'
			}, {
				code: 'GI',
				value: 'Gibraltar'
			}, {
				code: 'DE',
				value: 'Germany'
			}, {
				code: 'GR',
				value: 'Greece'
			}, {
				code: 'VA',
				value: 'Holy See (Vatican City State)'
			}, {
				code: 'HU',
				value: 'Hungary'
			}, {
				code: 'IT',
				value: 'Italy'
			}, {
				code: 'LI',
				value: 'Liechtenstein'
			}, {
				code: 'LU',
				value: 'Luxembourg'
			}, {
				code: 'MK',
				value: 'Macedonia'
			}, {
				code: 'MT',
				value: 'Malta'
			}, {
				code: 'MD',
				value: 'Moldova'
			}, {
				code: 'MC',
				value: 'Monaco'
			}, {
				code: 'ME',
				value: 'Montenegro'
			}, {
				code: 'NL',
				value: 'Netherlands'
			}, {
				code: 'PL',
				value: 'Poland'
			}, {
				code: 'PT',
				value: 'Portugal'
			}, {
				code: 'RO',
				value: 'Romania'
			}, {
				code: 'SM',
				value: 'San Marino'
			}, {
				code: 'RS',
				value: 'Serbia'
			}, {
				code: 'SK',
				value: 'Slovakia'
			}, {
				code: 'SI',
				value: 'Slovenia'
			}, {
				code: 'ES',
				value: 'Spain'
			}, {
				code: 'UA',
				value: 'Ukraine'
			}, {
				code: 'DK',
				value: 'Denmark'
			}, {
				code: 'EE',
				value: 'Estonia'
			}, {
				code: 'FO',
				value: 'Faroe Islands'
			}, {
				code: 'FI',
				value: 'Finland'
			}, {
				code: 'GL',
				value: 'Greenland'
			}, {
				code: 'IS',
				value: 'Iceland'
			}, {
				code: 'IE',
				value: 'Ireland'
			}, {
				code: 'LV',
				value: 'Latvia'
			}, {
				code: 'LT',
				value: 'Lithuania'
			}, {
				code: 'NO',
				value: 'Norway'
			}, {
				code: 'SJ',
				value: 'Svalbard and Jan Mayen Islands'
			}, {
				code: 'SE',
				value: 'Sweden'
			}, {
				code: 'CH',
				value: 'Switzerland'
			}, {
				code: 'TR',
				value: 'Turkey'
			}];
	}

	private flatten(arr: Array<Array<any>>) {
		return arr.reduce((flat, toFlatten) => {
			return flat.concat(Array.isArray(toFlatten) ? this.flatten(toFlatten) : toFlatten);
		}, []);
	}

}
