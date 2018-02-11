import { Injectable } from '@angular/core';

@Injectable()
export class TicketService {

	constructor() { }

	talkTickets = {
		earlyTickets: 40,
		regularTickets: 60,
		vipTickets: 140

	};

	workshopTickets = {
		workshopA: 40,
		workshopB: 60,
		workshopC: 80
	};

	talkTicketLabels = {
		earlyTickets: 'Early Tickets',
		regularTickets: 'Regular Tickets',
		vipTickets: 'VIP Tickets'
	};

	workshopTicketLabels = {
		workshopA: 'Workshop A',
		workshopB: 'Workshop B',
		workshopC: 'Workshop C'
	};

	public getTicketPrices() {
		return {...this.talkTickets, ...this.workshopTickets};
	}

	public getTicketLabels() {
		return {...this.talkTicketLabels, ...this.workshopTicketLabels};
	}

}
