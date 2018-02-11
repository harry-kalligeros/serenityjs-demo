export class Tickets {
	constructor(
		public workshopA: number,
		public workshopB: number,
		public workshopC: number,
		public earlyTickets: number,
		public regularTickets: number,
		public vipTickets: number
	) { }
}

type Partial<T> = {
	[P in keyof T]?: T[P];
};

export type Ticket = Partial<Tickets>;

export interface TicketRow {
	ticketType: Ticket;
	quantity: number;
	unitPrice: number;
	price: number;
}
