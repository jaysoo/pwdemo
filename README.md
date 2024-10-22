## Demo of setting custom env vars

This example uses `dotenv` and a `CUSTOM_MODE` environment variable to set a custom message through `CUSTOM_VAR`. Open `apps/demo/routes/_index.tsx` to see `CUSTOM_VAR` being used in the app.

Run:

```shell
nx e2e demo-e2e
```

A screen shot is produced at `tmp/screenshot.png`. Open it to see that it says `Hello Default`.

Then run with different "mode":

```shell
CUSTOM_MODE=private nx e2e demo-e2e
```

Now, open the `tmp/screenshot.png` file and see that it says `Hello Private`.

The logic is in `apps/demo-e2e/playwright.config.ts` file where `CUSTOM_MODE` is checked to load different dotenv files depending on the value.
