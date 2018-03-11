import { promise } from 'protractor';
import Promise = promise.Promise;

export interface HomePage {
	viewSchedule(): Promise<void>;
	viewSpeakers(): Promise<void>;
	viewHome(): Promise<void>;
	clickOnMenu(name: string): Promise<void>;
}
