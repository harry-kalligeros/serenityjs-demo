import { by } from 'protractor';
import { Target } from 'serenity-js/lib/screenplay-protractor';
import { TalkTicketType } from '../tasks/book-talk-tickets';
import { Workshop } from '../tasks/book-workshop-tickets';

export class TicketsPageUI {
	static Title = Target.the('Title of the tickets page')
		.located(by.css('app-tickets h1'));

	static TalksTab = Target.the('Talks tab')
		.located(by.id('talk-tickets'));

	static WorkshopsTab = Target.the('Workshops tab')
		.located(by.id('workshop-tickets'));

	static ContinueButton = Target.the('Continue button of the tickets section')
		.located(by.id('continueToRegistrationForm'));

	NoOfEarlyTickets = Target.the('Number of Early Tickets booked')
		.located(by.css('input[name="earlyTickets"]'));

	NoOfRegularTickets = Target.the('Number of Regular Tickets booked')
		.located(by.css('input[name="regularTickets"]'));

	NoOfVipTickets = Target.the('Number of Vip Tickets booked')
		.located(by.css('input[name="vipTickets"]'));

	NoOfWorkshopATickets = Target.the('Number of Workshop A Tickets booked')
		.located(by.css('input[name="workshop-a"]'));

	NoOfWorkshopBTickets = Target.the('Number of Workshop B Tickets booked')
		.located(by.css('input[name="workshop-b"]'));

	NoOfWorkshopCTickets = Target.the('Number of Workshop C Tickets booked')
		.located(by.css('input[name="workshop-c"]'));

	static pickTickets() {
		return new TicketsPageUI();
	}

	public ofType(ticketType: TalkTicketType | Workshop) {
		switch (ticketType) {
			case 'early':
				return this.NoOfEarlyTickets;
			case 'regular':
				return this.NoOfRegularTickets;
			case 'vip':
				return this.NoOfVipTickets;
			case 'Workshop A':
				return this.NoOfWorkshopATickets;
			case 'Workshop B':
				return this.NoOfWorkshopBTickets;
			case 'Workshop C':
				return this.NoOfWorkshopCTickets;
		}
	}

}
