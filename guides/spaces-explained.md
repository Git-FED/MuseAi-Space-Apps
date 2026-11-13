# Spaces explained

Spaces are Meta-hosted surfaces for what is built in Muse. They are shareable to humans through a link, but they should not be treated as general-purpose embeddable hosting.

A Space URL can work when opened directly in a browser, WebView, Electron window, or extension sidebar while failing in an iframe or anonymous fetch. The wrapper must therefore be tested in the actual target surface.

## Space versus artifact

The project notes sometimes call the built thing an “artifact.” In this repository, the preferred term is **Space**, with “artifact” retained as a compatibility term for older notes.

## Reliability

A share URL is a dependency owned by the hosting product. A share can be paused, disabled, or protected by a bot check. A wrapper should show a useful error state and should never imply that a successful build guarantees permanent availability.
