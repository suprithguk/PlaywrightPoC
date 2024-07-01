const { Given, When, Then, setDefaultTimeout } = require('@cucumber/cucumber');

setDefaultTimeout(120 * 1000 * 2)
Given(/^I launch the browser (.*)$/, async function (brand) {
  let value = fetEnvURL();
  let ENV = value[brand]
  console.log("Launching URL : ", ENV)
  await pageFixture.page.goto(ENV);
});
