
import { serenity } from 'serenity-js';
import { Start } from '../../screenplay/tasks/start';
import { expect } from '../../expect';
import { NavigateToMenu } from '../../screenplay/tasks/navigate-to-menu';
import { SearchSpeaker } from '../../screenplay/tasks/search-speaker';
import { TableDefinition } from 'cucumber';
import { FilteredSpeakers } from '../../screenplay/questions/filtered-speakers';
import { See, Stage } from 'serenity-js/lib/screenplay-protractor';
import { Login } from '../../screenplay/tasks/login';
import { Authenticate } from '../../screenplay/abilities/authenticate';
import { given, binding } from 'cucumber-tsflow';
import { World } from '../support/world';
@binding([World])
class LoginSteps {

	stage: Stage;

	constructor(protected world: World) {
		this.stage = this.world.stage;

	}

	@given(/^the following is an authenticated user$/)
	authenticateUser(userTable: TableDefinition) {
		const [name, username, password] = userTable.rows()[0];
		return this.stage.theActorCalled(name)
			.whoCan(Authenticate.with(username, password))
			.attemptsTo(
				Start.withTheConferenceHomepage(),
				NavigateToMenu.called('Admin'),
				Login.withCredentials()
			);
	}
}

export = LoginSteps;
