import { SpeakersUI } from '../user-interface/speakers';
import { Question, UsesAbilities } from 'serenity-js/lib/screenplay';
import { BrowseTheWeb, Text } from 'serenity-js/lib/serenity-protractor';
import { promise } from 'protractor';
import Promise = promise.Promise;

export class Speakers implements Question<Promise<boolean>> {
	static TitleDisplayed: Question<PromiseLike<string>> = Text.of(SpeakersUI.Title);

	static haveVisibleProfiles() {
		return new Speakers();
	}

	answeredBy(actor: UsesAbilities): Promise<boolean> {
		const browseCapability = BrowseTheWeb.as(actor);
		return promise.all([
			browseCapability
			.locateAll(SpeakersUI.FullNames)
			.count(),
			browseCapability
			.locateAll(SpeakersUI.FullNames)
			.count()
		]).then<boolean>((result: number[]) => result[0] > 0 && result[1] > 0);
	}

	constructor() {}

	toString = () => `the visibility of speakers' profiles`;
}
