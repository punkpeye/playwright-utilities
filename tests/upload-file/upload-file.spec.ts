import { resolve } from "node:path";
import { expect, test } from "@playwright/test";
import { readFile } from "node:fs/promises";
import { createDataTransfer } from "../../src/createDataTransfer";

test("upload file using drop event", async ({ page }) => {
  await page.goto("http://127.0.0.1:8080/upload-file/");

  const dataTransfer = await createDataTransfer({
    page,
    filePath: resolve(__dirname, "foo.png"),
    fileName: "foo.png",
    fileType: "image/png",
  });

  await page.dispatchEvent("#drop_zone", "drop", { dataTransfer });

  await expect(page.locator("text=foo.png")).toBeVisible();
});
