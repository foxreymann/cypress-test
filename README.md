# Devops Playground #26: Hands on with Cypress 
![](images/cypress-io-logo.png)

# Introduction
On this meetup, we will walk you through what Cypress is and how it's different from existing test automation tools such as Cypress. We'll show you how to setup Cypress in your machines and write your first Cypress test.

Name: Marie Cruz

Role: QA and Continuous Delivery Consultant

Email: marie.cruz@ecs-digital.co.uk

LinkedIn: [Let's connect](https://www.linkedin.com/in/marie-desiree-cruz-95841242/)

# Agenda

- [Overview](#overview)
- [Requirements](#requirements)
- [Setup](#setup)
- [Cypress Setup](#cypress-project-setup)
- [Writing Tests](#writing-tests)
- [Further Reading](#further-reading)

## Overview

Cypress is a test automation tool created by Brian Mann to to help developers write automation tests from a user’s perspective. Cypress is written purely in JavaScript and was created to address all the issues developers face when writing tests. Let's admit it, developers hate writing tests! From setting up the framework, debugging why the test is flaky, and dealing with the complexities of managing tests, it's no wonder why most developers prefer to put E2E tests on the side. 

![](images/cypress-test-runner.png)

## Requirements
- Node and NPM installed
- Code editor (e.g. VSCode)
- Chrome browser
- Basic Javascript knowledge

## Setup
// Add setup details here

## Cypress Project Setup
Once you are succesfully logged in to your instance, follow the steps below to setup Cypress.

1. Open up a terminal and clone the project
```
mkdir cypressProject
cd cypressProject
git clone https://github.com/ecsdigital/devopsplayground-26-cypress.git

```
2. Install project dependencies 
```
npm i
```

3. Start the React application. Once the application is booted, it can be accessed by navigating to `http://localhost:3000/`
```
npm run start
```

![](images/react-app.png)

4. To open Cypress, open another terminal window and run:
```
npm run cypress open
```

5. To run tests headlessly, use the below command:
```
npm run test:e2e
```

![](images/cypress-runner.png)

If you click one of the spec files, Cypress will inform you that there are no tests found (we need to implement it!)

![](images/cypress-no-tests.png)

## Writing Tests
1. Scenario: Verify that title is displayed correctly
2. Scenario: Verify that image gallery can be clicked successfully
3. Scenario: Verify that gallery can be closed
4. Scenario: Verify that Squarespace login functionality throws an error if incorrect details are provided - we will use a custom Cypress command for this scenario.

### Scenario 1 example code
```
it('should display the title correctly', () => {
  cy.get('#title').should('have.text', ' Marie Cruz ');
  cy.get('.icons > ul > li').should('have.length', 3);
});
```

## Further Reading

- [Official Cypress Documentation](https://docs.cypress.io)
- [Introduction to Cypress by Brian Mann](https://www.youtube.com/watch?v=pJ349YntoIs)
- [Example Cypress framework](https://github.com/cypress-io/cypress-example-kitchensink)
- [Integrating Cypress with your CI Provider](https://docs.cypress.io/guides/guides/continuous-integration.html)