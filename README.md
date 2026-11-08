# Ashwin Balakrishnan

A static portfolio. No installation or build step.

```sh
python3 -m http.server 4173 --bind 127.0.0.1
```

Open http://127.0.0.1:4173.

## Add your writing

Each project has its own static page:

- `index.html`: project overview.
- `kalvi.html`: Kalvi screenshots and your description.
- `parallm.html`: ParaLLM screenshots and your description.
- `sagora-connect.html`: Sagora Connect screenshots and your description.
- `capstone.html`: your capstone topic, ready for your writing and images.

Edit the relevant project page to update its summary. The sidebar links work on
every page and mark the current project. The name and “All projects” links return
to the overview. Sidebar markup is shared in appearance but stored in each HTML
file; update all five copies when changing common details. There is no build step.
Your existing project descriptions have been preserved. There is no contact section.

Project images open at full size.
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
