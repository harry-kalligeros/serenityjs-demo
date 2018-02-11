
import { serenity } from 'serenity-js';
import { Start } from '../../screenplay/tasks/start';
import { expect } from '../../expect';
import { NavigateToMenu } from '../../screenplay/tasks/navigate-to-menu';

function NavigationSteps() {

	this.Given(/that (.*) visits the conference page$/, function (name: string) {
			return this.stage.theActorCalled(name).attemptsTo(
				Start.withTheConferenceHomepage());
	});

	this.When(/^\s?he navigates to menu called '(.*)'$/, function (name: string) {
		return this.stage.theActorInTheSpotlight().attemptsTo(
			NavigateToMenu.called(name)
		);
	});
}

export = NavigationSteps;
