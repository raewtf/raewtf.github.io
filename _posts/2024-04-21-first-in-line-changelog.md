---
layout: article
title: First in... Line? Changelog
tag: first in... line?
desc: What's new?
---
## Version 1.0.0

- Initial release, for PlayJam 5.

## Version 1.1.0

- Added an Easy mode! This mode just adds onto the same pattern between rounds, in contrast to the previous standard mode (now "Hard mode") which give you an increasingly-long completely-randomized pattern each round. Scores are saved per mode — and your best score from v1.0.0 (if you've got one) will still be kept as your Hard mode score. Woohoo!
- Speaking of stats...added a "total misses" count, as well. I meant to, but just forgot.
- Added some more graphics to the game over screens! Also, added some randomized costumes and extra stage members inside the gameplay sequence. Keeps it interesting! I also added a quick "How to Play" segment inside the pause menu, just in case — plus, you can now back out to the title at any time from said pause menu, even during gameplay.
- Your character also now makes noise when you press correct buttons! Honk, honk, honk.
- Bunch of minor tweaks and fixes — adding wrapping paper to launcher, new itch.io page art, bumping the FPS up from 20 to 30, adding some misc. SFX I forgot, and showing the version number on the title screen for posterity.

## Version 1.2.0

- Added a timer to the "rehearsal scene" where you memorize your lines! In Hard mode, you get anywhere from 10 to 30 seconds (increasing as the game progresses) to memorize the line laid out before you. In Easy mode, there's no time limit imposed. Also, Hard mode has to be unlocked now — obtain a score of 10 or higher in Easy mode to access it! (If you crossed the threshold before, it'll be unlocked on start-up :3)
- Added... *[pause for ironic effect]* ...pause logic! If you go silent for too long, something will happen. In Easy mode, you'll get some stage direction from frame right. In Hard mode, however, wait around too long and you'll get heckled by some rude guy in the audience (+1 MISS). On that note, removed the 'MISS' text when you have no misses under your belt.
- Spruced up the look of a TON of stuff all around. New log assets, and new launcher stuff to match (and now there's even an exit animation — hooray, polish!), new hand-drawn curtains, beefed-up animations, and new variants for tons of things all around. Even cute roses when you win! Awww.
- Sped up the general game flow quite a bit, allowing you to totally biff a game embarrassingly early faster than ever. Also changed some timing so that your turn starts as SOON as the spotlight turns on. Before, it'd start a little bit after, and that caused some problems from what I've seen.
- Fixed a crash where a high score variable wasn't being updated properly. Thanx Paul!

## Version 2.0.0

- Added support for separate game modes, as well as two new ones!
	- Arcade Mode — the classic *First in... Line?* gameplay, same as it ever was.
	- One-Shot Mode — an unlockable; in this mode there are no hints or heckles, and you only get one miss per round.
	- Multi Mode — pass and *"play"* fun, optimized for 2 people to take turns on the stage!
- Shortened the time you gotta wait for hints and heckles to show up.
- You can now see missed inputs as whispers in your line. Now you'll never have to wonder what the hell you just pressed instead of what you meant to.
- More inputs were added to the game — cranking forwards, cranking backwards, docking, undocking, shaking the Playdate, and screaming into the microphone.
- Added a Settings menu, for changing game options.
	- Music and SFX are now toggle-able.
	- All new control inputs are toggle-able.
	- Credits screen has been moved in here, too.
- Bumped up the Hard difficulty threshold from 10 to 24 (completing an entire page in Easy).
- Changed the pause image to reflect new behavior.
<!--\- Added support for on-line leaderboards in Catalog -->

## Version 2.0.1

- Reduced sensitivity of console shaking to acceptable levels
<!--\- Catalog - removed debug print statements in High Scores scene-->

## Version 2.0.2

- Added directional arrows to title screen <!--and High Scores scene-->
- Reduced sensitivity of microphone input
- Fixed a bug where the One-Shot unlock toast wouldn't display properly
<!--\- Catalog - fixed leaderboards to scream at proper endpoints-->

<br>
<a href="https://stuffbyrae.itch.io/first-in-line" class="button">Buy <i>First in... Line?</i> on Itch.io</a>