# Shafi Consultancy website

Static website for www.shaficonsultancy.com (statistical programming CRO). No build step.

- `index.html` and the page folders (`nonmem/`, `cdisc/`, `careers/`, `publications/`, `blog/`, `post/`, `About_Shafi_Consultancy/`, `statistical-programming/`, etc.) are the deployable multi-page site. Upload the repository root to any static host; pages use real URLs such as `/nonmem/`.
- `assets/` holds the shared CSS, JS and images. `media/` and `downloads/` hold the video and PDF.
- `source/` holds the single-file hash-routed version (`shafi-consultancy-single-file.html`, used for the Wix and preview builds) and the animated data-journey visual.

Contact forms (enquiry pop-up and Contact page) submit to info@shaficonsultancy.com through Web3Forms (access key in `assets/site.js` and the single-file source). If the service is unreachable the form falls back to opening the visitor's email app.
