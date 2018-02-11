import { Target } from 'serenity-js/lib/serenity-protractor';
import { by, element } from 'protractor';

export class ThankPage {


	static Message = Target.the('Message thanking the visitor for the registration')
						.located(by.css('app-thankyou h1'));

}
