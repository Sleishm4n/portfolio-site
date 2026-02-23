# samleishman.com

Personal portfolio site built with Next.js and TypeScript. Features a live Spotify now-playing widget, interactive project cards, and an expandable skills section.

🔗 **[samleishman.com](https://samleishman.com)**

---

## Tech Stack

| | |
|---|---|
| **Framework** | [Next.js 15](https://nextjs.org) (App Router) |
| **Language** | TypeScript |
| **Styling** | [Tailwind CSS](https://tailwindcss.com) |
| **Deployment** | [Vercel](https://vercel.com) |

---

## Getting Started

Clone the repo and install dependencies:

```bash
git clone https://github.com/Sleishm4n/portfolio-site.git
cd portfolio-site
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project Structure

```
portfolio-site/
├── app/                  # Next.js App Router — pages and layout
│   ├── layout.tsx        # Root layout, fonts, metadata
│   └── page.tsx          # Main page
├── components/           # Reusable UI components
├── public/               # Static assets (images, CV, favicon)
└── ...config files
```

---

## Features

- **Hero** — Animated text reveal with name and title
- **About** — Introduction and background
- **Projects** — Cards linking to GitHub repos with tech tags
- **Skills** — Expandable skill cards with proficiency context
- **Spotify Widget** — Live now-playing display via Spotify API
- **Contact** — Links to GitHub, LinkedIn, and email

---

## Environment Variables

If running the Spotify widget locally, you'll need to add a `.env.local` file:

```bash
SPOTIFY_CLIENT_ID=your_client_id
SPOTIFY_CLIENT_SECRET=your_client_secret
SPOTIFY_REFRESH_TOKEN=your_refresh_token
```

See the [Spotify Web API docs](https://developer.spotify.com/documentation/web-api) for how to generate these.

---

## Deployment

The site deploys automatically to [Vercel](https://vercel.com) on every push to `main`. No manual steps needed.

---

## Roadmap

Tracked via [GitHub Issues](https://github.com/Sleishm4n/portfolio-site/issues). Upcoming work includes:

- Blog section with MDX support
- Experience / timeline section
- GitHub activity heatmap
- CI pipeline with lint and typecheck

---

## License

Not open for reuse. Feel free to take inspiration, but please don't copy the design or content directly.

---

*Built by [Sam Leishman](https://samleishman.com)*
