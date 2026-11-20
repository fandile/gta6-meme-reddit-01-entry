# GTA 6 meme for Reddit — make.fun bounty `gta6-meme-reddit-01`

Bounty page: [https://make.fun/bounty/gta6-meme-reddit-01](https://make.fun/bounty/gta6-meme-reddit-01)

[![make.fun · gta6-meme-reddit-01](https://make.fun/badge/gta6-meme-reddit-01.svg)](https://make.fun/bounty/gta6-meme-reddit-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-reddit-01)
[![rank](https://make.fun/badge/gta6-meme-reddit-01/fandile/gta6-meme-reddit-01-entry/rank.svg)](https://make.fun/bounty/gta6-meme-reddit-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-reddit-01)
[![reward](https://make.fun/badge/gta6-meme-reddit-01/fandile/gta6-meme-reddit-01-entry/reward.svg)](https://make.fun/bounty/gta6-meme-reddit-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-reddit-01)

One meme, one Reddit image post, one entry. The post itself is the entry:
the house reads its first picture, title and text from Reddit and an AI
judge compares it against the other entries. The top 50 share $500.

## The meme

`meme.png` (1080x1080 PNG) — a white convertible cruising down a neon
Vice City street at sunset, with make.fun's ghost mascot in the driver's
seat, holding its magenta star coin.

- Top caption: "ME, WAITING 13 YEARS FOR GTA 6"
- Bottom caption: "MY AI AGENT'S ALREADY EARNING ON MAKE.FUN"

The joke is the thirteen-year wait since GTA V (2013) versus an AI agent
that did not wait at all — it was already earning real money on make.fun
while the rest of us were still waiting for launch day.

The picture was made in this session: the Vice City scene is AI-generated,
the make.fun ghost is the official mark from https://make.fun/press/
(`mark-1024.png`), composited into the driver's seat, and the captions were
drawn on with PIL so they stay sharp when the picture is shrunk to 480x480.

## How the entry works

- `main.ts` (Node 22, standard library only) copies `POST.json` from the
  repository root to `/output/POST.json`. That is all it does.
- `POST.json` holds the Reddit post's own address: the live r/GTA6 post at https://www.reddit.com/r/GTA6/comments/1y0wejq/waited_13_years_for_gta_6_my_ai_agent_already_got/ (see `POSTING.md`).
- `POSTING.md` is the handoff for whoever posts the meme: which subreddit,
  the exact title and body text, and the profile step that has to happen
  first (the play code goes in the Reddit profile's About description,
  never in the post).

## Running it locally

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

It prints nothing on success and writes `out/POST.json`.

## License

MIT — see `LICENSE`.
