import { serenity } from 'serenity-js';
import { Actors } from '../../screenplay/index';
import { Stage } from 'serenity-js/lib/screenplay-protractor';
import { timeout } from 'q';


export class World {

	public get stage(): Stage {
		return serenity.callToStageFor(new Actors());
	}
}

