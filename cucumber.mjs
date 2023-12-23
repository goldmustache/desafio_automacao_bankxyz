export default {
    format: ['html:src/reports/cucumber-report.html'],
    parallel: 2,
    paths: ['src/features/**/*.feature'],
    require: ['src/step-definition/**/*.ts','bdd-tests/support/**/*.js'],

  }