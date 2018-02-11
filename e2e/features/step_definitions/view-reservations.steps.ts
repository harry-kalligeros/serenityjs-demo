
import { serenity } from 'serenity-js';
import { Start } from '../../screenplay/tasks/start';
import { expect } from '../../expect';
import { See } from 'serenity-js/lib/screenplay';
import { AdminPanel } from '../../screenplay/questions/admin-panel';
import { then, given, binding } from 'cucumber-tsflow';
import { World } from '../support/world';
import { Stage } from 'serenity-js/lib/screenplay-protractor';
@binding([World])
class ViewReservationsSteps {

	stage: Stage;

	constructor(protected world: World) {
		this.stage = this.world.stage;

	}

	@given(/^that (?:.*) has access to the Admin Panel$/)
	startWithAdminPage() {
		return this.stage.theActorInTheSpotlight()
			.attemptsTo(
				Start.withTheConferenceAdminPage()
			);
	}

	@then(/^he sees an overview of the seat reservations for the talks$/)
	seeTalkReservations() {
		return this.stage.theActorInTheSpotlight().attemptsTo(
			See.if(AdminPanel.TitleOfTalkSeatReservationsTable,
				actual => expect(actual).to.eventually.eql('Talk seat reservations')
			)
		);
	}

	@then(/^he sees an overview of the workshop reservations$/)
	seeWorkshopReservations() {
		return this.stage.theActorInTheSpotlight().attemptsTo(
			See.if(AdminPanel.TitleOfWorkshopReservationsTable,
				actual => expect(actual).to.eventually.eql('Workshop reservations')
			)
		);
	}

}

export = ViewReservationsSteps;
