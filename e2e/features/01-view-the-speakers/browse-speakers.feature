Feature: Browse the speakers

As Harry (a conference visitor)
I want to browse the Speakers or search for some of them by their name.
I would like also to read more about a specific speaker, his interests, his skills etc.

	@issues:JIRA-1,JIRA-2
	Scenario: Access to the Speakers page
		Given that Harry visits the conference page
		When he navigates to menu called 'Speakers'
		Then he sees a page titled 'Speakers'

	@issues:JIRA-3
	Scenario: Browsing speakers
		Given that Harry visits the conference page
		When he navigates to menu called 'Speakers'
		Then he sees a list of speakers with their images

	@issues:JIRA-4
	Scenario: Searching for a speaker
		Given that Harry visits the conference page
		When he searches for speakers named 'Jason'
		Then he sees only the speakers with the name

			| Jason Poon      |
			| Jason Lengstorf |


