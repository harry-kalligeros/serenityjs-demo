
import { serenity } from 'serenity-js';
import { Start } from '../../screenplay/tasks/start';
import { expect } from '../../expect';
import { NavigateToMenu } from '../../screenplay/tasks/navigate-to-menu';
import { SearchSpeaker } from '../../screenplay/tasks/search-speaker';
import { TableDefinition } from 'cucumber';
import { FilteredSpeakers } from '../../screenplay/questions/filtered-speakers';
import { See } from 'serenity-js/lib/screenplay-protractor';
import { Speakers } from '../../screenplay/questions/speakers';

function SpeakersSteps() {

	this.When(/^\s?he searches for speakers named '(.*)'$/, function (name: string) {
		return this.stage.theActorInTheSpotlight().attemptsTo(
			NavigateToMenu.called('Speakers'),
			SearchSpeaker.called(name)
		);
	});

	this.Then(/^he sees a page titled '(.*)'$/, function (name: string) {
		return this.stage.theActorInTheSpotlight().attemptsTo(
			See.if(Speakers.TitleDisplayed, actual => expect(actual).to.eventually.eql(name))
		);
	});

	this.Then(/^he sees a list of speakers with their images$/, function () {
		return this.stage.theActorInTheSpotlight().attemptsTo(
			See.if(Speakers.haveVisibleProfiles(), actual => expect(actual).to.eventually.be.true)
		);
	});

	this.Then(/^he sees only the speakers with the name$/, function (fullnames: TableDefinition) {
		return this.stage.theActorInTheSpotlight().attemptsTo(
			See.if(FilteredSpeakers.Displayed, actual => expect(actual).to.eventually.deep.equal(fullnames.raw().map(row => row[0])))
		);
	});

}

export = SpeakersSteps;
