import { element, by, promise } from 'protractor';
import Promise = promise.Promise;

export interface SpeakersPage {

	getTitle(): Promise<string>;
	getResultsCount(): Promise<number>;
	searchSpeaker(name: string): Promise<void>;

}
