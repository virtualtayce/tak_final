const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://katalon-demo-cura.herokuapp.com',
    env: {
      baseUrl: 'https://katalon-demo-cura.herokuapp.com',
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    viewportHeight: 1024,
    viewportWidth: 768,
    defaultCommandTimeout: 4500
  },
});