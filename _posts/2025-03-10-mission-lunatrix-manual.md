---
title: Mission LunaTrix Manual
tag: mission lunatrix
desc: How to get started and shred that lunar surface!
---
![Mission LunaTrix](/blog/images/2025-03-10-1.png)

## Synopsis

> One small ollie for man, one giant kickflip for mankind.

*"Captain's log: stardate...something-or-other. It's been about 3 days since the lander made a rather high-speed landing into the Moon's surface. My oxygen supplies are running low, my only possession that survived the crash is my trusty skateboard, and I need to find a way back home. ...Now, this might sound crazy—"* [END TRANSMISSION]

When you find yourself trapped on the surface of an unfamiliar terrain, there's only one thing that can bring you back to terra firma...*EPIC SKATE TRICKS*. Can you jump, grind and shred your way to escape velocity before time runs out? Mission LunaTrix is a radical sports-arcade game featuring innovative 3D terrain, plenty of strategy, and a bumpin' original soundtrack.

# Gameplay Basics

## Controls

The d-pad and crank are required to play this game. The D-pad and A and B buttons are used to navigate menus.

## Gameplay

Navigate the moon's surface, in search of opportunities to perform epic skate tricks. There are five types of objects you may encounter in your lunar venture:

- Craters — These are good! Hit 'em and launch into a jump.
- O2 Canisters — These are good! They replenish oxygen.
- UFOs — These are rad! Hit 'em and score bonus points.
- Flags — Fun collectible! I wonder who's been here?
- Rovers — These are bad! Hit one, and you get stunned.

Ramp off craters, rack up points, and make your way back home! Or at least, to another moon...

It's important to keep an eye on your oxygen levels. If they reach zero, you'll be rather...stranded. You can replenish oxygen by picking up O2 Canisters, or by escaping the current moon. Your O2 gauge will re-fill on every successful escape.

## Scoring

Ramping off of craters and performing tricks is key to your escape! When you're sent into the air, use the crank in tandem with the d-pad to pull off different moves. Advanced ones can score big points!

When you reach a high enough score threshold, you'll start flashing. This means you've got enough radical power charged up to escape the gravitational pull! Hit another crater, and you'll be launched to the next moon.

### Combos

When you successfully land from a jump, your combo meter will increase. Hit more jumps to rack up the multiplier and score MASSIVE points! There's no limit, so go wild! Your final score is displayed at the end.

If you skate around for long enough without hitting another crater, run into a rover, or get too overzealous with your tricks, your meter will reset back to x1.

# Modes

## Arcade Mode

In Arcade Mode, your goal is to hop from moon to moon, and survive for as long as you can without running out of oxygen. When you complete a level, your oxygen meter is replenished, and you're sent to a new moon with a different, randomly-generated layout.

For each new moon, you'll have less and less oxygen, and will require more and more points to be able to move on.

## Daily Orbit

In Daily Orbit, you get placed on a single moon — randomly-generated, but the same for everyone each day. Your goal is to rack up as many points as you can before your oxygen runs out.

You only get one shot at the Daily Orbit each day. Give the mode a try and see if you can best your friends (or your enemies)!

# On-line Capability

## About on-line play

This game connects to Playdate's on-line leaderboard API, to enable sending and receiving of high scores among players across the globe. To use on-line functionality in this game, make sure your Playdate has an active Wireless connection.

## Submitting your scores

The Arcade Mode and Daily Orbit both support global on-line leaderboards.

To submit a new score to a global leaderboard, simply complete a game. When you reach the end results screen, your score will be submitted to the proper leaderboard automatically.

> ⚠️ *Be careful — if you close out of the game without properly ending your run, your score won't be saved or submitted!*

## My score didn't send! What do?

If you obtained a new high score, but it didn't get sent up to the appropriate leaderboard, there are a few things you can try:

1. Give it a little time, and see if it sends up automatically.

2. Try playing another round — it doesn't need to be *yet another* new high score, but this might kick the OS' caching into high gear.

## Viewing global scores

You can view global scores using two primary methods:

1. Visit the *Mission LunaTrix* game page in your Web browser, at [play.date/games/mission-lunatrix](https://play.date/games/mission-lunatrix/). From here, you can view all available scores in the Scoreboards section. You can see top 10 scores in every available board.

2. Enter the 'Scoreboards' menu within the game, accessible from the Title screen. When in this screen, you can use the A button to toggle between the Arcade Mode and Daily Orbit leaderboards. From here, you can see the top scores for the currently-highlighted board, as well as your own score and ranking (if available).

The Daily Orbit leaderboard refreshes automatically at 00:00 midnight GMT, clearing all scores from the past day. When viewing scores in-game, there's also a handy timer to tell you when the boards will be cleared.

## User Icons

In *Mission LunaTrix*, you have the ability to set a custom user icon, which appears alongside your score in scoreboards.

To set a user icon, press B on the Title screen, and use the crank to preview the options. Press A to choose your favorite! Your icon will be updated on the leaderboards page next time you submit a new high score to the board.

# Credits

- Art, code, and music — [Rae](https://rae.wtf)
- SFX — [pixabay.com](https://pixabay.com/); [License](https://pixabay.com/service/terms/)
- Tubular V/O — [Jordan Carroll](https://jordancarroll.com); [CC0](https://creativecommons.org/public-domain/cc0/)
- Cutout City font — [Hawtpixel](https://www.hawtpixel.com); [License](https://hawtpixel.com/Hawtpixel%20Font%20License%20-%20650%20Font%20Bundle.pdf)
- Pedallica and Bitmore fonts — [Panic](https://panic.com); [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)
- [Achievements](https://playdatesquad.github.io/pd-achievements/) library — Playdate Squad
- Playtesters — dennens, Alex, Scenic, Soinksters, Steven, Toad, and Kirkpad
- Thanks — Toad, Dimitri, Jex, John, Rob, Voxy, Mag, Tengu, Axo, freds, and 2DArray!

# Changelog

## Version 2.0.0
### 06.24.2025

- Added "Daily Orbit"! Just one shot at a seeded moon, every day
	- The original gameplay from the jam version has been renamed to "Arcade Mode"
- Added on-line leaderboards! Available exclusively in the Catalog version.
	- Added boards for Arcade Mode and Daily Orbit
	- Added user icons! Press B from the title screen to customize yours.
- Fixed bugs where scores and save data would not get...saved
- Tweaked randomized level generation to guarantee at least some craters
	- New objects will also be at least one unit of space apart from each other
- O2 and rover spawn ability is now determined by weighted random seed
- Player starting speed and jump length now based on random seed
- Added some tubular V/O, courtesy of Jordan Carroll. Thank you!
- Added "How to play" section that tells you what to do
- Added achievements! [Learn more here.](https://github.com/PlaydateSquad/pd-achievements)
- Added flags (just for fun!) and UFOs (rare score bonus!) to the play field
- Added an ollie mechanic, accessible by pressing Up on the d-pad
- Added escape progress indicator along the bottom edge
- Souped up all the music to be more jammy
- Changed the names of the performable tricks to be more fantastical
- Re-worked player tile alignment to make more sense (hopefully means less collision slips, too)
- Added a radical-looking new sidebar while doing tricks
- Added "Performance" option that knocks down some visual quality
	- Stock visual quality is a bit higher now, too
- Added optional radar to display select objects before they appear over the horizon
- Spaced out the "bitmore" font a bit in-game, and added an outline.
- Added "Spin Camera" option to toggle camera rotation during tricks
- Drew up some new, more animated skater sprites
- Added mid-game pause image
- Fixed possible crash caused by moving away from the title real fast, then hitting buttons
- Added more tricks for cranking counter-clockwise
- Fixed bug where score readouts weren't properly calculated
- Added slide menu items in most-all of the menus
- Added instant "end game" button mid-game, in the slide menu
- Low O2 audio indicator now starts sooner
- Added a pulse effect to low O2 and performing tricks
- Re-formatted game over screen, and added sounds
- Added a dynamic shadow under the skater
- Added lerped slowdown when you crash into a game over state
- Starting speed is slower, points threshold starts lower, O2 level starts higher
- O2 Canisters replenish more oxygen, from 1.2x current levels to 1.5x
- Added "Skip cutscene" option
- Added cool pseudo-random moon names
- Hitting rover now destroys your combo instantly
- Added slight cooldown between tricks. Land during this, and you'll CRASH!!
- Credits screen is now more readable
- Fixed bug where crank could still be used to travel through menus, even when moving to a new scene
- Made objects on moon animate more smoothly
- Each round will display the current round at the start
- Made exit animation display at any time, even mid-game
- Added "Use the Crank!" prompt at the start of the game
- Added some more oomph to the turning radius
- Added "orchestra hit" launch sound
- Title screen now remembers your last selection
- Added commas to numbers
- You now lose some speed when crashing after a jump
- Trick "hit!" sound increases pitch in a more pleasing way
- Fixed bug where you could false-trigger buttons while transitioning between menus
- Added iris into the interstitial scene

## Version 1.0.0
### 03.10.2025

- Initial release, for PlayJam 7.

<br>
<a href="https://play.date/games/mission-lunatrix" class="button">Buy <i>Mission LunaTrix</i> in Catalog</a>