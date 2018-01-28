import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-schedule',
	templateUrl: './schedule.component.html',
	styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

	constructor() { }
	schedule = [{
		eventTime: '9:30am',
		eventTitle: 'Doors Open',
		eventDescription: 'Our venue, the Dock Pullman, opens to the public. Breakfast will be provided.'
	}, {
		eventTime: '10:30am - 12pm',
		eventTitle: 'First Session',
		eventDescription: 'Morning talks.'
	}, {
		eventTime: '12pm - 1:45pm',
		eventTitle: 'Lunch',
		eventDescription: 'So much content in a morning empties your energy bar. We\'ll have lot of food and beverages for everyone. '
	}, {
		eventTime: ' 1: 45 pm - 3 pm ',
		eventTitle: ' 2 nd session ',
		eventDescription: ' Lightning talks & regular speakers. '
	}, {
		eventTime: ' 3 pm - 3: 30 pm ',
		eventTitle: ' Break ',
		eventDescription: ' Coffee, tea, soft drinks and cakes. '
	}, {
		eventTime: ' 3: 30 pm - 4: 45 pm ',
		eventTitle: ' 3 rd session ',
		eventDescription: ' More JavaScript talks. '
	}, {
		eventTime: ' 4: 45 pm - 5: 15 pm ',
		eventTitle: ' Break ',
		eventDescription: ' Coffee, tea, soft drinks and cakes '
	}, {
		eventTime: ' 5: 15 pm - 6: 10 pm ',
		eventTitle: ' Last session ',
		eventDescription: ' Final speakers. '
	}, {
		eventTime: ' 6: 10 pm ',
		eventTitle: ' Afterparty ',
		eventDescription: ' TBA '
	}];

	ngOnInit() {
	}

}

