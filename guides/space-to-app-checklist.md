# Space-to-app checklist

## Before wrapping

- [ ] The Space opens in a normal browser.
- [ ] The correct share URL is recorded.
- [ ] The owner understands that the URL may stop working if sharing changes.
- [ ] The wrapper is using the real URL, not a preview or iframe.
- [ ] No Cloudflare hosting layer has been added.

## Re-share rule

When the Space changes: **edit, re-share, same URL, reload the app**. One Space is one share URL; a normal edit should not require inventing a replacement URL. If the URL itself changes, update the wrapper configuration and repeat the full test.

## Wrapper build

- [ ] App name, icon, package ID, and signing owner are defined.
- [ ] Loading, offline, bot-check, and authentication states are understandable.
- [ ] Back, reload, and external-link behavior are intentional.
- [ ] Product header visibility has been tested.
- [ ] The target device/browser has been tested with a real user session.

## Release

- [ ] Debug and release builds are distinguished.
- [ ] A rollback path exists if the Space share is paused.
- [ ] The README identifies the remote URL dependency.
