---
title: Demo Update, and Recent Happenings!
tag: rowbot rally
desc: What's new in the world of RowBot?
---
# Howdy!

It's rae again! Happy Monday! Before I get into the meat of this post, I just wanna talk about how much I appreciate all of the support that this game's been getting, both in general and especially since the launch of the demo! I've gotten so much good feedback, bug reports, and all that jazz, and it's frankly all been really exciting to experience. To think that people are actually as pumped to see my game come to fruition as I am to make it is pretty radical. Thank you all so much!!

![](/blog/images/2023-10-10-1.png)

Anyway, I'm here because I've got a couple of pieces of news to share; a new update as well as some recent developments from the past month or so! Let's start with the thing that affects you right now...

# New Demo Update!

Yup, as of TODAY there's a new version of the demo build available to download! While there's no new *content* available here (naturally), there's a whole slew of bug fixes and updates and little tweaks to hopefully make your experience that much better, both right now as well as after the game comes out. What kind of stuff, you ask? Well, here's a handy change log!

## Demo v0.2.0

### Added

- Accessibility Settings! — New gameplay tweaks and toggle-able options to hopefully make this game more playable by everybody. These can be found in Options > Accessibility.
	- D-pad Controls — Play the game using controls adapted for buttons only, instead of the crank. Pressing d-pad up will increase your rowing power, and holding d-pad Down will decrease it.
	- Auto-Skip — This option skips any non-essential parts of the game, such as the tutorial, any cutscenes, and later on, the credits.
	- Row Sensitivity — This adjusts how hard you need to row to match pace with, or overtake, your RowBot. This affects the standard crank controls, as well as the d-pad controls, if enabled.
	- Power Flip — A simple cosmetic change that flips the Power Meter, if you prefer it that way. This has no effect if Pro UI is enabled.

### Changed

- Options Rebuild! — The Options menu has been rebuilt from the ground up. This makes it waaay more cromulent both under and over the hood, and also suits the new Accessibility menu quite well.
- Pro UI Move — The "Pro UI" toggle has been moved into the Accessibility sub-menu of the Options. You can still change it quickly mid-race, through the slide menu!
- On-again, Off-again — There's now some new better-looking graphics for on/off toggles in the Options. Instead of just text, now there's a neat animated little graphic. Hooray!
- Race Tweak — Adjusted the default rowing speeds just a touch, in order to suit the new Accessibility options like the Row Sensitivity.
- Dizzied Out — Removed a slightly-secret thing where steering really fast would make the reaction images go dizzy. This was causing some unintended problems (see Fixed no. 1), though I'd like to re-add this a bit later on if I can figure out a better way to pull it off.
- Title Tweaks — Adjusted how the "Start!" screen works a tad. Now, hitting A before the logo fully finishes animating in won't cause a harsh jump up. Polish, polish, polish!
- Crash, Dummy! — Crashing sounds now play at a slightly-variable rate, instead of the same one all the time.

### Fixed

- Reactions React — The reaction images in the Power Meter now properly react when crashing into a wall.
- Collision Course — Retooled the collision system during a race, which should hopefully quell some rare-ish issues where sometimes you'd be sent into a wall, instead of out of it. Thanks to scratchminer and Toad for helping me out with this, as always. Collisions suuuck, and I vow never to collide with anything again.
- The Most Important White Chunk In The World — The little description blockquote-block thing in the race intro now appears as it's supposed to. I was just forgetting to set the color to white properly, my bad.
- Point and Click — The guiding arrows in the Tutorial will now disappear when you crash for the first time. Before, the arrows would cover up the A button prompt on the guide UI, which is what we in the industry call a Big Whoopsie™.
- Wake for it... — Fixed a small visual bug which was preventing the "full left-turn" wake image from appearing properly. It was just some totally stupid elseif troubles, and a thing was triggering before another thing causing the thing that I wanted to happen to not happen. GREAT STUFF ALL AROUND! Thanks Voxy for helping me snipe that one.

### Changed, not that you'd know...

- Save Indicator! — A little indicator appears in the top-left corner any time the game's writing data to disk. This has no bearing in the demo, where there's not really any data to save. Before, I was editing saves during the middle of gameplay, and only committing them to disk when the user closed the game. This wasn't really effective in the event of, say, a crash, where the game wouldn't have a chance to save while bailing out. Oops, lost progress! That should hopefully be quelled now.
- Delete, Deleted — The "Reset Data" setting in the Options menu has been removed. Doesn't matter in the demo for obvious reasons, but I realized that this button was probably a little redundant/confusing in the end. In the future, if you'd like to clear all data in the final game, you can do so from Playdate's system Settings. You can also start a new game without clearing all of your other progress such as best times or unlocks.
- Splash Text — The title screen now has splash texts at the top, after your first time logging in. Well, not in the demo — I dunno whether it's your first time playing or your hundredth. (Why would you play one demo that much?!) So, this is a final-game-only thing, at least for now...but they'll be arguably funny, I promise.

That all being said...if you find a bug, or you have a piece of feedback, please let me know! There are email links on the main page of this game, but you can also contact me over Mastodon or my Discord, if you've got it. Anyway, with the change log out of the way, let's see what else has been going on in the world of RowBot!

# IGDA Twin Cities!

Towards the end of September, the game demo was featured in the IGDA Twin Cities Playtest stream! I'd like to thank Mark LaCroix, and everybody at [Noble Robot](https://noblerobot.com/) and the [IGDA Twin Cities chapter](https://igdatc.org/) for letting me join, it was an absolute blast seeing people try my game live, the whole way through, for the first time. If you wanna check out the stream, there's a replay here on YouTube (originally aired September 20th, 2023):

<iframe class="image" width="560" height="315" src="https://www.youtube.com/embed/_XBWTnATILI?si=wnfViDx-PSLjJNs4&amp;start=3046" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

One thing about the playtesters' experiences that really surprised me...this game was HARD. Like, *pretty dang hard*. I learned that I've succumbed to a type of "developer bias" — I've (of course) been with my game, hand in hand, over the entire course of its development. So, since I know all the bits and bobs, I think it's pretty easy to control. I've gotten used to it! The folks who have never tried or even seen this game before, respectfully...were crashin' into walls a LOT more than I'd expected hahaha. It definitely makes me think I'll need to tweak some stuff and see if i can make the control scheme any easier to get a crank on, since the difficulty level from the perspective of a new player really blew me away frankly.

The good news, is that (at least from what they were saying), it seems like a *good* kind of hard. Like, that specific point of difficulty where you feel like it's not the fault of the game for controlling poorly but instead the fault of you for not having a good enough grip on the controls — I think in the industry, this is called 'The Foddy Zone'. I hope I can play into that kind of difficulty for the later parts of the game, but for the first course it definitely might be way too much. IT'S A LEARNING EXPERIENCE FOR THE AGES!!

# Playdate Community Direct!

Oh yeah, last week(!) my game was also featured in [Tiny Yellow Machine](https://youtube.com/@tinyyellowmachine)'s Playdate Community Direct!! The trailer featured is up on this game's main page, but I highly encourage you to check out the full direct replay on YouTube, featuring a TON of really really rad Playdate games in-development! (originally aired October 5th, 2023):

<iframe class="image" width="560" height="315" src="https://www.youtube.com/embed/xoV-zXigJtg?si=0z2JYP4kUgrPQOWY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Thank you to Gant for hosting this entire thing! Myself and many others are very happy to come together and see what the Playdate community is up to lately. I'd also like to thank [Toad](https://toadleyundercontrol.itch.io/) for helping me out with editing together the trailer! I was really toeing the deadline and frankly dreading having to fire open the video editing software, so you really saved my tail here. Also, shoutouts to everybody in the direct's live chat who almost-immediately started hyping my game up as soon as it came on screen!! That was REALLY awesome to see, and it frankly put quite into perspective the amount of excitement that my silly little boat game is stirring up.

# That's all for now!

Okay, back to work for me! I've been busy with a LOT of other stuff lately (quite a few things of mine were shown off in that very same community Direct, actually!), so I dunno exactly when I'll be back with more RowBot news to share. Make sure to keep tabs on my [Mastodon](https://mastodon.gamedev.place/@rae) page, as well as [the devlog thread in the Playdate Squad Discord server](https://discord.com/channels/675983554655551509/1095159609620185240) for more frequent (if small and oft-off-topic) updates on the game if you're interested! Until next time, though: Sea ya later!