# Space URL limits

The recorded tests found that a Space URL returned HTTP 403 to anonymous requests, even with a full Chrome user agent. The response body contained a bot-check message referring to a “robot.” A real browser loaded the page, but logged-in WebView behavior was not tested.

A Space-to-app wrapper is fragile if its share can be turned off. The notes also record a prior pause in sharing on October 20 after 6,800 links were exposed. Treat these observations as project history and re-test current behavior before release.

## Implication

A green APK or Electron build proves packaging, not availability. Include a retry/error state and document the remote Space dependency.
