# Desktop Electron

The desktop starter follows Muse-3-Desktop: three Muse slots with a black bottom tab bar, ordered 3, 2, 1. Each slot is a top-level Electron `BrowserWindow` view pointed at the Muse URL.

The historical build was green for Windows (186 MB), Linux (208 MB), and macOS (382 MB), but the Muse 2 and Muse 1 switcher tabs were documented as broken. The starter marks that behavior as a known test case rather than hiding it.

## Production checklist

- Verify each tab actually changes the visible window.
- Keep the URL in one configuration file.
- Provide reload and open-in-browser actions.
- Treat renderer content as remote content and keep Electron security defaults strong.
- Test packaging on every target operating system.
