import { Question, Text } from 'serenity-js/lib/screenplay-protractor';
import { AdminPanelUI } from '../user-interface/admin-panel-ui';

export class AdminPanel {
	static TitleDisplayed: Question<PromiseLike<string>> = Text.of(AdminPanelUI.Title);
	static TitleOfTalkSeatReservationsTable: Question<PromiseLike<string>> = Text.of(AdminPanelUI.TitleOfTalkSeatReservationsTable);
	static TitleOfWorkshopReservationsTable: Question<PromiseLike<string>> = Text.of(AdminPanelUI.TitleOfWorkshopReservationsTable);
}
