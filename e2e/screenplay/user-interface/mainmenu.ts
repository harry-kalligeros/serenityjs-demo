import { Target } from 'serenity-js/lib/screenplay-protractor';
import { by } from 'protractor';

export class MainMenu {
	public static menuItem(name: string) {
		// return Target.the('Menu Item ' + name).located(by.css('nav.navbar.fixed-top li.nav-item > a.nav-link') ).called(name);
		return Target.the('Menu Item ' + name).located(by.linkText(name));
	}
}
