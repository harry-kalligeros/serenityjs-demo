
import { serenity } from 'serenity-js';
import { Start } from '../../screenplay/tasks/start';
import { expect } from '../../expect';
import { NavigateToMenu } from '../../screenplay/tasks/navigate-to-menu';
import { SearchSpeaker } from '../../screenplay/tasks/search-speaker';
import { TableDefinition } from 'cucumber';
import { FilteredSpeakers } from '../../screenplay/questions/filtered-speakers';
import { See, Stage } from 'serenity-js/lib/screenplay-protractor';
import { Register } from '../../screenplay/tasks/register';
import { TicketsPage } from '../../screenplay/questions/tickets-page-title';
import { listOf } from '../../text';
import { BookTalkTickets, TalkTicketType } from '../../screenplay/tasks/book-talk-tickets';
import { BookWorkshopTickets, Workshop } from '../../screenplay/tasks/book-workshop-tickets';
import { FillPersonalInfo } from '../../screenplay/tasks/fill-personal-info';
import { ThankMessage } from '../../screenplay/questions/thank-message';
import { when, then, given, binding } from 'cucumber-tsflow';
import { World } from '../support/world';
@binding([World])
class RegistrationSteps {

	stage: Stage;

	constructor(protected world: World) {
		this.stage = this.world.stage;

	}

	@when(/^he opts to register himself$/)
	registerUser() {
		return this.stage.theActorInTheSpotlight().attemptsTo(
			Register.himself()
		);
	}

	@then(/^he faces a page titled '(.*)'$/)
	seeTicketPage(title: string) {
		return this.stage.theActorInTheSpotlight().attemptsTo(
			See.if(TicketsPage.Title, actual => expect(actual).to.eventually.eql(title))
		);
	}

	@given(/^that (.*) gets access to the ticket reservation page$/)
	accessTicketReservationPage(name: string) {
		return this.stage.theActorCalled(name).attemptsTo(
			Start.withTheConferenceHomepage(),
			Register.himself()
		);
	}

	@when(/^he buys a quantity of (\d+) (.*) tickets for the talks$/)
	buyTalkTickets(numberOfTickets: number, ticketType: TalkTicketType) {
		return this.stage.theActorInTheSpotlight().attemptsTo(
			BookTalkTickets.ofQuantity(numberOfTickets).ofType(ticketType)
		);
	}

	@when(/^he buys a quantity of (\d+) tickets for the workshop (.*)$/)
	buyWorkshopTickets (numberOfTickets: number, workshop: Workshop) {
		return this.stage.theActorInTheSpotlight().attemptsTo(
			BookWorkshopTickets.ofQuantity(numberOfTickets).toAttendTheWorkshop(workshop)
		);
	}

	@when(/^he fills the registration form with his personal info: (.*)$/)
	fillPersonalInfo(personalInfo: string) {
		return this.stage.theActorInTheSpotlight().attemptsTo(
			FillPersonalInfo.with(personalInfo)
		);
	}

	@then(/^he sees the message '(.*)'$/)
	seeThanksMessage(message: string) {
		return this.stage.theActorInTheSpotlight().attemptsTo(
			See.if(ThankMessage.Displayed, actual => expect(actual).to.eventually.eql(message))
		);
	}
}

export = RegistrationSteps;
