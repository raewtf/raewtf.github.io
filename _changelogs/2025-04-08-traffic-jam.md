---
title: Traffic Jam Changelog
layout: manual
---
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