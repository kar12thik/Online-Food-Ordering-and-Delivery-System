const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
    env: {
      CI: "false",
      REACT_APP_NAME: "Development OFODS",
      REACT_APP_ENV: "DEVELOPMENT",
      REACT_APP_API_URL: "https://www.api.ofodsapp.dev.com",
    },
    chromeWebSecurity: false,
    experimentalFetchPolyfill: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
