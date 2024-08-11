---
title: First in... Line? Changelog
tag: first in... line?
desc: What's new?
visible: 0
---
## Version 2.2.1

### Coming to Catalog soon

- Timed Mode - capped timer at 60 seconds maximum
- Timed Mode - added logarithmic scale to timer progression
- Hard Difficulty - fixed some timing bugs relating to moving back to title screen
- Multi Mode - hopefully fixed a bug that wouldn’t re-set player position properly

## Version 2.2.0

### July 1st, 2024

- New Mode — "Timed Mode"! You're on the clock; get as far as you can before time's up.
- Fixes and adjustments to controls
	- Mic input is now less sensitive
	- Crank input deadzone was adjusted, to make switching directions easier
	- Consecutive cranking in one direction will now only count as a max of one input
- Meta adjustments
	- Barrier to unlock Hard difficulty has been reduced from 24 score to 21 (a full page of lines)
	- Barrier to unlock One-Shot mode has been reduced from 10 Arcade plays to 5
	- The game will attempt to send an on-line score on game over, regardless of if the obtained score is a new high.
	- Your score (if applicable) is now shown in rehearsal as what Act you're on (current score plus one)
	- Locked modes now appear in the Title screen, with instructions on how to obtain them.
- Bug fixes & tweaks
	- SFX button in Settings had its corresponding sound flipped from the actual setting
	- Removed some extra fonts that weren't being used in game
	- Added some memory optimization to prevent piled-up garbage
	- Removed some extra white-space in the Buttony font
	- Removed the "Miss" graphic in One-Shot Mode
	- Moved the timer graphic down in Multi Mode (Hard), so it won't get obscured by the banner
	- Removed version read-out from the Credits screen
	- In Multi Mode's end screen, the "back to title" slide menu option was accidentally labeled "to settings"
	- "back to title" in-game pop up is disabled if the scene is currently transitioning
- Misc.
	- Lowered score barrier for a "good ending" image in the Game Over screen
	- Added game manual nudge to Settings screen
	- Added an extra screen in Multi Mode, prompting the player to pass the console
	- Added cast members: "tree", "wet floor", "frog", "bubbles", "sunglasses", "dog", "cat", "rowbot", "cast", "horse"
	- Added costumes: "magician", "bowtie", "trick glasses", "sunglasses", "baseball", "propeller", "queen"
	- Removed cast members: "airplane" and "argument"

## Version 2.1.0

### June 18th, 2024

- First version release in Catalog!
- Dampened the punishment for an erroneous dock/undock. Now, either action provides a maximum of one miss between correct dock/undock inputs.
- Added default username check when fetching leaderboards
- Added results images for Multi Mode. Honestly a complete oversight.
- Re-enabled crank docking SFX.
- Added controls indicators to leaderboards & scores.
- Bugsmash: In Hard Mode, the timer will now pause if you trigger the Back to Title prompt, instead of continuing in the background.
- If a scene transition happens while the Back to Title prompt is open, the game will now patiently wait until and unless you hit "Keep Playing" to trigger the transition.
- In Multi Mode, the music will now fade properly when starting a new game from the results.
- Fixed brief "Player 2 Wins!" display bug in Multi Mode's results, as well.
- Adjusted directional arrow behavior in the title screen.

## Version 2.0.2

### May 21st, 2024

- Added directional arrows to title screen and High Scores scene
- Reduced sensitivity of microphone input
- Fixed a bug where the One-Shot unlock toast wouldn't display properly
- Catalog - fixed leaderboards to scream at proper endpoints

## Version 2.0.1

### May 17th, 2024

- Reduced sensitivity of console shaking to acceptable levels
- Catalog - removed debug print statements in High Scores scene

## Version 2.0.0

### May 15th, 2024

- Added support for separate game modes, as well as two new ones!
	- Arcade Mode — the classic *First in... Line?* gameplay, same as it ever was.
	- One-Shot Mode — an unlockable; in this mode there are no hints or heckles, and you only get one miss per round.
	- Multi Mode — pass and *"play"* fun, optimized for 2 people to take turns on the stage!
- Shortened the time you gotta wait for hints and heckles to show up.
- You can now see missed inputs as whispers in your line. Now you'll never have to wonder what the hell you just pressed instead of what you meant to.
- More inputs were added to the game — cranking forwards, cranking backwards, docking, undocking, shaking the Playdate, and screaming into the microphone.
- Disabled crank docking SFX.
- Added a Settings menu, for changing game options.
	- Music and SFX are now toggle-able.
	- All new control inputs are toggle-able.
	- Credits screen has been moved in here, too.
- Bumped up the Hard difficulty threshold from 10 to 24 (completing an entire page in Easy).
- Changed the pause image to reflect new behavior.
- Added support for on-line leaderboards

## Version 1.2.0

### May 1st, 2024

- Added a timer to the "rehearsal scene" where you memorize your lines! In Hard mode, you get anywhere from 10 to 30 seconds (increasing as the game progresses) to memorize the line laid out before you. In Easy mode, there's no time limit imposed. Also, Hard mode has to be unlocked now — obtain a score of 10 or higher in Easy mode to access it! (If you crossed the threshold before, it'll be unlocked on start-up :3)
- Added... *[pause for ironic effect]* ...pause logic! If you go silent for too long, something will happen. In Easy mode, you'll get some stage direction from frame right. In Hard mode, however, wait around too long and you'll get heckled by some rude guy in the audience (+1 MISS). On that note, removed the 'MISS' text when you have no misses under your belt.
- Spruced up the look of a TON of stuff all around. New log assets, and new launcher stuff to match (and now there's even an exit animation — hooray, polish!), new hand-drawn curtains, beefed-up animations, and new variants for tons of things all around. Even cute roses when you win! Awww.
- Sped up the general game flow quite a bit, allowing you to totally biff a game embarrassingly early faster than ever. Also changed some timing so that your turn starts as SOON as the spotlight turns on. Before, it'd start a little bit after, and that caused some problems from what I've seen.
- Fixed a crash where a high score variable wasn't being updated properly. Thanx Paul!

## Version 1.1.0

### April 21st, 2024

- Added an Easy mode! This mode just adds onto the same pattern between rounds, in contrast to the previous standard mode (now "Hard mode") which give you an increasingly-long completely-randomized pattern each round. Scores are saved per mode — and your best score from v1.0.0 (if you've got one) will still be kept as your Hard mode score. Woohoo!
- Speaking of stats...added a "total misses" count, as well. I meant to, but just forgot.
- Added some more graphics to the game over screens! Also, added some randomized costumes and extra stage members inside the gameplay sequence. Keeps it interesting! I also added a quick "How to Play" segment inside the pause menu, just in case — plus, you can now back out to the title at any time from said pause menu, even during gameplay.
- Your character also now makes noise when you press correct buttons! Honk, honk, honk.
- Bunch of minor tweaks and fixes — adding wrapping paper to launcher, new itch.io page art, bumping the FPS up from 20 to 30, adding some misc. SFX I forgot, and showing the version number on the title screen for posterity.

## Version 1.0.0

### April 20th, 2024

- Initial release, for PlayJam 5.


<br>
<a href="https://play.date/games/first-in-line" class="button">Buy <i>First in... Line?</i> in Catalog</a>
