# Playwright Utilities

Utilities for working with [`@playwright/test`](https://playwright.dev/).

## Utilities

- [`createDataTransfer`](#createDataTransfer)

### `createDataTransfer`

Used to create a [DataTransfer](https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer). Useful when you want to perform drag and drop operations.

```ts
createDataTransfer = (args: {
  page: Page;
  filePath: string;
  fileName: string;
  fileType: string;
}): Promise<DataTransfer>;
```

Usage:

```ts
import { createDataTransfer } from "playwright-utilities";
import { resolve } from "node:path";

await createDataTransfer({
  filePath: resolve(__dirname, "foo.png"),
  fileName: "foo.png",
  fileType: "image/png",
});
```
