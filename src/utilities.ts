test("upload file using drop event", async ({ page }) => {
  await page.goto("http://127.0.0.1:8080/upload-file/");

  const dataTransfer = await createDataTransfer({
    page,
    filePath: resolve(__dirname, "bar.png"),
    fileName: "bar.png",
    fileType: "image/png",
  });

  await page.dispatchEvent('input[type="file"]', "drop", { dataTransfer });
  await page.pause();
});
