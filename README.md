# LyteStoa

**LyteStoa** is a lightweight, responsive Hugo theme purpose-built for curating, showcasing, and hosting playable HTML5 game galleries. Designed for studios, solo developers, and arcade portals, it pairs a clean editorial game catalog with a distraction-free, browser-native playable stage—without external frameworks or runtime bloat.

## Key Features & Benefits

- **Dual-Route Game Architecture:** Every entry in `content/games/` automatically powers both a rich detail page (`/games/<slug>/`) and a dedicated playable stage (`/play/<slug>/`) via Hugo module mounts. Play pages are marked `noindex, follow` and canonicalize back to the game detail page to keep search indexing clean.
- **Playable Game Stage:** Embeds HTML5 builds in a responsive, aspect-ratio-locked viewport (`aspect_ratio`, defaulting to `16/9`) with `fullscreen`, `gamepad`, and `autoplay` permissions. Includes a vanilla JS fullscreen toggle that automatically focuses the game iframe.
- **Flexible Build Hosting:** Host builds locally under `static/builds/<slug>/index.html` or point to an external build using `build_url` in front matter.
- **Rich Game Metadata & Taxonomies:** Out-of-the-box support for `genres` and `tags` taxonomies, status badges (`badge`, `is_new`, `featured`), structured `controls` ("How to play"), `screenshots`, `developer`, `engine`, `license`, `repo_url`, and automatic related-games recommendations.
- **Built-in SEO & Structured Data:** Generates Open Graph, Twitter Card, and canonical tags alongside Schema.org JSON-LD (`WebSite` on the homepage and `VideoGame` with `PlayAction` on game pages).
- **Zero-Dependency Performance:** Built with pure CSS (dark theme via CSS custom properties) and minimal vanilla JavaScript, minified and fingerprinted with Subresource Integrity (SRI) hashes through Hugo Pipes so browser resources stay focused on running the games.

## Theme Structure

```text
lytestoa/
├── archetypes/        # Content templates (including games.md front matter)
├── assets/
│   ├── css/           # Theme stylesheet (main.css)
│   └── js/            # Playable stage fullscreen & focus handler (stage.js)
├── exampleSite/       # Reference site configuration, sample games, and builds
├── layouts/
│   ├── _default/      # Base, list, single, and taxonomy templates
│   ├── games/         # Game gallery list and detail page templates
│   ├── play/          # Playable iframe stage template
│   └── partials/      # Header, footer, head/meta, game-card, and JSON-LD
├── static/            # Default favicons, webmanifest, and logo assets
├── hugo.toml          # Default module mounts, taxonomies, and /play build rules
└── theme.toml         # Theme metadata (requires Hugo >= 0.158.0)
```

## Getting Started

### Requirements

- [Hugo](https://gohugo.io/) **v0.158.0** or later

### Installation

Add LyteStoa to your Hugo site as a theme or Hugo module, and set it in your site's `hugo.toml`:

```toml
theme = "lytestoa"
```

If your site defines custom `[module.mounts]` or overrides `hugo.toml`, ensure the `content/games` to `content/play` mount and `/play` build cascade rules from the theme's `hugo.toml` (or `exampleSite/hugo.toml`) are preserved.

### Adding a Game

Create a new game page using the bundled archetype:

```bash
hugo new games/my-game.md
```

Place your HTML5 game build at `static/builds/my-game/index.html` (or specify a custom `build_url` in the front matter), then configure `playable`, `aspect_ratio`, `cover`, `genres`, `tags`, and `controls` in the generated Markdown file.

### Previewing the Example Site

To run the included reference site locally:

```bash
hugo server --source exampleSite --themesDir ../..
```

## License

Released under the [MIT License](LICENSE).
