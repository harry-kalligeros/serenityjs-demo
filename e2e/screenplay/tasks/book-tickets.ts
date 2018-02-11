import { protractor } from 'protractor';
import { Click, Enter, PerformsTasks, step, Task, Target, BrowseTheWeb, Scroll } from 'serenity-js/lib/screenplay-protractor';
import { TicketsPageUI } from '../user-interface/ticket-page';
import { Workshop } from './book-workshop-tickets';
import { TalkTicketType } from './book-talk-tickets';

export class BookTickets implements Task {
	ticketType: TalkTicketType | Workshop;
	noOfTickets: number;

	public static in(tab: Target) {
		return new BookTickets(tab);
	}

	public ofType(ticketType: TalkTicketType | Workshop) {
		this.ticketType = ticketType;
		return this;
	}

	public ofQuantity(numberOfTickets: number) {
		this.noOfTickets = numberOfTickets;
		return this;
	}

	@step('{0} buys a quantity of #numberOfTickets')
	performAs(actor: PerformsTasks): PromiseLike<void> {
		return actor.attemptsTo(
			Click.on(this.tab),
			Enter.theValue(this.noOfTickets)
				.into(TicketsPageUI.pickTickets().ofType(this.ticketType))
		);
	}

	private numberOfTickets() {
		return this.noOfTickets;
	}

	constructor(private tab: Target) { }
}

