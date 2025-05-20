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

The crank is the main control method for this game, though the A and B buttons can be used instead. The D-pad and A and B buttons are used to navigate menus. The use of the crank is relatively binary.

To switch control methods, open the Slide menu on the Title screen, and change the "control" setting. You can choose between "crank" and "buttons". When playing with the crank, you can choose between "crank", "crank (+90)", and "crank (-90)" play modes. These different modes will offset the 0º position of the crank as perceived by gameplay, so you can play with the console flat on a table for example.

Audio is quite important to gameplay — while the game can be played silently by a more experienced player, having an active audio output is recommended.

To adjust the starting BPM of gameplay, open the Slide menu on the Title screen, and change the "start bpm" setting. The default is 120. You can choose in increments of ±5 BPM from a minimum of 30, to a maximum of 170.

## Gameplay

During the game, your crank is separated into two "fields" — left, and right. When using the crank, cranking across the 0º or 180º boundaries will swap between them. When using buttons, pressing A or B will flip the sign to the left or right.

At certain points, cars will zoom in from either side of the screen. Depending on the car, a different warning cue will be provided to let you get ready to wave them through in the correct direction.

Scoring happens when the car passes you — if your sign is pointing in the correct direction, you'll gain a point. Otherwise, you won't gain a point, and will lose a life.

# Modes

## Normal Mode

Normal Mode is the basic gameplay mode in *Traffic Jam*.

In this mode, you have three lives. A life is lost whenever you don't wave a car through in the correct direction — indicated by a screen-shake and a skidding noise.

This mode starts out at your preset start BPM (defaults to 120). When you reach Level 5, every new round will increase the BPM by +10. For every 100 points you score, you'll gain a life (maximum of 3).

## Hardcore Mode

> 💡 *This Mode is only unlocked after scoring 100 or greater in Normal Mode.*

In Hardcore Mode, the default BPM is upped to +30 more than your preset (defaults to 150), and you also have only one life — miss any amount of times, and it's game over.

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
- [Achievements](https://playdatesquad.github.io/pd-achievements/) library — Playdate Squad
- Playtesters — Lav, ocean, xenwow, Lyman, PurpleMoustache, and Ledbetter
- Thanks — Tengu, Toad, 2DArray, Lav, and the rest of the Playdate Squad!

# Changelog

## Version 1.0.4
### 05.20.2025

- Floored car movement to prevent flashing of dither patterns
- Level end logic no longer plays out during game over sequence (which could result in boosted stats)
- Tweaked achievements slightly — instead of 50/100/250/500, score barriers are now 50/100/200/250 in both modes
- Fixed bug where slide menu options may persist upon entering the Credits screen
- Added "crank (+90)" and "crank (-90)" control options.

## Version 1.0.3
### 04.28.2025

- Added four new music tracks!
	- You can also choose between any or all of them from the Title screen
- Fixed bug where Tutorial would inherit custom BPM values
- Fixed leaderboards crash if number of score entries surpassed 5
- Added slower "start BPM" times, down to 30 BPM
- Adjusted speed-up behavior with external BPMs for better balancing
- Added default username check to the leaderboards screen
- Fixed leaderboards crash if you entered and exited the scene real fast
- Fixed possible crash if crank value equals "360"
- Updated achievements library to v1.0
- Added credit for achievements library

## Version 1.0.2
### 03.12.2025

- Added "start bpm" option to define a faster start, toggle-able from the Title screen
- Added button controls, toggle-able from the Title screen
- BPM will now start ramping up instantly in Normal Mode
- Added achievements! [Learn more here.](https://github.com/PlaydateSquad/pd-achievements)
- Fixed bug where extra lives would be awarded in Hardcore Mode
- Flipped button prompts on Game Over screen
- Added some more stuff floating alongside the clouds
- Added some different random skins for the cars
- Correctly read off points as "point" if there's only 1
- Hopefully fixed bug where Hardcore scores weren't sending properly?

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