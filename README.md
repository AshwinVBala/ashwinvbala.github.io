# Ashwin Balakrishnan

A static portfolio. No installation or build step.

```sh
python3 -m http.server 4173 --bind 127.0.0.1
```

Open http://127.0.0.1:4173.

## Add your writing

Edit `index.html`. Comments mark the places for your summaries of ParaLLM,
Kalvi, and Sagora Connect, in that order. Add a `<p>` at each comment; paragraph spacing is already
included in the stylesheet. The sidebar has a short introduction you can also
edit. Project summaries remain yours to write. There is no contact section.

Your GitHub profile is linked beside your name. Project images open at full size.
The ParaLLM images show a completed comparison in the current iOS app: the
question and synthesis, followed by an individual model reply. The synthesis
capture was recovered from the supplied simulator screenshots on the Desktop;
the reply was captured through Simulator’s Save Screen command on November 7,
2026. Optimized JPEGs link to the original full-resolution PNGs. They replace
the older QA/error-state images. Kalvi uses the supplied screenshot, with an
optimized JPEG preview that links to the original PNG.
Sagora Connect uses the two supplied screenshots: workspaces first, then chat.
Its JPEG previews also link to the original PNGs.

## Appearance

The Light / Dark / Device control sets the page appearance. Device is the default
and follows the operating system, including changes while the page is open.
A selection is saved in localStorage under `portfolio-theme`. A small head script
restores it before the stylesheet loads. If storage is unavailable, switching
still works for the current visit. Device appearance also works without JavaScript.

- `styles.css`: layout, theme colors, and responsive rules.
- `portfolio.js`: the appearance control and synchronization between tabs.
- `assets/`: screenshots, all hosted locally.

The static files are ready for GitHub Pages.
