# Web-to-APK

Web-to-APK means placing a web URL in an Android WebView and packaging that wrapper as an installable Android application with its own name and icon. It is not a native rewrite of the Space.

## Flow

1. Choose and verify the Space share URL.
2. Create an Android project with a WebView activity.
3. Load the URL as a top-level page, not as an iframe.
4. Configure navigation, cookies, storage, back behavior, and a network error state.
5. Add the app label, icon, package ID, and signing configuration.
6. Build a debug APK first, then a signed release APK/AAB.
7. Test on a physical device with the same account and network conditions as the user.

The top-level page distinction matters because frame-ancestor restrictions target embedding. It does not guarantee that bot checks, authentication, sharing state, or future product changes will work.

## Tool options noted in the project

- websitetoapk.dev — free signed APK service
- AppMint
- WebToApp — open-source option
- AppsGeyser
- Median.co — paid wrapper platform

Evaluate privacy, signing ownership, update control, and URL failure behavior before using a hosted converter.
