import { SpeakersUI } from '../user-interface/speakers';
import { Question, Text } from 'serenity-js/lib/screenplay-protractor';
import { ThankPage } from '../user-interface/thank-page';

export class ThankMessage {
	static Displayed: Question<PromiseLike<string>> = Text.of(ThankPage.Message);
}
