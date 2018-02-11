import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../registration.service';
import { Registration } from '../registration';
import { Ticket, TicketRow } from '../ticket';
import { TicketService } from '../ticket.service';

@Component({
	selector: 'app-admin',
	templateUrl: './admin.component.html',
	styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
	registrations: Registration[];
	talkTickets: TicketRow[];
	workshopTickets: TicketRow[];

	constructor(private registrationService: RegistrationService, private ticketService: TicketService) { }

	ngOnInit() {
		this.registrations = this.registrationService.fetchRegistrations();

		this.talkTickets = this.makeTalkTicketTable();
		this.workshopTickets = this.makeWorkshopTable();
	}

	makeTalkTicketTable() {
		const tickets = this.registrationService.fetchTalkTickets();
		return this.makeTicketTable(tickets);
	}

	makeWorkshopTable() {
		const tickets = this.registrationService.fetchWorkshopTickets();
		return this.makeTicketTable(tickets);
	}

	makeTicketTable(tickets: Ticket) {
		let row, quantity, price, unitPrice, sum = 0;
		const table = [];
		for (const ticketType in tickets) {
			if (tickets.hasOwnProperty(ticketType)) {
				quantity = tickets[ticketType];
				unitPrice = this.ticketService.getTicketPrices()[ticketType];
				price = quantity * unitPrice;
				sum += price;
				row = {
					ticketType: this.ticketService.getTicketLabels()[ticketType],
					quantity,
					unitPrice,
					price
				};
				table.push(row);
			}
		}
		table.push({
			ticketType: 'Sum',
			quantity: '',
			price: sum
		});
		return table;
	}

}
