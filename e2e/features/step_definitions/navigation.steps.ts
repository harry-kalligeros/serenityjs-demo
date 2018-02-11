
import { serenity } from 'serenity-js';
import { Start } from '../../screenplay/tasks/start';
import { expect } from '../../expect';
import { NavigateToMenu } from '../../screenplay/tasks/navigate-to-menu';
import { given, when, binding } from 'cucumber-tsflow';
import { World } from '../support/world';
import { Stage } from 'serenity-js/lib/screenplay-protractor';

@binding([World])
class NavigationSteps {

	stage: Stage;

	constructor(protected world: World) {
		this.stage = this.world.stage;
	}

	@given(/that (.*) visits the conference page$/)
	visitTheConferencePage(name: string) {
			return this.stage.theActorCalled(name).attemptsTo(
				Start.withTheConferenceHomepage());
	}

	@when(/^\s?he navigates to menu called '(.*)'$/)
	navigateToMenuCalled(name: string) {
		return this.stage.theActorInTheSpotlight().attemptsTo(
			NavigateToMenu.called(name)
		);
	}
}

export = NavigationSteps;
