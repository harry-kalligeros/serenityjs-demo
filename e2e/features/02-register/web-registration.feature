Feature: Registration to the conference

As Harry (a new member)
I want to join the conference, so I need to register myself


	@issues:JIRA-5
	Scenario: Access the registration page
		Given that Harry visits the conference page
		When he opts to register himself
		Then he faces a page titled 'Tickets to AT Conference'

	@issues:JIRA-6
	Scenario Outline: Reserve a seat for the talks and attend a workshop
		Given that <Full Name> gets access to the ticket reservation page
		When he buys a quantity of <noOfTalksTickets> <talksTicketType> tickets for the talks
		And he buys a quantity of <noOfWorkshopTickets> tickets for the workshop <workshop>
		And he fills the registration form with his <Full Name>, <Nickname>, <Email>, <Date of Birth>, <Company>, <Address>, <City>, <Zip>, <Country>
		Then he sees the message 'Thank you to have been registered to the AT conference'

		Examples:
			| Full Name         | Nickname        | Email                        | Date of Birth | Company   | Address                                                        | City        | Zip   | Country | noOfTalksTickets | talksTicketType | noOfWorkshopTickets | workshop   |
			| Carole Chaney     | mcdonaldBishop  | mcdonaldbishop@vendblend.com | 03/10/1982    | ORONOKO   | 428 Essex Street - Gibbsville - New York - 9566                | Bangor      | 50633 | Turkey  | 4                | early           | 5                   | Workshop A |
			| James Rocha       | chambersCarroll | chamberscarroll@oronoko.com  | 03/02/1984    | FARMEX    | 552 Woodruff Avenue - Malott - Virginia - 2473                 | Adelino     | 34483 | Belgium | 4                | regular         | 4                   | Workshop C |
			| Dunlap Valencia   | denaHale        | denahale@farmex.com          | 02/01/1981    | ELEMANTRA | 577 Guernsey Street - Teasdale - Massachusetts - 5234          | Lutsen      | 54372 | Sweden  | 1                | early           | 5                   | Workshop A |
			| Cristina Chambers | maryellenSalas  | maryellensalas@elemantra.com | 03/10/1986    | NIXELT    | 290 Hausman Street - Wikieup - Northern Mariana Islands - 1026 | Catharine   | 57478 | Cyprus  | 3                | vip             | 3                   | Workshop A |
			| Stevenson Avery   | jeanYoung       | jeanyoung@nixelt.com         | 05/10/1978    | ISONUS    | 878 Otsego Street - Cassel - Kentucky - 5333                   | Waterloo    | 40649 | Germany | 4                | early           | 5                   | Workshop B |
			| Madelyn Barlow    | bennettHorne    | bennetthorne@isonus.com      | 12/10/1972    | AMTAS     | 383 Arlington Avenue - Jardine - Alaska - 1904                 | Coventry    | 68482 | Greece  | 3                | regular         | 4                   | Workshop C |
			| Kirkland Bartlett | joanGoodman     | joangoodman@amtas.com        | 18/10/1971    | PANZENT   | 338 Hope Street - Hickory - Montana - 755                      | Morningside | 65052 | Italy   | 2                | vip             | 5                   | Workshop C |
			| Owens Osborne     | deborahAguirre  | deborahaguirre@panzent.com   | 23/10/1988    | ZYTREK    | 267 Ocean Avenue - Itmann - New Jersey - 1749                  | Greenwich   | 81335 | France  | 2                | early           | 3                   | Workshop B |
