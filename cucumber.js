export default {
  import: ['src/steps/**/*.ts', 'src/support/**/*.ts'],
  paths: ['src/features/**/*.feature'],
  format: ['progress', 'html:reports/cucumber-report.html'],
  publishQuiet: true,
  timeout: 30000,
};
