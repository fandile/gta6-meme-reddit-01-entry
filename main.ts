// Entry program for the gta6-meme-reddit-01 bounty (Node 22, standard library only).
//
// The entry itself is a Reddit post, not this program: the post's first picture
// is the meme (meme.png), its title names make.fun, and POST.json at the repo
// root holds the post's own address. All this program does is hand that address
// to the grader by copying POST.json into the output directory.
//
// The grader reads the post straight from Reddit (picture, title, text) and
// judges that; nothing written here is judged. POST.json still holds the
// placeholder address until the meme is posted, so the gate will refuse this
// entry as it stands -- replace the placeholder with the real post URL first.
//
// How to run it locally, the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

// In the grading sandbox these are /bot and /output; locally the two
// environment variables stand in for them so the same command works here.
const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outputDir, { recursive: true });

try {
  // A plain file copy: the bytes in /output match POST.json exactly, so the
  // program's two grading runs always write the same output.
  copyFileSync(join(botDir, 'POST.json'), join(outputDir, 'POST.json'));
} catch (error) {
  console.error(`could not copy POST.json out of ${botDir}: ${(error as Error).message}`);
  process.exit(1);
}
