import { protractor } from 'protractor';
import { PerformsTasks, step, Task } from 'serenity-js/lib/screenplay-protractor';

import { MainMenu } from '../user-interface/mainmenu';
import { Click } from 'serenity-js/lib/serenity-protractor';

export class NavigateToMenu implements Task {

	public static called(name: string): NavigateToMenu {
		return new NavigateToMenu(name);
	}

	@step('{0} navigates to menu called "#name"')
	performAs(actor: PerformsTasks): PromiseLike<void> {
		return actor.attemptsTo(
			Click.on(MainMenu.menuItem(this.name))
		);
	}

	constructor(private name: string) {
	}
}
