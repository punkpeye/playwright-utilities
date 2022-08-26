import { type PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
  webServer: {
    command: "npm run start",
    url: "http://127.0.0.1:8080",
    timeout: 60_000,
  },
  use: {
    baseURL: "http://127.0.0.1:8080",
    headless: true,
    ignoreHTTPSErrors: true,
    video: "on-first-retry",
    viewport: { height: 1_080, width: 1_920 },
  },
  reporter: [["html", { open: "never" }]],
};

export default config;
