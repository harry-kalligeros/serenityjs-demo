import { Task, UsesAbilities } from 'serenity-js/lib/screenplay';
import { step } from '@serenity-js/core/lib/recording/step_annotation';
import { PerformsTasks, Enter } from 'serenity-js/lib/screenplay-protractor';
import { Authenticate } from '../abilities/authenticate';
import { LoginForm } from '../user-interface/login-form';
import { Click } from 'serenity-js/lib/serenity-protractor';

export class Login implements Task {
	static withCredentials() {
		return new Login();
	}

	@step('Logs in as {0}')
	performAs(actor: PerformsTasks & UsesAbilities): PromiseLike<void> {
		return actor.attemptsTo(
			Enter.theValue(this.authenticated(actor).username)
				.into(LoginForm.Username),
			Enter.theValue(this.authenticated(actor).password)
				.into(LoginForm.Password),
			Click.on(LoginForm.LoginButton)
		);
	}

	private authenticated(actor: PerformsTasks & UsesAbilities ) {
		return Authenticate.as(actor);
	}

	constructor() {}
}
