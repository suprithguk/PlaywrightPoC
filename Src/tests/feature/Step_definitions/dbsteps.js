const {Given, When, Then, setDefaultTimeout} = require('@cucumber/cucumber');
const {chromium, Page, Browser, expect} = require('@Playwright/test');

const {pageFixture, dbVariables} = require('../support/pageFixture');
const {fetchEnvUrl} = require('../../config/envList.conf');
const {runner} = require('../../runnerFiles/run');
const {db} = require('../../utilities/OracleDbUtils');
const {getLocator} = require('../../utilities/locatorUtils.js');
var {globalVariable} = require('../support/globalVariable');

setDefaultTimeout(60 * 1000 * 2);

Given(/^I (.*) data entry for (.*) with (.*) and (.*) and (.*) and (.*) and (.*) for (.*) (.*) $/, async function() {
  console.log("Sql action: ", sqlAction.replace(/"(.*)"/g, '$1'))
  dbVariables.sqlQueryAction = sqlAction.replace(/"(.*)"/g, '$1'))
  let columnNames = Object.keys(globalVariable.excelTestData);
})
