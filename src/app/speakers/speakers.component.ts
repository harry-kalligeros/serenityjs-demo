import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

interface Person {
	firstName: string;
	lastName: string;
}

@Component({
	selector: 'app-speakers',
	templateUrl: './speakers.component.html',
	styleUrls: ['./speakers.component.css']
})
export class SpeakersComponent implements OnInit {

	searchTerm$ = new Subject<string>();


	speakers = [{
		firstName: 'Natasha',
		lastName: 'Murashev',
		nickName: '(TheRobot)'
	},
	{
		firstName: 'Hugo',
		lastName: 'Giraudel',
		nickName: '(CSS-in-JS kitten)'
	}, {
		firstName: 'James',
		lastName: 'Halliday',
		nickName: '(substack)'
	}, {
		firstName: 'Harry',
		lastName: 'Roberts',
		nickName: '(CSS Wizardry)'
	}, {
		firstName: 'Zaharenia',
		lastName: 'Atzitzikaki',
		nickName: '(sugarenia)'
	}, {
		firstName: 'Bodil',
		lastName: 'Stokke'
	}, {
		firstName: 'Julien',
		lastName: 'Simon'
	}, {
		firstName: 'Florian',
		lastName: 'Schaffler'
	}, {
		firstName: 'Vladimir',
		lastName: 'Grinenko'
	}, {
		firstName: 'Rita',
		lastName: 'Zhang'
	}, {
		firstName: 'Antonio',
		lastName: 'Peric'
	}, {
		firstName: 'Andy',
		lastName: 'Grunwald'
	}, {
		firstName: 'Mete',
		lastName: 'Atamel'
	}, {
		firstName: 'Ivo',
		lastName: 'Neskovic'
	}, {
		firstName: 'Jason',
		lastName: 'Poon'
	}, {
		firstName: 'Melanie',
		lastName: 'Patrick'
	}, {
		firstName: 'Mike',
		lastName: 'Smart'
	}, {
		firstName: 'Jason',
		lastName: 'Lengstorf'
	}, {
		firstName: 'Leonie',
		lastName: 'Watson'
	}, {
		firstName: 'Marisa',
		lastName: 'Morby'
	}, {
		firstName: 'Forbes',
		lastName: 'Lindesay'
	}, {
		firstName: 'Dennis',
		lastName: 'Stavroyiannopoulos'
	}, {
		firstName: 'Constantinos',
		lastName: 'Ziazios'
	}, {
		firstName: 'Panagiotis',
		lastName: 'Tsilopoulos'
	}

	];

	filteredSpeakers: Array<any>;

	ngOnInit() {
		this.filteredSpeakers = this.speakers;
		this.searchTerm$
			.debounceTime(400)
			.distinctUntilChanged()
			.subscribe((results: string) => {
				this.filteredSpeakers = this.speakers.filter( (speaker: Person) => {
					return speaker.firstName.startsWith(results) || speaker.lastName.startsWith(results);
				});
			});
	}

}
