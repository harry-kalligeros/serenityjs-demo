import { Ability, UsesAbilities } from 'serenity-js/lib/screenplay';

export class Authenticate implements Ability {

	static with(username: string, password: string): Authenticate {
		return new Authenticate(username, password);
	}

	static as(actor: UsesAbilities): Authenticate {
		return actor.abilityTo(Authenticate);
	}

	constructor(public username: string, public password: string) { }
}
