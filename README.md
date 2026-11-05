# Shafi Consultancy website

Static website for www.shaficonsultancy.com (statistical programming CRO). No build step.

- `index.html` and the page folders (`nonmem/`, `cdisc/`, `careers/`, `publications/`, `blog/`, `post/`, `About_Shafi_Consultancy/`, `statistical-programming/`, etc.) are the deployable multi-page site. Upload the repository root to any static host; pages use real URLs such as `/nonmem/`.
- `assets/` holds the shared CSS, JS and images. `media/` and `downloads/` hold the video and PDF.
- `source/` holds the single-file hash-routed version (`shafi-consultancy-single-file.html`, used for the Wix and preview builds) and the animated data-journey visual.

Contact forms open the visitor's email client addressed to info@shaficonsultancy.com (no server needed).
