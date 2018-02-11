import { protractor } from 'protractor';
import { Click, Enter, PerformsTasks, step, Task, Target, Select } from 'serenity-js/lib/screenplay-protractor';
import { registerButton } from '../user-interface/register-button';
import { listOf } from '../../text';
import { RegistrationForm } from '../user-interface/registration-form';
import { TicketsPageUI } from '../user-interface/ticket-page';
import { Scroll } from 'serenity-js/lib/serenity-protractor';
import { DatePick } from '../interactions/date-pick';

export class FillPersonalInfo implements Task {
	public static with(data: string) {
		return new FillPersonalInfo(data);
	}

	@step('{0} fills the registration form with his #personalInfo')
	performAs(actor: PerformsTasks): PromiseLike<void> {
		const [ fullName, nickname, email, dateOfBirth, company, address, city, zip, country ] = listOf(this.data);
		const _dateOfBirth = new Date(dateOfBirth.split('/').reverse().join('-'));

		return actor.attemptsTo(
			Scroll.to(TicketsPageUI.ContinueButton),
			Click.on(TicketsPageUI.ContinueButton),
			Enter.theValue(fullName).into(RegistrationForm.Fullname),
			Enter.theValue(nickname).into(RegistrationForm.Nickname),
			Enter.theValue(email).into(RegistrationForm.Email),
			DatePick.on(RegistrationForm.DateOfBirth).theDate(_dateOfBirth),
			Enter.theValue(company).into(RegistrationForm.Company),
			Enter.theValue(address).into(RegistrationForm.Address),
			Enter.theValue(city).into(RegistrationForm.City),
			Enter.theValue(zip).into(RegistrationForm.Zip),
			Select.theValue(country).from(RegistrationForm.Country),
			Click.on(RegistrationForm.ContinueButton)
		);
	}

	// used in @step as #personalInfo
	private personalInfo() {	// tslint:disable-line:no-unused-variable
		return this.data && this.data.toString();
	}

	constructor(private data: string) {}
}

