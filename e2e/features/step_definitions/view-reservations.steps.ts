
import { serenity } from 'serenity-js';
import { Start } from '../../screenplay/tasks/start';
import { expect } from '../../expect';
import { See } from 'serenity-js/lib/screenplay';
import { AdminPanel } from '../../screenplay/questions/admin-panel';

function ViewReservationsSteps() {

	this.Given(/^that (?:.*) has access to the Admin Panel$/, function () {
		return this.stage.theActorInTheSpotlight()
			.attemptsTo(
				Start.withTheConferenceAdminPage()
			);
	});

	this.Then(/^he sees an overview of the seat reservations for the talks$/, function() {
		return this.stage.theActorInTheSpotlight().attemptsTo(
			See.if(AdminPanel.TitleOfTalkSeatReservationsTable,
				actual => expect(actual).to.eventually.eql('Talk seat reservations')
			)
		);
	});

	this.Then(/^he sees an overview of the workshop reservations$/, function() {
		return this.stage.theActorInTheSpotlight().attemptsTo(
			See.if(AdminPanel.TitleOfWorkshopReservationsTable,
				actual => expect(actual).to.eventually.eql('Workshop reservations')
			)
		);
	});

}

export = ViewReservationsSteps;
