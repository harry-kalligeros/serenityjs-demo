import { Target } from 'serenity-js/lib/serenity-protractor';
import { by } from 'protractor';

export class LoginForm {
	static Username = Target.the('"Username" field of the login form').located(by.id('login-username'));
	static Password = Target.the('"Password" field of the login form').located(by.id('login-password'));
	static LoginButton = Target.the('Login Button').located(by.id('btn-login'));
}
