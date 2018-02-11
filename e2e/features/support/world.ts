import { serenity } from 'serenity-js';
import { Actors } from '../../screenplay/index';


export = function () {

	this.setDefaultTimeout(60 * 1000);

	this.World = function () {
		this.stage = serenity.callToStageFor(new Actors());
	};
};
