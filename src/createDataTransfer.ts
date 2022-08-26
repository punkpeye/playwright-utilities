import { type Page } from "@playwright/test";
import { readFile } from "node:fs/promises";

export const createDataTransfer = async ({
  page,
  filePath,
  fileName,
  fileType,
}: {
  page: Page;
  filePath: string;
  fileName: string;
  fileType: string;
}) => {
  return await page.evaluateHandle(
    async ({ fileHex, localFileName, localFileType }) => {
      const dataTransfer = new DataTransfer();

      dataTransfer.items.add(
        new File([fileHex], localFileName, { type: localFileType })
      );

      return dataTransfer;
    },
    {
      fileHex: (await readFile(filePath)).toString("hex"),
      localFileName: fileName,
      localFileType: fileType,
    }
  );
};
