# First Rep
A mobile-friendly beginner push / pull / legs workout companion. Plain HTML, CSS and JavaScript; no build, account, API key or dependencies.

## Deploy with GitHub Pages
1. Create a GitHub repository (for example, `first-rep`).
2. Upload `index.html`, `style.css`, `app.js`, and `.nojekyll` to the repository root. Do not upload the enclosing folder itself.
3. In the repository, open **Settings → Pages**. Select **Deploy from a branch**, choose **main** and **/(root)**, and save.
4. Open the Pages URL GitHub provides on your phone. Bookmark it or use your browser's **Add to Home Screen** option.

Also works on Netlify or Vercel as a static site: no build command; serve the directory containing index.html. You can preview locally by opening index.html, but YouTube embedding works most reliably on a hosted HTTPS URL.

## Features
- Push, Pull and Legs tabs matching the supplied routine (machine chest press and leg press chosen from its alternatives).
- Week 1 mode (one working set) enabled initially; uncheck for two sets.
- Set checkboxes scoped to the local calendar date; weight notes persist across dates.
- Device-local storage; no cloud sync. Different devices and browsers have separate progress.
- 60 / 90 / 120-second rest timer using a wall-clock deadline. No notifications while the page is closed; phone background behavior may delay vibration.
- YouTube demos in a native dialog. Close with ×, Escape, or a backdrop tap; closing removes the video player and stops playback.
- Direct YouTube fallback links for all videos. All direct video links now use YouTube Shorts. The revised plan replaces machine shoulder press with seated dumbbell shoulder press, hammer curls with the seated version, and incline plank with dead bug.
- Accessible labels, keyboard focus outlines and responsive phone layouts.

## Edit videos / routine
Edit the `plan` object at the top of app.js. Each exercise has: name, rep range, rest seconds, YouTube video ID, form cue. Video IDs were located in public search results; full visual coaching review and embedded playback were not verified. YouTube availability and embed permissions can change. If a video fails, use the direct link or replace its ID.

The revised routine uses a new local storage key so old machine-press weights do not carry into the dumbbell exercise. Old browser data is left intact.

For dumbbells, record the weight of ONE dumbbell consistently. For machines, record the displayed stack weight. Plank needs no weight entry.

Start light, leave 2–3 repetitions in reserve, and have a gym trainer check your technique. Stop an exercise if it causes sharp or joint pain.

## Playback troubleshooting
Open the hosted GitHub Pages URL, not a downloaded file or GitHub source preview. The updated dialog detects local-file previews and reports YouTube playback errors. Removed/private/embedding-blocked videos cannot be fixed by the website: use Open on YouTube or Find another tutorial. Ad blockers, privacy settings or in-app browsers may block the player; try your normal browser.
