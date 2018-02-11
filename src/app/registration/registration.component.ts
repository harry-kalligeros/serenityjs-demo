import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Registration } from '../registration';
import { CodeValue } from './code-value';


@Component({
	selector: 'app-registration',
	templateUrl: './registration.component.html',
	styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

	registration: Registration = {} as Registration;
	minDate = new Date(1960, 0, 1);
	maxDate = new Date(2010, 11, 31);



	@Input() countries: CodeValue[];
	@Output() register: EventEmitter<Registration> = new EventEmitter<Registration>();

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

	registerUser($event: Event) {
		$event.preventDefault();
		this.register.emit(this.registration);
	}
}
