import { Component, OnInit, Input } from '@angular/core';
import { TicketRow } from '../ticket';

@Component({
	selector: 'app-ticket-table',
	templateUrl: './ticket-table.component.html',
	styles: [`
		td, th {
			text-align: right;
		}

		table > thead > tr > th:first-child, table > tbody > tr > td:first-child {
			text-align: left;
		}

		table > tbody > tr:last-child {
			font-weight: bold;
		}
	`]
})
export class TicketTableComponent implements OnInit {

	@Input() tickets: TicketRow[];

	constructor() { }

	ngOnInit() {

	}

}
