import { Target } from 'serenity-js/lib/serenity-protractor';
import { by } from 'protractor';

export class DatePicker {
	static Popup = Target.the('DatePicker popup').located(by.css('bs-datepicker-container'));
}
