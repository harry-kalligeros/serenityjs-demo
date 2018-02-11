import { protractor } from 'protractor';
import { Click, Enter, PerformsTasks, step, Task, Target } from 'serenity-js/lib/screenplay-protractor';
import { registerButton } from '../user-interface/register-button';

export class Register implements Task {
	public static himself() {
		return new Register();
	}

	@step('{0} wants to register')
	performAs(actor: PerformsTasks): PromiseLike<void> {
		return actor.attemptsTo(
			Click.on(registerButton)
		);
	}
}

