import { protractor } from 'protractor';
import { Enter, PerformsTasks, step, Task } from 'serenity-js/lib/screenplay-protractor';

import { MainMenu } from '../user-interface/mainmenu';
import { Click } from 'serenity-js/lib/serenity-protractor';
import { SpeakersUI } from '../user-interface/speakers';

export class SearchSpeaker implements Task {

	public static called(name: string): SearchSpeaker {
		return new SearchSpeaker(name);
	}

	@step('{0} he searches for speakers named "#name"')
	performAs(actor: PerformsTasks): PromiseLike<void> {
		return actor.attemptsTo(
			Enter.theValue(this.name)
			.into(SpeakersUI.SearchBox)
			.thenHit(protractor.Key.ENTER)
		);
	}

	constructor(private name: string) {
	}
}
