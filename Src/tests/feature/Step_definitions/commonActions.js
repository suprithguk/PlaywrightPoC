const {Given, When, Then, setDefaultTimeout} = require('@cucumber/cucumber');
const {chromium, Page, Browser, expect} = require('@Playwright/test');
const {checkAlly, injectAxe} = require('axe-playwright');
const {assert} = require('assert');

const {pageFixture, dbVariables} = require('../support/pageFixture');
const {fetchEnvUrl} = require('../../config/envList.conf');
const {runner} = require('../../runnerFiles/run');
const {db} = require('../../utilities/OracleDbUtils');
const {getLocator} = require('../../utilities/locatorUtils.js');
var {globalVariable} = require('../support/globalVariable');

const testDataFolder = __dirname + '../../files/testData';
const testData = 'test_data';
const sheetName = testData + '_' runner.ENV;
const filename = 'test_data_all.xlsx';
const excelPath = testDataFolder + '/' + fileName;

let locator;
let browserSecondTab;

Given(/^I select by visible text "(.*)" in "(.*)" $/, async function (value, selector) {
  let locator = await getLocator(selector);
  await pageFixture.page.waitForSelector(locator);
  await pageFixture.page.locator(locator).selectOption(value);
});

# Run axecore for accessibility testing
When(I run axecore, async function (){
  await injectAxe(pageFixture.page)
  await checkAlly(pageFixture.page, null, {
    axeOptions: {
      runOnly: {
        type: "tag",
        values: [wcag2a, wcag2aa]
      }
    },
    detailedReport: true,
    detailedReportOptions: {
      html:true
    }
  }, true, 'html',
                  {
                    outputDirPath: 'results',
                    outputDir: 'accessibility',
                    reportFilename: 'accessibility-audit.html'
                  }
)
}

# Generate random email id 
var emailId = '';
Then(/*I enter email address in text box "([^"]*)"$/, async function (selector) {
  const locator = await getLocator(selector);
  var random = Math.random();
  var date = new Date();
  var components = [
    date.getHours(),
    date.getMinutes(),
    date.getSeconds(),
    date.getMilliseconds()
  ];
  var id = components.join("");
  id = parseInt(id);
  random = parseInt(random * 100000000);
  random = id + random;
  emailId = 'auto' + random + '@gmail.com'
})
