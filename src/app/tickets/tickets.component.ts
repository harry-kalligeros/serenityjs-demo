import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-tickets',
	templateUrl: './tickets.component.html',
	styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {
	userOption: string;
	isRegistrationFormShown: boolean;
	constructor() { }

	ngOnInit() {
	}

	selectEvent($event: Event, userOption: string) {
		$event.preventDefault();
		this.userOption = userOption;
	}

	register($event: Event) {
		$event.preventDefault();
		this.isRegistrationFormShown = true;
	}

}
