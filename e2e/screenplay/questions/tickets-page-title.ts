import { Question, Text } from 'serenity-js/lib/screenplay-protractor';
import { TicketsPageUI } from '../user-interface/ticket-page';

export class TicketsPage {
	static Title: Question<PromiseLike<string>> = Text.of(TicketsPageUI.Title);
}
