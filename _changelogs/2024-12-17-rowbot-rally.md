---
title: RowBot Rally Changelog
layout: manual
---
## Version 1.1.0
### 10.14.2025

- Added "absolute crank" accessibility option — the boat will steer wherever the crank is pointing.
	- On-line leaderboards are disabled when this option is turned on.
- Added Speedrun — "boss rush" mode, unlockable by completing a save file on all four circuits.
	- Added on-line leaderboards for this mode. Check the webpage!
- Added Robo-Shark+ — endless version of the shark chase, unlockable by passing that point in the Story.
	- Added on-line leaderboards for this mode. Check the webpage!
- Added achievements! [Learn more here.](https://github.com/PlaydateSquad/pd-achievements)
- Updated the shark chase:
	- Added a progress bar
	- Progress now varies depending on circuit
	- Added a more apparent health meter
- Performance Mode will now turn on automatically when the device is connected to Playdate Mirror.
- Added Theater — view cutscenes at your leisure. Unlockable by completing the story at least once.
- Compressed cutscene videos — now the bundle is nearly a whole 10 MBs lighter!
- Added 'match pace' marker to the Power Meter, to make syncing movement with your RowBot easier.
- "Sending failed!" UI should now only occur once per session.
- UIs will also not interrupt during an active race
- Boat will now no longer re-start if the race is DQ'd immediately after a beach
- Adjusted some wording here and there
- Optimized minimap a little bit
- Wave now animates properly in Options screen
- Fixed softlock that would occur by leaving at a specific time during the race intro

## Version 1.0.2
### 12.19.2024

- Re-balanced CPUs in Story Mode
	- Shorebreak and Twitcher in Circuit 4 are now opportunists
	- Final stage was WAY too hard in all circuits. Sorry!
	- All CPUs slowed down just a touch
- Added contingency for memory issue where "bakedboat" would return nil
- Fixed collision bug where hitting checkpoints, power-ups, or the Finish line might not have counted
- Disqualifying during a leap will no longer cut off the boat visually
- Disqualifying during a beach will no longer start the boat back up afterwards
- Pop-up UI should now respect draw offset
- Removed the wave in Paddle Beach. It was creating more issues than it was solving
- Boat's turning effect is slightly lessened during boosts (Boost Pads and Rocket Arms)
- Added dithering to RowBot Rally logo in the Credits scene
- Added rate-limit to the Time Trials leaderboards, to prevent display edge cases.
- 10th place in the leaderboard no longer draws *juuust* off-screen
- Fixed bug where locking the device in the Time Trials scene would flip the display horizontally
- Fixed bug in Stage 3 mirror mode where the sunglasses would be misaligned. Radical.

## Version 1.0.1
### 12.17.2024

- Fixed wonky text formatting in Credits sequence
- Fixed bug where viewing Credits from title screen after beating the game would accidentally affect save files.
- Fixed wonky fade-out behavior when skipping Credits
- Compressing parallax in Stage 7 to avoid memory issues
- Fixing some boat 'beaching' logic
- Moved the finish line to a spot that makes more sense in Stage 4
- Flipped "Flawless" and "Speedy" medal positions in Time Trials scene
- Slide menu items should not be available to select when the scene is transitioning anymore
- Cranking in menus should be more stable during scene transitions
- Adjusted wording of "Favorite stage" in Stats to be more consistent

## Version 1.0.0
### 12.17.2024

- Initial release.

<br>
<a href="https://play.date/games/rowbot-rally" class="button">Buy <i>RowBot Rally</i> in Catalog</a>