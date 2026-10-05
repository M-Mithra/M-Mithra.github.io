# M. A. Rama Murthy · Puja portfolio

React + Vite site in English, Telugu and Hindi. It deploys to GitHub Pages through GitHub Actions.

## Run locally

Needs Node 20 or newer.

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build in dist/
npm run preview   # serve dist/ locally
```

## Deploy to GitHub Pages

The repository is `M-Mithra/M-Mithra.github.io`, so the live site is **https://m-mithra.github.io/**.

1. Create an empty public repository named `M-Mithra.github.io` on GitHub (no README, no .gitignore).
2. Push: `git push -u origin main`. When asked for a password, paste a GitHub personal access token.
3. On GitHub, open **Settings → Pages**, and under **Build and deployment → Source** pick **GitHub Actions**.
4. Open the **Actions** tab and re-run the latest workflow (or push again). The site goes live in a minute or two.

## Making changes later (feature branches)

```bash
git checkout -b festival/deepavali-2026   # new branch for the change
# edit src/content.js, then check locally
npm run dev
git commit -am "Add Deepavali 2026 banner"
git push -u origin festival/deepavali-2026
```

Open a pull request into `main` on GitHub. The workflow builds the branch to check it compiles, but does not publish it. Merging the pull request into `main` publishes the new version.

All asset paths are relative (`base: './'` in `vite.config.js`), so the same build also works under a project repository name or on a custom domain.

## Editing content

| What | Where |
| --- | --- |
| All text, in all three languages | `src/content.js` (the `T` object) |
| Shlokas | `src/content.js` (`SHLOKAS`) |
| Festival banner and ticker | `src/content.js` (`FESTIVALS`) |
| Email, phone, WhatsApp | `src/content.js` (`CONTACT`) |
| Photos | `src/assets/photos/`, wired up in `src/photos.js` |
| Colors, spacing, layout | `src/styles.css` |

### Festival banner

Each entry in `FESTIVALS` has `showFrom`, `start` and `end` dates (`YYYY-MM-DD`). The banner and ticker appear from `showFrom`, count down to `start`, show "Day k of n" during the festival, and disappear after `end`. When several are live, the earliest one is shown in the banner. Add a new entry for each upcoming festival.

### Photos

Add the file to `src/assets/photos/`, import it in `src/photos.js`, and add it to the matching list. Gallery photos are never cropped; they sit on a blurred copy of themselves. Keep photos under about 1600 px on the long side so the page stays fast.
