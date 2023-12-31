// @ts-check
const { devices } = require('@playwright/test');

const config = {

  testDir: './tests',

  testMatch: ["**/*.js"],

  timeout: 30 * 1000,
  expect: {
    
    timeout: 5000
  },
  reporter: 'html',

  use: {
    browserName : 'chromium'
  },

};

module.exports = config;



