// @ts-check
import { defineConfig } from "@playwright/test";

/**
 * @see https://playwright.dev/docs/test-configuration
 */

export default defineConfig({
  testDir: "./tests",
  timeout: 50 * 1000,
  fullyParallel: true,
  expect: {
    timeout: 5000,
  },

  reporter: "line",
  projects:[ 
    { 
      name: "chrome",
      use:{ 
        browserName:"chromium",
        headless: false,
        screenshot:"on",
        trace: "retain-on-failure",
        permissions:['geolocation']
      }
    },
    { 
      name:"firefox",
      use:{ 
        browserName:"firefox",
        headless:true,
        screenshot:"off",
        trace: "retain-on-failure"
      }
    }
  ]
});
