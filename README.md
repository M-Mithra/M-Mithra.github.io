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

### Analytics

The site can send analytics to Google Analytics 4 (GA4). Analytics are disabled until a measurement ID is configured; no analytics numbers are displayed on the site.

1. Create a GA4 property and web data stream, then copy its measurement ID (`G-...`).
2. In the GitHub repository, open **Settings → Secrets and variables → Actions → Variables**, create `VITE_GA_MEASUREMENT_ID`, and set its value to the measurement ID. The ID is public configuration, not a secret. The deployment workflow uses it when building the site.
3. To test locally, set `VITE_GA_MEASUREMENT_ID=G-...` in the environment before running `npm run dev` or `npm run build`.

GA4 records the initial page view and these events:

| Event | What it counts |
| --- | --- |
| `link_click` | All clicked hyperlinks |
| `internal_link_click` | Clicks on links within this site |
| `external_link_click` | Clicks on other web links |
| `email_click` | Clicks on email links |
| `phone_click` | Clicks on phone links |
| `whatsapp_click` | Clicks on WhatsApp links |

In GA4, use **Reports → Realtime** for current activity and **Reports → Engagement → Events** to compare event counts and users per event. GA4's unique-user figures identify browsers/devices, not verified individual people; clearing browser storage or using another device can count the same person again. Reports may take time to fully process. Contact link addresses themselves are not sent as event parameters.

Before enabling analytics, disclose the use of Google Analytics to visitors and meet any consent or privacy requirements that apply to your audience.

### Festival banner

Each entry in `FESTIVALS` has `showFrom`, `start` and `end` dates (`YYYY-MM-DD`). The banner and ticker appear from `showFrom`, count down to `start`, show "Day k of n" during the festival, and disappear after `end`. When several are live, the earliest one is shown in the banner. Add a new entry for each upcoming festival.

### Photos

Add the file to `src/assets/photos/`, import it in `src/photos.js`, and add it to the matching list. Gallery photos are never cropped; they sit on a blurred copy of themselves. Keep photos under about 1600 px on the long side so the page stays fast.
