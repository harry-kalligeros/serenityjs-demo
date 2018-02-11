
import { serenity } from 'serenity-js';
import { Start } from '../../screenplay/tasks/start';
import { expect } from '../../expect';
import { NavigateToMenu } from '../../screenplay/tasks/navigate-to-menu';
import { SearchSpeaker } from '../../screenplay/tasks/search-speaker';
import { TableDefinition } from 'cucumber';
import { FilteredSpeakers } from '../../screenplay/questions/filtered-speakers';
import { See } from 'serenity-js/lib/screenplay-protractor';
import { Speakers } from '../../screenplay/questions/speakers';
import { binding, given, when, then } from 'cucumber-tsflow';
import { Actors } from '../../screenplay/index';
import { Stage } from '@serenity-js/core/lib/stage';
import { World } from '../support/world';

@binding([World])
class SpeakersSteps {

	stage: Stage;

	constructor(protected world: World) {
		this.stage = this.world.stage;

	}

	@when(/^\s?he searches for speakers named '(.*)'$/)
	searchSpeakerByName(name: string) {
		return this.stage.theActorInTheSpotlight().attemptsTo(
			NavigateToMenu.called('Speakers'),
			SearchSpeaker.called(name)
		);
	}

	@then(/^he sees a page titled '(.*)'$/)
	seePageTitle(name: string) {
		return this.stage.theActorInTheSpotlight().attemptsTo(
			See.if(Speakers.TitleDisplayed, actual => expect(actual).to.eventually.eql(name))
		);
	}

	@then(/^he sees a list of speakers with their images$/)
	seeListOfSpeakers() {
		return this.stage.theActorInTheSpotlight().attemptsTo(
			See.if(Speakers.haveVisibleProfiles(), actual => expect(actual).to.eventually.be.true)
		);
	}

	@then(/^he sees only the speakers with the name$/)
	seeSpeakersWithName(fullnames: TableDefinition) {
		return this.stage.theActorInTheSpotlight().attemptsTo(
			See.if(FilteredSpeakers.Displayed, actual => expect(actual).to.eventually.deep.equal(fullnames.raw().map(row => row[0])))
		);
	}

}

export = SpeakersSteps;
