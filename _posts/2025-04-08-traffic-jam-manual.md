---
title: Traffic Jam Manual
tag: traffic jam
desc: How to get started and guide those cars in style!
---
![Traffic Jam](/blog/images/2025-01-24-1.png)

## Synopsis

> Guide the traffic to the beat, don't get swept up off your feet.

Nebulous construction work's a tough job, and somebody has to manage the traffic going in and out. Luckily, you happened to be around when they were scrambling in a blind panic to find somebody who could do it! Can you master the new rhythm-based method of guiding these overzealous cars?

Traffic Jam is a fun endless rhythm game that exclusively uses the Playdate's crank. Watch out for four car types with distinct cue patterns, keep the beat (as well as you can, at least) while the tempo gets ever faster, and try to avoid a nasty collision! Features classic non-stop rhythm-action fun, in-depth statistics, and an unlockable Hardcore Mode to really test your skills.

# Gameplay Basics

## Controls

The crank is the main control method for this game. The D-pad and A and B buttons are used to navigate menus.

Audio is quite important to gameplay — while the game can be played silently by a more experienced player, having an active audio output is recommended.

## Gameplay

During the game, your crank is separated into two "fields" — left, and right. Cranking across the 0º or 180º boundaries will swap between them.

At certain points, cars will zoom in from either side of the screen. Depending on the car, a different warning cue will be provided to let you get ready to wave them through in the correct direction.

Scoring happens when the car passes you — if your sign is pointing in the correct direction, you'll gain a point. Otherwise, you won't gain a point, and will lose a life.

# Modes

## Normal Mode

Normal Mode is the basic gameplay mode in *Traffic Jam*.

In this mode, you have three lives. A life is lost whenever you don't wave a car through in the correct direction — indicated by a screen-shake and a skidding noise.

This mode starts out at approximately 120 BPM. When you reach Level 5, every new round will increase the BPM by +10. For every 100 points you score, you'll gain a life (maximum of 3).

## Hardcore Mode

> 💡 *This Mode is only unlocked after scoring 100 or greater in Normal Mode.*

In Hardcore Mode, the default BPM is upped to 150, and you also have only one life — miss any amount of times, and it's game over.

# On-line Capability

## About on-line play

This game connects to Playdate's on-line leaderboard API, to enable sending and receiving of high scores among players across the globe. To use on-line functionality in this game, make sure your Playdate has an active Wireless connection.

## Submitting your scores

To submit a new score to the global leaderboard, simply complete a game. When you reach the 'Game Over' screen, your score will be submitted to the proper leaderboard automatically.

> ⚠️ *Be careful — if you close out of the game without properly ending the round, your score won't be saved or submitted!*

## My score didn't send! What do?

If you obtained a new high score, but it didn't get sent up to the leaderboard, there are a few things you can try:

1. Give it a little time, and see if it sends up automatically.

2. Try playing another round — it doesn't need to be *yet another* new high score, but this might kick the OS' caching into high gear.

## Viewing global scores

You can view global scores using two primary methods:

1. Visit the *Traffic Jam* game page in your Web browser, at [play.date/games/traffic-jam](https://play.date/games/traffic-jam/). From here, you can view available scores in the Scoreboards section. You can see top 10 scores in every available board.

2. Enter the 'Leaderboards' menu within the game, accessible from the Title screen. When in this screen, you can use the A button to toggle between the Normal Mode and Hardcore mode leaderboards (if Hardcore Mode is unlocked). From here, you can see the top scores for the currently-highlighted board, as well as your own score and ranking (if available).

# Credits

- Art, code, music, and SFX — [Rae](https://rae.wtf)
- Cuberick and Nontendo fonts — [Panic](https://panic.com); [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)
- Transmit truck cameo — [Panic](https://panic.com)
- Playtesters — Lav, ocean, xenwow, Lyman, PurpleMoustache, and Ledbetter
- Thanks — Tengu, Toad, 2DArray, Lav, and the rest of the Playdate Squad!

# Changelog

## Version 1.0.2
### ???

- Added "start bpm" option to define a faster start, toggle-able from the Title screen
- Added button controls, toggle-able from the Title screen
- BPM will now start ramping up instantly in Normal Mode
- Added achievements! [Learn more here.](https://github.com/PlaydateSquad/pd-achievements)
- Fixed bug where extra lives would be awarded in Hardcore Mode
- Flipped button prompts on Game Over screen
- Added some more stuff floating alongside the clouds

## Version 1.0.1
### 02.25.2025

- Hardcore mode threshold increased from 50 pts to 100 pts
- BPM will now increase by +10 per level instead of +5
- Game will now award a life every +100 pts.
- Fixed a bug where having "react SFX" disabled would break the Tutorial mode
- Fixed visual issue on exit animation
- Added more save checks mid-play
- Player's global rank is now shown in leaderboards page
- Added some more music and SFX to leaderboards page
- Fixed a couple crashes on the leaderboards page
- Game now only refreshes screen when necessary
- Cars coming in from the different directions now have subtly different audio cues
- Fixed thing where the Sedan was slightly misaligned with the beat
- Lowered volume of level-complete "ding!"
- Polished up sign flip animation
- Added clouds to gameplay screen
- Renamed "Practice" to "Tutorial"
- Fixed kerning on capital S in small-text font
- Fixed timing issue with loading transitions

## Version 1.0.0
### 02.21.2025

- Initial playtesting release.

<br>
<a href="https://play.date/games/traffic-jam" class="button">Buy <i>Traffic Jam</i> in Catalog</a>