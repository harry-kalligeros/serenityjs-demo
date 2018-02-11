Feature: View the reservations

As George (a conference organizer)
I want to monitor the reservations currently made for the talks and the workshops


	Background:
		Given the following is an authenticated user

			| name   | username | password |
			| George | admin    | admin    |

	@issues:JIRA-7
	Scenario: Monitor the seat reservations for the talks
		Given that George has access to the Admin Panel
		Then he sees an overview of the seat reservations for the talks

	@issues:JIRA-8
	Scenario: Monitor the workshop reservations
		Given that George has access to the Admin Panel
		Then he sees an overview of the workshop reservations
