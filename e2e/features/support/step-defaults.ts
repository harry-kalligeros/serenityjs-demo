import { serenity } from 'serenity-js';
import { Actors } from '../../screenplay/index';
import { Stage } from 'serenity-js/lib/screenplay-protractor';

class StepDefaults {
	setDefaultTimeout: (timeout: number) => void;

	constructor() {
		console.log('===========Default Timeout Set========');
		this.setDefaultTimeout(60 * 1000);
	}
}

export = StepDefaults;
