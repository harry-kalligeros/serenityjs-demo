import { Component, OnInit } from '@angular/core';

interface CodeValue {
	code: string;
	value: string;
}

@Component({
	selector: 'app-registration',
	templateUrl: './registration.component.html',
	styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

	countries = [
		{
			code: 'GB',
			value: 'United Kingdom'
		}, {
			code: 'AL',
			value: 'Albania'
		}, {
			code: 'AD',
			value: 'Andorra'
		}, {
			code: 'AT',
			value: 'Austria'
		}, {
			code: 'BY',
			value: 'Belarus'
		}, {
			code: 'BE',
			value: 'Belgium'
		}, {
			code: 'BA',
			value: 'Bosnia and Herzegovina'
		}, {
			code: 'BG',
			value: 'Bulgaria'
		}, {
			code: 'HR',
			value: 'Croatia (Hrvatska)'
		}, {
			code: 'CY',
			value: 'Cyprus'
		}, {
			code: 'CZ',
			value: 'Czech Republic'
		}, {
			code: 'FR',
			value: 'France'
		}, {
			code: 'GI',
			value: 'Gibraltar'
		}, {
			code: 'DE',
			value: 'Germany'
		}, {
			code: 'GR',
			value: 'Greece'
		}, {
			code: 'VA',
			value: 'Holy See (Vatican City State)'
		}, {
			code: 'HU',
			value: 'Hungary'
		}, {
			code: 'IT',
			value: 'Italy'
		}, {
			code: 'LI',
			value: 'Liechtenstein'
		}, {
			code: 'LU',
			value: 'Luxembourg'
		}, {
			code: 'MK',
			value: 'Macedonia'
		}, {
			code: 'MT',
			value: 'Malta'
		}, {
			code: 'MD',
			value: 'Moldova'
		}, {
			code: 'MC',
			value: 'Monaco'
		}, {
			code: 'ME',
			value: 'Montenegro'
		}, {
			code: 'NL',
			value: 'Netherlands'
		}, {
			code: 'PL',
			value: 'Poland'
		}, {
			code: 'PT',
			value: 'Portugal'
		}, {
			code: 'RO',
			value: 'Romania'
		}, {
			code: 'SM',
			value: 'San Marino'
		}, {
			code: 'RS',
			value: 'Serbia'
		}, {
			code: 'SK',
			value: 'Slovakia'
		}, {
			code: 'SI',
			value: 'Slovenia'
		}, {
			code: 'ES',
			value: 'Spain'
		}, {
			code: 'UA',
			value: 'Ukraine'
		}, {
			code: 'DK',
			value: 'Denmark'
		}, {
			code: 'EE',
			value: 'Estonia'
		}, {
			code: 'FO',
			value: 'Faroe Islands'
		}, {
			code: 'FI',
			value: 'Finland'
		}, {
			code: 'GL',
			value: 'Greenland'
		}, {
			code: 'IS',
			value: 'Iceland'
		}, {
			code: 'IE',
			value: 'Ireland'
		}, {
			code: 'LV',
			value: 'Latvia'
		}, {
			code: 'LT',
			value: 'Lithuania'
		}, {
			code: 'NO',
			value: 'Norway'
		}, {
			code: 'SJ',
			value: 'Svalbard and Jan Mayen Islands'
		}, {
			code: 'SE',
			value: 'Sweden'
		}, {
			code: 'CH',
			value: 'Switzerland'
		}, {
			code: 'TR',
			value: 'Turkey'
		}];

	constructor() { }

	ngOnInit() {
		this.countries.sort((a: CodeValue, b: CodeValue) => {
			if (a.value > b.value) {
				return 1;
			} else if (a.value < b.value) {
				return -1;
			} else {
				return 0;
			}
		});
	}

}
