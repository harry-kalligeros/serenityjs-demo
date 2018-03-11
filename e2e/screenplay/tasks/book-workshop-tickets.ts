import { protractor } from 'protractor';
import { Click, Enter, PerformsTasks, step, Task, Target } from 'serenity-js/lib/screenplay-protractor';
import { TicketsPageUI } from '../user-interface/ticket-page';
import { BookTickets } from './book-tickets';


export type Workshop = 'Workshop A' | 'Workshop B' | 'Workshop C';
export class BookWorkshopTickets implements Task {
	workshop: Workshop;

	public static ofQuantity(noOfTickets: number) {
		return new BookWorkshopTickets(noOfTickets);
	}

	public toAttendTheWorkshop(workshop: Workshop) {
		this.workshop = workshop;
		return this;
	}

	@step('{0} buys a quantity of #numberOfWorkshopTickets for the workshop #workshop')
	performAs(actor: PerformsTasks): PromiseLike<void> {
		return actor.attemptsTo(
			BookTickets
				.in(TicketsPageUI.WorkshopsTab)
				.ofType(this.workshop)
				.ofQuantity(this.numberOfWorkshopTickets)
		);
	}

	constructor(private numberOfWorkshopTickets: number) { }
}
