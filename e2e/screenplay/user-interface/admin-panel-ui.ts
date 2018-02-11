import { by } from 'protractor';
import { Target } from 'serenity-js/lib/serenity-protractor';

export class AdminPanelUI {
	static Title = Target.the('Admin panel title').located(by.css('app-admin h1'));
	static TitleOfTalkSeatReservationsTable = Target.the('Talk Seat Reservations Table')
		.located(by.css('app-admin div.row > div:first-child > h3'));
	static TitleOfWorkshopReservationsTable = Target.the('WorkshopReservationsTable')
		.located(by.css('app-admin div.row > div:last-child > h3'));
}
