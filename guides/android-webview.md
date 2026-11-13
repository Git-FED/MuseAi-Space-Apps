# Android WebView

The Android starter follows the MuseAi-Number-5 pattern: five tabs, each loading `https://muse.ai/` in its own WebView profile. Replace the URL only after verifying the target Space share.

## Architecture

- Kotlin Android app
- Five tab buttons
- One WebView per tab
- Separate WebView data directories/profiles so sessions do not accidentally bleed across tabs
- Top-level navigation to the Space URL
- Explicit loading, error, and retry states

The template is intentionally conservative. It does not claim that a Space is embeddable, and it does not silently proxy the content through another host.

## Production checklist

- Restrict navigation to approved hosts where appropriate.
- Handle back navigation inside the WebView before closing the activity.
- Preserve state across rotation and process recreation.
- Add an offline/error screen.
- Test logged-in behavior on a physical device.
- Sign release output with a key owned by the project.
