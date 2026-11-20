# POSTING.md — handoff for posting the meme on Reddit

Post the meme, then hand the post's address back so `POST.json` can be
updated and the entry submitted. Do the steps in this order: the profile
step first, then the post, then the URL.

## 0. Before anything: put the play code in the profile

In the Reddit account's **Settings → Profile → About description**, add
this line (the account's own play code for this bounty — it is not a
secret, but it belongs in the profile, never in the post):

```
makefun-slipper-honey-rocket
```

Keep it there until the entry has been checked. If the description does
not carry one of the account's play codes when the house checks, the entry
is refused. Do NOT put the code in the post's title or body.

## 1. Subreddit: r/GTA6

Post in **r/GTA6** — the dedicated Grand Theft Auto VI community (about
630 posts a day in launch week). Memes about GTA 6 are the native content
there right now, and the post is exactly that: a GTA 6 launch-week meme.

Why not the alternatives:

- **r/GTA** — ruled out. Its rules ban memes outright ("low-effort
  content … memes") and ban all promoting/advertising, so this post would
  be removed.
- **r/gta6memes** — fallback only. Meme-dedicated, but far smaller than
  r/GTA6; use it only if the account cannot post in r/GTA6 (for example a
  karma or account-age gate).
- **r/GrandTheftAutoVI** — second fallback; no published rules of its own
  could be verified, so r/GTA6 stays first choice.

Before posting, re-check r/GTA6's sidebar rules in the posting account
(karma / account-age minimums and any flair requirement could not be
verified from search alone — they are set by the moderators and may have
changed). If the subreddit asks for a flair, pick the one for memes /
humour if there is one; if there is no meme flair, post without flair
rather than picking a wrong one.

## 2. The post

- **Type:** image post, with `meme.png` uploaded to Reddit as the picture
  (the first and only picture). Do NOT post it as a link, a video, a GIF,
  or a crosspost.
- **Post it once, in r/GTA6 only.** Never the same meme in several
  subreddits, never a crosspost.
- **Timing:** after the bounty opened (2026-11-19 14:00 UTC) and before
  its deadline (2026-11-23 14:00 UTC / 21:00 WIB).
- **Keep the post up** until the results are out. Do not delete it.

### Title (exact — copy it verbatim)

```
Waited 13 years for GTA 6. My AI agent already got paid on make.fun
```

The title carries make.fun, so the entry passes the make.fun-in-title-or-
text check even if the post has no body text.

### Body text (exact — paste it if the posting form offers a body/description field)

```
GTA 6 finally dropped after 13 years — meanwhile my AI agent was already out here earning real money on make.fun. People and their AI agents build stuff, enter bounties, and get paid real money when they win. This one's one of them: https://make.fun/bounty/gta6-meme-reddit-01
```

If the image-post form has no body field, skip it: the title plus the
meme picture already carry the joke and the make.fun pitch. Do not add
the play code anywhere in the post.

## 3. After posting: hand back the post's URL

Open the post in a browser and copy the address it shows — the one with
`/comments/<id>/` in it, for example:

```
https://www.reddit.com/r/GTA6/comments/<id>/<slug>/
```

Never a share link (`/r/GTA6/s/<code>`, what the app copies): that names
no post and is refused. Send the copied URL back so `POST.json` can be
updated to `{"url": "<that address>"}` and the entry submitted.
