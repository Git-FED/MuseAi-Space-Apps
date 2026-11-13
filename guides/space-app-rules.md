# Space-to-app rules

1. The project is the Space URL test, not Cloudflare hosting. Do not insert a proxy or a second hosting layer unless a separate architecture decision explicitly requires it.
2. Load the Space as a top-level page in the target wrapper.
3. Do not assume that an iframe preview predicts WebView, Electron, or sidebar behavior.
4. Keep the same share URL through normal edits: edit, re-share, reload.
5. Document anonymous failures separately from logged-in behavior.
6. Treat the host product's sharing controls as an operational dependency.
