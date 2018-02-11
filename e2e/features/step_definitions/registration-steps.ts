
import { serenity } from 'serenity-js';
import { Start } from '../../screenplay/tasks/start';
import { expect } from '../../expect';
import { NavigateToMenu } from '../../screenplay/tasks/navigate-to-menu';
import { SearchSpeaker } from '../../screenplay/tasks/search-speaker';
import { TableDefinition } from 'cucumber';
import { FilteredSpeakers } from '../../screenplay/questions/filtered-speakers';
import { See } from 'serenity-js/lib/screenplay-protractor';
import { Register } from '../../screenplay/tasks/register';
import { TicketsPage } from '../../screenplay/questions/tickets-page-title';
import { listOf } from '../../text';
import { BookTalkTickets, TalkTicketType } from '../../screenplay/tasks/book-talk-tickets';
import { BookWorkshopTickets, Workshop } from '../../screenplay/tasks/book-workshop-tickets';
import { FillPersonalInfo } from '../../screenplay/tasks/fill-personal-info';
import { ThankMessage } from '../../screenplay/questions/thank-message';

function RegistrationSteps() {

	this.When(/^he opts to register himself$/, function () {
		return this.stage.theActorInTheSpotlight().attemptsTo(
			Register.himself()
		);
	});

	this.Then(/^he faces a page titled '(.*)'$/, function (title: string) {
		return this.stage.theActorInTheSpotlight().attemptsTo(
			See.if(TicketsPage.Title, actual => expect(actual).to.eventually.eql(title))
		);
	});

	this.Given(/^that (.*) gets access to the ticket reservation page$/, function (callback: Function) {
		return this.stage.theActorInTheSpotlight().attemptsTo(
			Start.withTheConferenceHomepage(),
			Register.himself()
		);
	});

	this.When(/^he buys a quantity of (\d+) (.*) tickets for the talks$/,
		function (numberOfTickets: number, ticketType: TalkTicketType) {

			return this.stage.theActorInTheSpotlight().attemptsTo(
				BookTalkTickets.ofQuantity(numberOfTickets).ofType(ticketType)
			);
		});

	this.When(/^he buys a quantity of (\d+) tickets for the workshop (.*)$/,
		function (numberOfTickets: number, workshop: Workshop) {
			return this.stage.theActorInTheSpotlight().attemptsTo(
				BookWorkshopTickets.ofQuantity(numberOfTickets).toAttendTheWorkshop(workshop)
			);
		});

	this.When(/^he fills the registration form with his (.*)$/, function (personalInfo: string) {
		return this.stage.theActorInTheSpotlight().attemptsTo(
			FillPersonalInfo.with(personalInfo)
		);

	});

	this.Then(/^he sees the message '(.*)'$/, function (message: string) {
		return this.stage.theActorInTheSpotlight().attemptsTo(
			See.if(ThankMessage.Displayed, actual => expect(actual).to.eventually.eql(message))
		);
	});




}

export = RegistrationSteps;
