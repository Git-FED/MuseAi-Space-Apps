# Header-hide fix

The wrapper can inject CSS to hide the white Muse header when the app needs to present only the Space surface. This is a wrapper-level presentation choice, not a change to the Space itself.

Use a narrowly scoped selector, keep the injection easy to disable, and re-test after Muse UI changes. Never use header hiding to conceal an authentication or error state.

Example concept:

```css
/* Verify the selector against the current product DOM before shipping. */
header[role="banner"] { display: none !important; }
```
