// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

// const {
//   SpecReporter
// } = require('jasmine-spec-reporter');
const crew = require('serenity-js/lib/stage_crew'),
	path = require('path'),
	protractor = require.resolve('protractor'),
	node_modules = protractor.substring(0, protractor.lastIndexOf('node_modules') + 12);


exports.config = {
	// Framework definition - tells Protractor to use Serenity/JS
	framework: 'custom',
	frameworkPath: require.resolve('serenity-js'),
	// seleniumServerJar: path.resolve(node_modules, 'protractor/node_modules/webdriver-manager/selenium/selenium-server-standalone-3.8.1.jar'),

	allScriptsTimeout: 11000,

	// Framework definition - tells Protractor to use Serenity/JS
	// ... (see above)

	specs: ['e2e/features/**/*.feature'],

	cucumberOpts: {
		require: [
			'e2e/features/**/*.ts',
			'e2e/features/**/*.js' // - defined using JavaScript
		], // loads step definitions
		format: 'pretty', // enable console output
		compiler: 'ts:ts-node/register' // interpret step definitions as TypeScript
	},
	serenity: {
		crew: [
			crew.consoleReporter(),
			crew.serenityBDDReporter(),
			crew.photographer()
		],
		dialect: 'cucumber', // or 'mocha'
		requirementsDirectory: `${process.cwd()}/e2e/features`,
		outputDirectory: `${process.cwd()}/e2e/target/site/serenity/`,
		stageCueTimeout: 30 * 1000 // up to 30 seconds by default
	},

	capabilities: {
		'browserName': 'chrome'
	},
	directConnect: true,
	baseUrl: 'http://localhost:4200/',
	restartBrowserBetweenTests: false,
	//   framework: 'jasmine',
	//   jasmineNodeOpts: {
	// 	showColors: true,
	// 	defaultTimeoutInterval: 30000,
	// 	print: function () {}
	//   },
	onPrepare() {
		let currentCommand = Promise.resolve();
		// Serialise all webdriver commands to prevent EPIPE errors
		const webdriverSchedule = browser.driver.schedule;
		browser.driver.schedule = (command, description) => {
			currentCommand = currentCommand.then(() =>
				webdriverSchedule.call(browser.driver, command, description)
			);
			return currentCommand;
		};

		// require('ts-node').register({
		// 	project: 'e2e/tsconfig.e2e.json'
		// });
		// jasmine.getEnv().addReporter(new SpecReporter({
		// 	spec: {
		// 		displayStacktrace: true
		// 	}
		// }));
	}
};
