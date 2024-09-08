---
title: The Lone Pirate
tag: blog
desc: A story of the first (and only) act of Playdate "piracy" I'd ever encountered, how it floundered, and why it's so so funny.
visible: 0
---
Now, if you've read my blog, or checked my website...or checked my socials...or know anything about me as a person, you probably know about the [Playdate](https://play.date), that quirky little game console with a crank, built-in games, and a black-and-white screen. There's one thing that people might be at least a little surprised to hear, though:

*There's not really a piracy scene!*

...Now I realize by saying that in such a public space that I'm kinda jinxing it, but like—! For a console with completely open game sideloading, and pretty much no copy protection¹ besides the honor system...it's kinda super commendable! Now, that can be attributed to a lot of things — the games are made by small, often just one-or-two-person teams instead of massive evil blood-sucking corporations; that's a huge part; but still! You'd expect someone to have at least *tried*, right?

...This blog post chronicles the story of the first (and only) act of Playdate "piracy" I'd ever encountered, how it got shuttered nigh-immediately due to pure happenstance, and some hilarious surrounding bits.

To set the scene: imagine in your head that it's May 2023. The official Catalog had just launched about a month prior, and games were starting to regularly fill the scene every couple of weeks. It was a nice time! Imagine the collective surprise when someone pops into the Discord, and posts...a link to an unreleased game. (Here's where I would have put an engaging image or something, but I think they got banned from the Playdate Discord at some point as all of their messages are completely gone. Oh well!)

Anyway, it was a link to the Playdate backend purchase screen for a game called "The Barkless Doctrine". If you dunno about it, go play it! [It's really good.](https://play.date/g/tbd) Anyhoo, this whole thing happened about a month before the game was actually, like... supposed to be out! A few important things to know about the Playdate API's inner workings, at this time:

- Unpublished games were not accessible from the front-end (the pages are deliberately set up to 404), but they would still be fully accessible if you went through the proverbial back door of the API.
- Games uploaded to Panic's storage network were *sequential* — it included all sideload, Catalog, and Season One titles, but a new game addition would come immediately after the last.
- If a game is unpublished, there's no immediate urgency to fill in finalized details such as...the finished game bundle, or...price.

The first point would importantly be fixed very soon after this all went down, but having games available sequentially via the backend means that someone with a keen eye and a Python script could go a-scrubbin' for unreleased titles! Imagine their face when they stumble upon a completely unheard-of game while poking around back there. What do you do but post about it? And since it wasn't meant to be, y'know, out yet, the price was tentatively labeled as $0. Or, in other words, ...free.

Anyway, of course Neven Mrgan (of Panic; creator of Barkless in the first place) had to step in, and advise against playing this broken early build of the game. If you wanna know how this leak wraps up: the game released for real about a month later, the few people who had installed it illegitimately beforehand had access revoked, the early copy was preserved (privately!) as a neat piece of Playdate history (remember this part!), and all was right with the world once more. Yippee!

And all that brings us to...the conclusion of my wild pre-amble, and onto the beginning of the story of the lone pirate. Man, they should really put a character limit on this thing.

ANYHOO, cue a couple weeks after all this went down, when the person who had initially found the copy of Barkless had texted me over Discord DM. I'm not gonna reveal any of their identifying information, on account of A. I don't wanna be that kinda person, and B. I don't even remember it anyway. They got in touch with me asking if I still had a copy of the leaked version of Barkless.

We², of course, had saved a copy for preservation reasons.

...We, of course, told this guy we didn't have any copy.

He then proceeds to lay down the deets of why he was asking: he had created an entire website to congregate and distribute free Playdate titles. Not free as in "these games were made free by the developer", however — free as in "UH OH. UH OH. UH OH. UH OH. UH OH."

Some highlights of what was featured (or at least, attempting to be) on this website at the time:

- Various games which were listed, but had no download links attributed on account of them not even existing.
- CSS code directly stolen from the official Playdate Catalog! [Someone phone the Rip-Off Express.](https://panic.com/extras/ripoff/)
- An 'early build' of Hidey Spot, sneakily snagged from a Playdate developer forum where it was originally posted.
- A (non-functioning) download for the paid demo to Daily Driver, which this person has notoriously begged for a free copy of publicly in the past.

There's probably some philisophical implications to whether it can be considered a true attempt at piracy if they weren't actually offering anything you couldn't get for free elsewhere at the time, but regardless it was really strange. I say a lot of words pretty much amounting to "That's Not Cool Dude", and he, in response...immediately deletes every message he sent me. GREAT STRAT™!

Critically, he told exactly one other person about this thing though, and that was... scratchminer.

You may remember scratchminer from Index OS, Scrapbook, or even that footnote from earlier³. In between all that, he's been busting open the Playdate pretty much every other way he knew how — importantly, in a responsible way. That means he had methods of contacting people at Panic about weird stuff like this, which he promptly does. They respond with something along the lines of "oh my god ok thanks", and file a DMCA takedown request.

And that's... not *quite* the end of the story! I mean, the site *did* get taken down, but here's a funny thing: it was hosted on GitHub. Funnily enough, free hosting — that'll be hilarious later! — but also, GitHub has a keen eye for transparency, and as such will publicly post any DMCA takedown requests filed at somebody using their service. We checked in on this repository after the site went down out of curiosity, and here's the hilarious part:

There was nothin' from Panic.

I mean, there was *somethin'* from Panic — some unrelated source code leak from 2017 — but there was nothing pertaining to the "free Catalog" website at all. So the only reasonable outcome I can imagine is that someone from Panic reached out to the person, said "please take this down or we're going to pursue proper legal action", and then they promptly screamed, ran and destroyed all the evidence.

Anyway, I think that's about the end of it! The site where the games were originally hosted wound up having some cryptic password entry for a little while, but never came back, was never shared anywhere beyond scratch and I, and is now completely down.

That was over a year ago by now — I've never seen anyone try to host Playdate piracy before nor since, and I sure hope it stays that way for a while to come. This place is pretty cool! Let's keep it that way.

<hr>

¹For sideloaded titles. Catalog games are encrypted with custom DRM, just for the record.

²"We" being myself and scratchminer — he'll appear in the story later, but just for clarification.

³Footnote number 2.

<hr>

...While you're still here, how about a funny button to cap off this story?

For all the "doesn't wanna pay for things" talk going around, they actually *did* go through the effort of registering a custom domain for this site! Now, you gotta provide some info to ICANN when you register a domain, so they know Who It's Going To — this information is typically publicly accessible with a WHOIS lookup, but domain registrars often provide WHOIS protection to shield it from public databases like that — either for free, or for a small fee.

Now, the domain registrar *he* used provided it for a small (iirc, ~$5 USD) fee alongside the domain, and...would you believe the guy who wasn't willing to pay for a $5 Playdate game would also not pay the $5 for WHOIS protection?

We, of course, did absolutely *nothing* with this data. Never saved it anywhere, never shared it beyond us or tried to pursue them in any way, nothing. I just wanna make that very clear. But we both had a really hearty chuckle at the sheer irony of it, and I think it's a very funny way to end this tale.