import { Open, PerformsTasks, ResizeBrowserWindow, step, Task } from 'serenity-js/lib/screenplay-protractor';

// import { AddTodoItems } from './add_todo_items';

export class Start implements Task {
	public static withTheConferenceHomepage(): Start {
		return new Start('/');
	}

	public static withTheConferenceAdminPage(): Start {
		return new Start('/admin');
	}

	@step('{0} visits the conference page')
	performAs(actor: PerformsTasks): PromiseLike<void> {
		return actor.attemptsTo(
			Open.browserOn(this.path),
			ResizeBrowserWindow.toMaximum()
		);
	}

	constructor(private path: string) {
	}

}
