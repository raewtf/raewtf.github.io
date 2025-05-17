---
title: The Crankyboard Saga
tag: blog
desc: The recap of my time maintaining a nice Playdate scoreboard site.
---
So, the Playdate — I've never talked about this thing before! Anyway, two important things you need to know heading into this post: the Playdate has games, and the games have scoreboards. ...I should probably elaborate.

So certain Playdate games¹ have access to on-line scoreboards, giving players some nice global competition. At the time this story is set though (around April 2023), the only way to view a game's leaderboard — assuming it had one — was to actually buy, download, and launch the game itself, and find where it holds 'em (assuming it displays 'em at all). So I figured...why doesn't somebody make a web viewer for these things?

...Turns out, because nobody reasonably could in a sustainable way. But that wasn't gonna stop me; so I got to work.

![WIP first iteration of the Crankyboard.](/blog/images/2025-05-17-1.png)

Looks pretty good, right? ...Eh? Well, I was still working on it at this point. Both in terms of visuals, as well as pretty much all of the underlying code — turns out, the Playdate API is handled in a reasonable manner. CURSES!!

APIs, put very very (overwhelmingly) simply: you yell at a specific endpoint, and it returns data. If you don't want just anyone accessing that data, though, you can limit it — in Playdate's case, any request to the leaderboard API, that isn't coming from either the play.date domain or a physical Playdate console with its unique access token, would just not return anything useful. At this point, all hope seemed lost — how were we gonna be able to read from the API without that access key? Luckily, we have Scratchminer.

This is where the process gets super jank: Scratch helped me set up a dummy Playdate, on a second account. He scrubbed through all the Playdate serial numbers until he found one that wasn't registered, and then told the Playdate servers "I'd like to register this console!" ...In reality, it wasn't a console at all, but just a very funny server request. And as part of the registration process, the handshaking and back-and-forth; the server provides you with...an access token! Bingo.

So, with this access key, we could now access the scoreboard API. Nice! Some more work later, and in just a weekend...I released the first iteration of the Crankyboard, on April 15th:

![First iteration of the Crankyboard, displaying Playdate game titles and associated scores.](/blog/images/2025-05-17-2.png)

On the site end, this was just HTML and CSS, with some light Javascript set up to read from and display stuff in a data file. On my local end, however, I had also crafted the worst Python script of all time to help me maintain the site. Here's the rundown of that script:

- Take this access token, and combine it with a huge hard-coded list of all the Playdate scoreboards we knew existed.
- Scream at every single endpoint, one after another — yes this is as wasteful and silly as it sounds.
- Take all that nice JSON data, and format it into a horrible JS file containing a whole meaty bag of pre-baked HTML elements.
- Take this new JS file, drop it into the Crankyboard source directory, and push a patch — and now, the site has up-to-date info!

This is the worst thing ever, and for quite a few reasons: for one, it was supremely hard-coded. If a new game came out that had added new scoreboards, I'd need to update both the website and the Python script to add that in. And to make things worse, the scoreboard API endpoints relied on knowing both the game's bundle ID as well as the specific board IDs the developer had used to set up their boards. (I think more than a couple times this resulted in me just asking the developers directly what their info was, because guessing didn't work LOL).

Also, it meant that updates to the boards were completely manual. I mean, not "I'm writing in all the values by hand" manual, but still pretty manual — if someone just posted a new score and they wanted to see it go up, I'd need to be awake and able to update that script, and push the thing through. If I was smarter I probably could have set up a cron job or something to do this automatically at certain periods, but I wasn't, so this was how we rolled.

One nice thing about doing things manually for the most part, though, is that I could make it very bespoke. An important thing to note about the scoreboard API, is that it only handles a limited amount of data — for each entry you typically only get a username, a timestamp of when it was submitted, their current rank, and an integer number for their actual score. Even by the time I set up the Crankyboard (just a month-ish after the Catalog launched), games were kind of exploiting the integer numbers to allow for more data to be shared. Since the raw scores were never sent anywhere but to the games themselves (where the developers had control over how they were displayed), they could format these scores to their liking — something I had to learn first-hand when building this site.

For example, in <i>Grand Tour Legends</i> — this game's leaderboards were three of the only to use a feature where the ordering of scores could be <i>flipped</i>, so that a lower number resulted in a higher rank. This makes sense, since being a racing game, having a lower time will naturally be better. But I had never paid any mind to this sort of thing before I had to add the game in, so I had done some pretty awful formatting to flip the scores "back" around, and display them properly.

Another more custom example can be found in <i>Swap Machina</i> — this puzzle game keeps track of both your score and the level you were at when you reached game over, and it does this by attaching the level (which is always a two-digit number) to the very end of the score before submitting. When displaying these scores, it simply has to detach the last two digits of the returned score number, display that as the "level", and show the remainder as the "score". I implemented that into Crankyboard too, and felt very smart about it.

Anyhoo, my constant hubris led me to wanna clean up the code and looks pretty much immediately after launch, and so just a day later, I pushed a new site design that made things look a lot cleaner, and added some nice perks like animated graphics and a dark mode.

![Second iteration of the Crankyboard.](/blog/images/2025-05-17-3.png)

![A gif showing some nice shine effects on the top three scores.](/blog/images/2025-05-17-4.gif)

I was honestly going ham adding way more stuff than this thing needed — toggles for relative and absolute time, special badges hard-coded to be assigned to different usernames (like ones for game developers, leaderboard winners, and people from Panic), showing all available scores for a given board (whereas the games themselves could only ever grab the top ten alongside the player's own personal best), and a whole bunch more neat stuff like that.

And then, something really funny happened:

![Discord screenshot — rae saying "IVE BEEN PUT OUT OF BUSINESS?!?!?!", and a screenshot of a Playdate game page showing leaderboards.](/blog/images/2025-05-17-5.png)

Panic added scoreboards to the Playdate site! I got run out of business.²

They were actually super apologetic about the situation — turns out the feature's been around on their end from day 1, and in the time between them implementing it and actually making it live, I just so happened to try the same thing. Theirs ran way more efficiently, though — since it was actually sanctioned, it could yell for the API in a way more responsible way, and crucially update in <i>real-time</i> without manual intervention. This, combined with being displayed on the game pages themselves, definitely made it much more convenient to check.

I kept updating the Crankyboard for a while, but at some point the dummy Playdate had disappeared, and I figured that was as good a sign as any to leave it be. The last update was on July 7th, 2023, so it lasted for a fun few months! And the archive is still around if you just wanna take a peek at the site design (I'm still really happy with how it turned out):

<a href="https://rae.wtf/crankyboard" class="button">Visit the Crankyboard archive</a>

Crankyboard was a super cool project to make, and it was really fun being a direct through-line to some fun competition like that, but in the end it would never have lasted forever anyway. Manual maintenance relying on one person just isn't that smart, and it's low-key nice to not have a weight like that on my shoulders LOL. In the modern day, Playdate scoreboard info is very readily accessible, which is the problem this site was trying to address in the first place; and I feel like it was nice to have in the time it was needed.

<hr>

¹Games in Catalog or a Season — basically, stuff Panic can actually reasonably vet.

²Don't take that as a genuine complaint LOL, I genuinely do not mind; I just think it's really funny to word it like that.