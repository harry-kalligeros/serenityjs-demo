import { element, by, promise } from 'protractor';
import Promise = promise.Promise;
import { HomePage } from './home-page.interface';

export class HomePageImpl  implements HomePage {

	private registerButton = element(by.id('registerBtn'));
	private mainMenu = element(by.css('.navbar-nav'));
	private homeMenuItem = this.mainMenu.element(by.linkText('Home'));
	private scheduleMenuItem = this.mainMenu.element(by.linkText('Schedule'));
	private speakersMenuItem = this.mainMenu.element(by.linkText('Speakers'));
	private adminMenuItem = this.mainMenu.element(by.linkText('Admin'));

	public viewSchedule(): Promise<void> {
		return this.scheduleMenuItem.click();
	}

	public viewSpeakers(): Promise<void> {
		return this.speakersMenuItem.click();
	}

	public viewHome(): Promise<void> {
		return this.homeMenuItem.click();
	}

	public clickOnMenu(name: string): Promise<void> {
		return this.mainMenu.element(by.linkText(name)).click();
	}
}

