import { Target } from 'serenity-js/lib/serenity-protractor';
import { by, element } from 'protractor';

export class ThankPage {


	static Message = Target.the('Thanking message for the registration')
						.located(by.css('app-thankyou h1'));

}
