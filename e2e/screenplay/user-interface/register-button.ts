import { by } from 'protractor';
import { Target } from 'serenity-js/lib/screenplay-protractor';

export const registerButton = Target.the('Register button')
	.located(by.id('registerBtn'));
