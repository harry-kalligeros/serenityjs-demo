import { by } from 'protractor';
import { Target } from 'serenity-js/lib/screenplay-protractor';

export class RegistrationForm {
	static Fullname = Target.the('Actor\'s Fullname')
		.located(by.css('input[name="fullname"]'));
	static Nickname = Target.the('Actor\'s Nickname')
		.located(by.css('input[name="nickname"]'));
	static Email = Target.the('Actor\'s Email')
		.located(by.css('input[name="email"]'));
	static Company = Target.the('Actor\'s Company')
		.located(by.css('input[name="company"]'));
	static Address = Target.the('Actor\'s Address')
		.located(by.css('input[name="address"]'));
	static DateOfBirth = Target.the('Actor\'s Date of Birth')
		.located(by.css('input[name="dateOfBirth"]'));
	static City = Target.the('Actor\'s City')
		.located(by.css('input[name="city"]'));
	static Zip = Target.the('Actor\'s Zip')
		.located(by.css('input[name="zip"]'));
	static Country = Target.the('Actor\'s Country')
		.located(by.css('select[name="country"]'));
	static ContinueButton = Target.the('Continue button of the registration form')
		.located(by.id('continueToPayment'));
}
