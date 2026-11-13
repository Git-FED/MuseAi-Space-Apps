# Browser extensions

Browser extensions and web extensions are the same category here. The Surf Fed pattern is a button that opens Muse AI in a sidebar.

A sidebar is a browser-controlled top-level surface, not an iframe workaround. The extension should declare only the permissions it needs, provide a visible open/close action, and degrade gracefully when a Space is unavailable or the user is logged out.

## Minimum pieces

- Manifest with a sidebar action
- Sidebar HTML/CSS/JS
- A clear target URL configuration
- Host permissions only when required by the browser
- Error and reload affordances
- A short privacy note describing that the sidebar loads the configured remote Space
