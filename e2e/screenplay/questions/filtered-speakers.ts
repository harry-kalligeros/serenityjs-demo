import { SpeakersUI } from '../user-interface/speakers';
import { Question, Text } from 'serenity-js/lib/screenplay-protractor';

export class FilteredSpeakers {
	static Displayed: Question<PromiseLike<string[]>> = Text.ofAll(SpeakersUI.FullNames);
}
