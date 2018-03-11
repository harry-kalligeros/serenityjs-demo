import { Interaction, PerformsTasks, UsesAbilities } from 'serenity-js/lib/screenplay';
import { Target, BrowseTheWeb, AnswersQuestions } from 'serenity-js/lib/screenplay-protractor';
import { by, promise } from 'protractor';
import { ElementFinder } from 'protractor/built/element';
import { reject } from 'q';
import { DatePicker } from '../user-interface/datepicker-popup';

export class DatePick implements Interaction {
	private date: Date;

	public static on(target: Target): DatePick {
		return new DatePick(target);
	}

	public theDate(date: Date) {
		this.date = date;
		return this;
	}

	performAs(actor: UsesAbilities & AnswersQuestions): PromiseLike<void> {
		const inputElement = BrowseTheWeb.as(actor).locate(this.target);
		inputElement
			.element(by.xpath('..'))
			.element(by.css('.calendar-toggle'))
			.click();
		const datePickerContainer = BrowseTheWeb.as(actor).locate(DatePicker.Popup);
		const navigationView = datePickerContainer.element(by.css('bs-datepicker-navigation-view'));
		const yearNavigationButton = navigationView.element(by.css('button:nth-child(3)'));
		const year = this.date.getFullYear();
		const month = this.date.getMonth();
		const dayOfMonth = this.date.getDate();
		yearNavigationButton.click();
		return this.pickYear(year, datePickerContainer, navigationView)
			.then(() => this.pickMonth(month, datePickerContainer))
			.then(() => this.pickDayOfMonth(dayOfMonth, datePickerContainer));
	}

	public toString() {
		return `#actor picks the date ${this.date.toLocaleDateString().split('-').reverse().join('/')} on ${this.target}`;
	}

	private async pickYear(year: number, datePickerContainer: ElementFinder, navigationView: ElementFinder): Promise<void> {
		let firstYear, lastYear;
		const datePickerBody = datePickerContainer.element(by.css('.bs-datepicker-body'));
		firstYear = Number((await datePickerBody.element(by.css('tr:first-child > td[role=gridcell]:first-child')).getText()).trim());
		while (year < firstYear) {
			navigationView.element(by.css('button.previous')).click();
			firstYear = Number(
				(await datePickerBody.element(by.css('tr:first-child > td[role=gridcell]:first-child')).getText()).trim()
			);
		}
		lastYear = Number((await datePickerBody.element(by.css('tr:last-child > td[role=gridcell]:last-child')).getText()).trim());
		while (year > lastYear) {
			navigationView.element(by.css('button.next')).click();
			lastYear = Number(
				(await datePickerBody.element(by.css('tr:last-child > td[role=gridcell]:last-child')).getText()).trim()
			);
		}
		const _promise = datePickerBody.element(by.xpath('//td[@role="gridcell"]/*[text()="' + year + '"]/..')).click();
		return this.wrapPromise(_promise);
	}


	private pickMonth(month: number, datePickerContainer: ElementFinder): Promise<void> {
		const datePickerBody = datePickerContainer.element(by.css('.bs-datepicker-body'));
		const _promise = datePickerBody.all(by.xpath('//td[@role="gridcell"]')).get(month).click();
		return this.wrapPromise(_promise);
	}

	private pickDayOfMonth(day: number, datePickerContainer: ElementFinder): Promise<void> {
		const datePickerBody = datePickerContainer.element(by.css('.bs-datepicker-body'));
		const _promise = datePickerBody.element(
			by.xpath('//td[@role="gridcell"]/*[text()="' + day + '" and not(@class = "is-other-month")]/..')).click();
		return this.wrapPromise(_promise);
	}

	private wrapPromise(_promise: promise.Promise<any>): Promise<any> {
		return new Promise<any>((resolve: Function) => {
			_promise.then((result: any) => resolve(result));
		});
	}

	constructor(private target: Target) { }
}
