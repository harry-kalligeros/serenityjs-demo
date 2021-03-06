# SerenityJS Demo Application

This SerenityJS Demo Application demonstrates the use of SerenityJS and the screenplay pattern in a mock web application which concerns a conference for developers.

The technology stack used in the demo involves:

*	Typescript
*	Angular 5
*	SerenityJS
* 	CucumberJS
*	Protractor 5

## Software requirements

* [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
* [NodeJS](https://nodejs.org/en/download/)
* [Java JDK >=8](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)

## Installation

1. Clone the repo 

```
git clone https://github.com/harry-kalligeros/serenityjs-demo.git
```

2. Install angular/cli
```
npm install -g @angular/cli
```

3. Install the artefacts
```
cd serenityjs-demo
npm install
```

4. Run the automation tests
```
npm run e2e
```
> ### Note:
> If the `serenity update` command fails to download the Serenity-CLI JAR file, you can [download](https://dl.bintray.com/serenity/maven/net/serenity-bdd/serenity-cli/1.8.0/serenity-cli-1.8.0-all.jar) it manually and place it under the ./node_modules/serenity-cli/.cache folder


5. View the reports at http://localhost:8080
```
npm run report
```

## More documentation

* [Serenity JS](http://serenity-js.org/)
* [Cucumber](https://cucumber.io/)
* [Protractor](https://www.protractortest.org/#/)
* [Typescript](https://www.typescriptlang.org/)
* [Angular](https://angular.io/)
* [Cucumber-tsflow](https://www.npmjs.com/package/cucumber-tsflow)


