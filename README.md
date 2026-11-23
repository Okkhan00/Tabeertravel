# TABEER TRAVEL & TOURS – Landing Page

Frontend-only React + Vite landing page. Every call-to-action opens a pre-filled WhatsApp chat.
No backend, database, login or payment code.

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # outputs to dist/
npm run preview    # test the production build
```

## Update contact details

Everything lives in **`src/config/siteConfig.js`**:

| Field | What it controls |
| --- | --- |
| `whatsappNumber` | WhatsApp number, international format, digits only (currently `923459200727`, i.e. 0345-9200727) |
| `whatsappDisplay` | Number as shown on the page |
| `phones` | Phone numbers (display + `tel`) |
| `email` | Email address |
| `social` | Facebook / Instagram / TikTok / YouTube links – empty ones are hidden |
| `messages` | Every pre-filled WhatsApp message |
| `images` | Paths of the hero, Hajj and destination images |

## Replace the images

The images in `public/images/` are **illustrated placeholders** (SVG), not photographs.
To use real photos: copy them into `public/images/` (e.g. `hero.jpg`, `saudi.jpg`) and change the
paths in `src/config/siteConfig.js` → `images`. Use JPG/WebP, around 1600px wide for the hero and
1000px for the others, to keep the site fast.

The logo is `src/assets/logo.png` (your official logo, background made transparent).
Favicon files are `public/favicon.png` and `public/apple-touch-icon.png`.

## Deploy on Cloudflare Pages (via GitHub)

1. Create a GitHub repository and push this project:
   ```bash
   git init
   git add .
   git commit -m "Tabeer Travel & Tours website"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
   git push -u origin main
   ```
2. In the Cloudflare dashboard open **Workers & Pages → Create → Pages → Connect to Git**.
3. Select the repository and use these build settings:
   - **Framework preset:** Vite (or None)
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Environment variable (optional):** `NODE_VERSION` = `20`
4. Click **Save and Deploy**. Every push to `main` redeploys automatically.
5. Add your own domain under **Custom domains** if you have one.

### Direct upload (no GitHub)

Run `npm install && npm run build`, then in Cloudflare choose **Pages → Upload assets** and upload the `dist` folder.

## After you have a domain

Open Graph / Twitter images in `index.html` use `/og-image.png`. For best previews on WhatsApp and
Facebook, change them to the full address, e.g. `https://yourdomain.com/og-image.png`.
