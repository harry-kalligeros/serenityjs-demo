import { Target } from 'serenity-js/lib/serenity-protractor';
import { by, element } from 'protractor';

export class SpeakersUI {


	static SearchBox = Target.the('"Search Speaker" searchbox')
		.located(by.css('app-speakers .speakers-searchbox'));

	static FullNames = Target.the('Speakers\' fullnames')
		.located(by.css('app-speakers .speaker-fullname'));

	static ProfileImages = Target.the('Speakers\' images')
		.located(by.css('app-speakers .speaker-image'));

	static Title = Target.the('"Title" of Speakers Page')
		.located(by.css('app-speakers h1.speakers-title'));
}
