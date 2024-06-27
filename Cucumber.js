const {runner} = require("./src/runnerFiles/run")
let featureFilePath = `src/tests/feature/featureFiles/${runner.PACK}/${runner.SUB_PACK}/${runner.SUB_TO_SUB_PACK}/`;
  if(runner.FEATURE)
  {
    featureFilePath += `${runner.FEATURE}.feature`
  }else{
    featureFilePath += `*.feature`
  }
  const tags = runner.TAGS || 'not @*';

module.exports = {
  default: {
    projects:[{
      name: 'Playwright'
    }],
    formatOptions: {
      snipperInterface : "async-wait",
    },
    paths : [featureFilePath],
    tags: tags,
    publishQuiet: true,
    dryRun: false,
    require: [
      "src/tests/feature/step_definitions/*.js",
      "src/tests/feature/support/hooks.js",
      "src/tests/feature/support/world.js"
    ],
    format:[
      "progress-bar",
      "html:test-results/cucumber_html_reports/cucumber-report.html",
      "json:test-results/cucumber_html_reports/cucumber-report.json",
      "rerun:@rerun.txt"
    ],
    parallel: 1
  },
}
