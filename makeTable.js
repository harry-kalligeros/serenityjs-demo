var data = require('./test-data');
var headers = [
	'Full Name',
	'Nickname',
	'Email',
	'Company',
	'Phone',
	'Address',
	'City',
	'Zip',
	'Country',
	'noOfTalksTickets',
	'talksTicketType',
	'noOfWorkshopTickets',
	'workshop'
];

var item;
var r = [];
console.log('| ' + headers.join(' | ') + ' |');

for (var row in data) {
	r = [];
	for (var prop in data[row]) {
		item = data[row][prop];
		r.push(item);
	}
	console.log('| ' + r.join(' | ') + ' |');
}
