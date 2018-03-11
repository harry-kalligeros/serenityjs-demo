import { protractor } from 'protractor';
import { Click, Enter, PerformsTasks, step, Task, Target } from 'serenity-js/lib/screenplay-protractor';
import { TicketsPageUI } from '../user-interface/ticket-page';
import { BookTickets } from './book-tickets';


export type TalkTicketType = 'early' | 'regular' | 'vip';
export class BookTalkTickets implements Task {
	ticketType: TalkTicketType;

	public static ofQuantity(noOfTickets: number) {
		return new BookTalkTickets(noOfTickets);
	}

	public ofType(ticketType: TalkTicketType) {
		this.ticketType = ticketType;
		return this;
	}

	@step('{0} buys a quantity of #numberOfTickets #ticketType tickets for the talks')
	performAs(actor: PerformsTasks): PromiseLike<void> {
		return actor.attemptsTo(
			BookTickets
				.in(TicketsPageUI.TalksTab)
				.ofType(this.ticketType)
				.ofQuantity(this.numberOfTickets)
		);
	}

	constructor(private numberOfTickets: number) { }
}

