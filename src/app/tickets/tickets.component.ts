import { Component, OnInit } from '@angular/core';
import { Tickets, Ticket } from '../ticket';
import { RegistrationService } from '../registration.service';
import { CodeValue } from '../registration/code-value';
import { Registration } from '../registration';
import { Router } from '@angular/router';

@Component({
	selector: 'app-tickets',
	templateUrl: './tickets.component.html',
	styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {
	userOption: string;
	isRegistrationFormShown: boolean;
	tickets: Tickets = {} as Tickets;
	countries: CodeValue[];

	constructor(private registrationService: RegistrationService, private router: Router) { }

	ngOnInit() {
		this.countries = this.registrationService.fetchCountries();
	}

	selectEvent($event: Event, userOption: string) {
		$event.preventDefault();
		this.userOption = userOption;
	}

	fillPersonalInfo($event: Event) {
		$event.preventDefault();
		this.isRegistrationFormShown = true;
	}

	register(registration: Registration) {
		const ticket = Object.entries(this.tickets)
			.filter(row => !!row[1])
			.map(row => ({ [row[0]]: row[1] })) as Ticket;
		this.registrationService.persistTicket(ticket);
		this.registrationService.persistRegistration(registration);
		this.router.navigate(['/thankyou']);
	}

}
