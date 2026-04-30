---
title: HEXA Manual
tag: hexa
desc: How to get started and conquer the universe!
---
![HEXA](/blog/images/2024-07-30-1.png)

## Synopsis

> Board the helm of Starship HEXA, and conquer the universe the only way you know how: shapes.

You're the commander of Starship HEXA, the head of a space fleet dead-set on taking over the universe. You're well on your way to assuming control of everything that is and shall be, but your attack methods are a bit...unorthodox. We can't dwell on it for too long, though, so get out there and match those hexagons!

HEXA is a unique, quick to pick up, and super fun logic puzzle game based on everybody's favorite polygon. Try for a high score in Arcade Mode, take on the dynamic Daily Run; or conquer dozens of unique challenges in Mission Mode! See if you can't conquer the HEXAPLEX, wrangle those Power-ups, and maybe even become ruler of the universe along the way.

Give it a try... it's *HEXA-good!*

# Gameplay Basics

## Controls

A set of Directional and Action buttons are required to play this game. These buttons are used to navigate menus, and are mandatory in main gameplay.

On personal computers, you can use the keyboard (which defaults to Arrows & Z + X), or a compatible gamepad (d-pad & A + B/X + O). During an active game, the pause menu can be accessed by pressing ESC/Start/Options. Otherwise, pressing any of those buttons twice in succession will quickly exit the game.

On Playdate, you can also optionally use the crank to perform the turning action usually done by the Action buttons — this can be toggled in the Options menu. (The crank can also be used to navigate menus.)

## Gameplay

When you start a new game, you'll be faced with the HEXAPLEX — a grid of 19 tris (dark, dithered, or light), all interlaced with one another. Your goal is simple: create HEXAs!

Use the Directional buttons to navigate your Cursor along the HEXAPLEX, and the Action buttons (or, on Playdate, the crank) to rotate the currently-selected hexagon clockwise or counter-clockwise — this is called a Swap.

A full hexagon of similarly-colored tris is called a HEXA. These are the main way to earn points — create a HEXA match, and BOOM!! You gain points, and the tris involved are randomized and replaced.

As far as basic gameplay is concerned...that's all you gotta know to get started! But, depending on the mode you're playing, there are a few more things you need to learn...

# Modes

## Arcade Mode

Arcade Mode is the basic gameplay mode in *HEXA*.

In this mode, you start out with 45 seconds on the clock. As you match HEXAs, you'll earn points, as well as more time on the timer! Your goal is to match as many HEXAs, and thus, earn as many points, as you can before time runs out. Light tris earn you 100 points, dithered tris earn you 150 points, and dark tris earn you 200 points.

There's another element to this mode to keep you on your toes: randomly-generated Power-ups! These do various different things when matched:

- Bombs — If matched into a HEXA, the whole HEXAPLEX gets "blown up" and replaced with a new, randomized set of tris.
- 2x tris — When matched into a HEXA, you'll earn double points for that match! Plus, a bigger timer boost.
- Wild tris — These tris can be used in place of any other color when creating a HEXA. No penalty nor reward.

Power-ups will not stack up with themselves. For example, if you have multiple 2x tris in a match, you'll still only receive one bonus. However, Power-ups *will* stack with eachother — if a match contains a 2x tri and a Bomb, for example, you'll get double points *and* re-shuffle the entire board.

You can also score HEXA Combos — if you match a HEXA, and the resulting grid contains another HEXA, BOOM!! You'll get double the points for that match! This stacks exponentially up until you reach a board state without an immediate HEXA. These are mostly luck-based, but it's possible to create them intentionally if you really know what you're doing.

As you earn more HEXAs, the timer boost will gradually become less and less effective. See how long you can keep it rolling!

The game will end when the timer reaches zero. If you wanna end it early, open the Pause menu and select "End Game". The game will end from the current point, and any high scores will be saved.

## Chill Mode

Chill Mode is a more relaxed experience, meant for casual play.

In this mode, there's no score-keeping, Power-ups, or timers. The goal is just to chill out, and have a good time creating HEXA matches at your own pace!

To end the game, open the Slide menu and select "I'm Done!" to wrap up.

## Daily Run

Daily Run plays a lot like Arcade Mode, but with one big catch: you only get one shot per day!

In this mode, the board is *seeded* — every day, you play with the same starting layout as everyone else. From here, it plays just like Arcade Mode!

When you end the game, you won't be able to play again until tomorrow. The Daily Run refreshes automatically at 00:00 midnight GMT, after which you'll be able to play another run with a new layout.

> 💡 *There's also a handy timer on the Title screen to let you know when the next run will appear!*

## Hard Mode

From the Options menu, you can toggle an optional "Hard Mode" that affects Arcade Mode and Daily Run. This mode will cut the amount of time you earn from HEXA matches in half!

> 💡 *Hard Mode has separate on-line leaderboards on Playdate. Compete for a high score!*

# Mission Mode

In Mission Mode, 50 logic challenges await you! These are grouped into four distinct types:

- Picture: In this mode, there are no HEXAs! Perform Swaps from a random state to try and create the given picture in as little Swaps as possible.
- Time Attack: This plays like Arcade Mode, except...you get no time bonus for HEXAs! See how much of a score you can nab in the time allotted!
- Logic: From a determined starting layout, try and clear the condition using as little Swaps as possible! No time limit or pressure.
- Speedrun: These play like Logic Missions — complete the clear condition — but instead of Swaps, do it as fast as you can!

A new Mission will unlock as soon as you clear the latest. On Playdate, if you're ever feeling stuck, open the Slide menu to get another look at your objective.

> 💡 *On Playdate, in Picture Missions, the Slide menu will also show the picture you're trying to re-create!*

# Custom Missions

Keep the fun going with custom Missions! Accessible from the Mission Mode menu, additional user-created Missions can provide infinite world-conquering content.

## Creating Custom Missions

Follow these steps to create your own custom Missions!

For personal computers:

1. Launch HEXA, and enter the Mission Mode menu.

2. From here, press the on-screen command for *Mission Command* — this is where you can create your own custom Missions.

3. From here, you can select from one of the four Mission types: Logic, Picture, Speedrun, or Time Attack. Depending on the Mission type you choose, you may need to define a few more settings.

For Time Attack Missions, please define a time limit (from 5 to 60 seconds), and a random seed (numbers only, max. 10 characters) for HEXAPLEX generation. On the next screen, you'll get a chance to review your generated HEXAPLEX before continuing.

For Logic or Speedrun Missions, please define a clear goal — a specific color of tri, a specific Power-up, or clearing the entire HEXAPLEX.

4. When you've defined your settings, select "Start Editing"! On the next screen, you can define your HEXAPLEX layout. Use the Directional buttons to hover over a tri, select it with the primary Action button, and use the prompt to define the color and Power-up of the given tri (if available). For Logic and Speedrun Missions, this step will be used to determine the starting layout of the HEXAPLEX. For Picture Missions, this step will be used to determine the ending layout, which will be randomly shuffled upon export to make the starting layout.

5. When you're ready, press the on-screen command to export! This will take you to a new screen to make some final touches. For Picture Missions, you'll need to give a name (max. 10 characters) to your object. You'll also need to define an author name (max. 10 characters) for your Mission. When you're ready, hit "Export"!

6. To access your newly-created Mission, press the primary Action button on the "Export Complete!" screen to open the custom Mission directory in your file explorer.

For Playdate:

1. Launch HEXA, and enter the Mission Mode menu.

2. From here, open the Slide menu, and select "create". This will take you into *Mission Command*, where you can create your own custom Missions.

3. From here, you can select from one of the four Mission types: Logic, Picture, Speedrun, or Time Attack. Depending on the Mission type you choose, you may need to define a few more settings.

For Time Attack Missions, please define a time limit (from 5 to 60 seconds), and a random seed (numbers only, max. 10 characters) for HEXAPLEX generation. On the next screen, you'll get a chance to review your generated HEXAPLEX before continuing.

For Logic or Speedrun Missions, please define a clear goal — a specific color of tri, a specific Power-up, or clearing the entire HEXAPLEX.

4. When you've defined your settings, select "Start Editing"! On the next screen, you can define your HEXAPLEX layout. Use the d-pad to hover over a tri, select it with the A button, and use the prompt to define the color and Power-up of the given tri (if available). For Logic and Speedrun Missions, this step will be used to determine the starting layout of the HEXAPLEX. For Picture Missions, this step will be used to determine the ending layout, which will be randomly shuffled upon export to make the starting layout.

5. When you're ready, open the Slide menu and select "export"! This will take you to a new screen to make some final touches. For Picture Missions, you'll need to give a name (max. 10 characters) to your object. You'll also need to define an author name (max. 10 characters) for your Mission. When you're ready, hit "Export"!

## Importing Custom Missions

Follow these steps to import custom Missions!

For personal computers:

1. Launch HEXA, and enter the Mission Mode menu.

2. Press the on-screen command to enter the custom Missions list.

3. Once you're there, press the on-screen command to open the custom Mission directory in your file explorer.

4. Drop your custom Mission JSON file(s) straight into this folder. Don't put 'em outside, or within any sub-folders!

5. Re-start the game, enter the Mission Mode menu, and press the on-screen command to enter the custom list. If your Missions got imported correctly, you should see them listed here in date order!

For Playdate:

1. Access Data Disk Mode on your Playdate by following [these steps](https://help.play.date/games/sideloading/#data-disk-mode).

2. Navigate to <span class="code-span">Data/wtf.rae.hexa/missions</span>.

3. Drop your custom Mission JSON file(s) straight into this folder. Don't put 'em outside, or within any sub-folders!

4. Exit Data Disk Mode, launch HEXA, and enter the Mission Mode menu.

5. From here, open the Slide menu, and enable "custom". If your Missions got imported correctly, you should see them listed here in date order!

> 💡 *If you've sideloaded your copy of HEXA, you can still play with custom Missions, but your save data will be in a different place! Look for the same folder within Data, but prepended with "user.XXXX.".*

# On-line Capability

## About on-line play

This game connects to Playdate's on-line leaderboard API, to enable sending and receiving of high scores among players across the globe. To use on-line functionality in this game, make sure your Playdate has an active Wireless connection.

> ⚠️ *HEXA for personal computers does not connect on-line, or transmit high scores.*

## Submitting your scores

The Arcade Mode and Daily Run both support global on-line leaderboards. You're not the only one competing for the universe — go for the top spot!

To submit a new score to a global leaderboard, simply complete a game. When you reach the end results screen, your score will be submitted to the proper leaderboard automatically.

> ⚠️ *Be careful — if you close out of the game without properly ending your run, your score won't be saved or submitted!*

## My score didn't send! What do?

If you obtained a new high score, but it didn't get sent up to the appropriate leaderboard, there are a few things you can try:

1. Give it a little time, and see if it sends up automatically.

2. Try playing another round — it doesn't need to be *yet another* new high score, but this might kick the OS' caching into high gear.

3. Try checking the scoreboards in-game (see below), which will attempt to send a "fake score" and bump the cache.

## Viewing global scores

You can view global scores using two primary methods:

1. Visit the *HEXA* game page in your Web browser, at [play.date/games/hexa](https://play.date/games/hexa/). From here, you can view all available scores in the Scoreboards section. You can see top 10 scores in every available board.

2. Enter the 'High Scores' menu within the game, accessible from the Title screen. When in this screen, you can use the A button to toggle between the Arcade Mode and Daily Run leaderboards. From here, you can see the top scores for the currently-highlighted board, as well as your own score and ranking (if available).

The Daily Run leaderboard refreshes automatically at 00:00 midnight GMT, clearing all scores from the past day. When viewing scores in-game, there's also a handy timer to tell you when the boards will be cleared.

To view Hard Mode leaderboards in-game, enable "Hard Mode" from the Options menu before checking. To return to regular leaderboards, disable this setting.

# Strategies

Here are a couple tips to hopefully help you conquer the HEXAPLEX!

- Know your difference between clockwise and counter-clockwise.
- It's easier to fill a gap of two tris than it is to fill a gap of one.
- Plan for the tris that reward higher points!
- Make use of Power-ups when possible, and especially when beneficial.
- The crank can perform Swaps faster, but is harder to dial in precisely.
- Use Bombs at opportune times to re-shuffle a poor layout!
- When in doubt, just take a moment to study the HEXAPLEX. You've got more time than you think!

# Credits

- Art and code — [Rae](https://rae.wtf)
- Music — [Watson at MusMus](https://musmus.main.jp); [Terms](https://musmus.main.jp/info.html)
- French localization — [Voxy](https://voxy.space)
- Japanese localization — Philemax
- SFX — [JSFXR](https://sfxr.me)
- [Tanuk](https://github.com/Schyzophrenic/Tanuk_CodeSequence) library — [Toad](https://toadleyundercontrol.itch.io/) and [Schyzo](https://twitter.com/Schyzo99); [MIT](https://github.com/Schyzophrenic/Tanuk_CodeSequence/blob/main/LICENSE)
- Full Circle and Mikodacs Clock fonts — [Panic](https://panic.com); [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)
- [Righteous](https://fonts.google.com/specimen/Righteous) font — Astigmatic; [OFL](https://openfontlicense.org)
- Playdate [input prompts](https://kenney.nl/assets/input-prompts) — [Kenney](https://kenney.nl); [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/)
- Playdate [achievements](https://playdatesquad.github.io/pd-achievements/) library — Playdate Squad
- xorshift PRNG implementation — [Eli Piilonen](https://bsky.app/profile/2darray.bsky.social) (2DArray)
- LÖVE2D [Knife](https://github.com/airstruck/knife) library — [airstruck](https://github.com/airstruck); [MIT](https://github.com/airstruck/knife/blob/master/license)
- LÖVE2D [HUMP](https://hump.readthedocs.io/en/latest/) library — Matthias Richter; [License](https://github.com/HDictus/hump/blob/temp-master/README.md)
- [Tween easings](https://github.com/EmmanuelOga/easing) — Yuichi Tateno and Emmanuel Oga; [MIT](https://github.com/EmmanuelOga/easing/blob/master/license.txt)
- Lua [JSON](https://github.com/rxi/json.lua) parser — [rxi](https://github.com/rxi); [MIT](https://github.com/rxi/json.lua/blob/master/LICENSE)
- Addtl. code — [lua-users wiki](http://lua-users.org/wiki/FormattingNumbers) and [Drew-Lo](https://aloebach.itch.io)
- Thanks — Voxy, Toad, scizzorz, superfunc, Mag, Hunter Bridges, Scenic Route, DRD, IGDA Twin Cities, and Panic!
- PC testers — Orchid, Maddy, Toad, Seb, Winter, Voxy, Diego, Roxby, and Scenic Route


# Additional Notes

This game started life on the 4th of July, 2024. It came together pretty much over the weekend — initially being sent to the Playdate Catalog on July 7th, and approved on the 10th. The game was originally scheduled for release on August 13th, 2024, before suddenly having the opportunity to jump back and instead release on July 30th. This means that the game went from "start of development" to "literally out for people to buy" in just under a months' time. New record!!

The version of HEXA for personal computers was an idea in my head for a while (even before the original Playdate release), but I started work on what would eventually be the final version just a couple weeks before I wound up releasing it. This version is a loving recreation of the Playdate original, with the code being entirely hand-ported to the fabulous LÖVE2D engine. While my original intent was to keep the two versions of the game as similar as possible, I hope you enjoy the extra benefits that come as a result of what the Playdate *can't* do!

Special thanks to the folks in the Catalog dev chat for being there to witness my tomfoolery throughout the initial development, everybody who helped out and cheered me on as this game barreled through the finish line, and everyone who continues to compete so fiercely on the Playdate leaderboards and create such an inspiring community out of my little puzzle game. Enjoy the cake! And thanks to you, for reading, playing, and (hopefully) enjoying!

# Changelog

## Version 2.3.0
### 05.13.2026

- Added a full Japanese localization! Thanks, Philemax!
- Added xorshift randomization. All platforms should now have the same puzzle generation (for Daily Runs, Missions, etc.)
- Added "System" language option as default. This will determine language based on your Playdate's OS-level setting (OS 3.1.0+), or your Steam client's setting. (Falls back to English)
- Game can now be consistently paused and exited during initial countdown, if one exists
- Added Language select screen that will show up at first launch, if user language isn't initially determinable.
- Swaps:HEXAs ratio in Statistics now reads 'N/A' if ratio isn't calculable.
- Divided screen-shake effect a bit to reduce flashing of dither patterns on smaller displays
- Fixed crash that would occur on attempt to open custom Mission if none exist
- Mission Command headers now render with a nicer outlined font
- When resetting local stats in the Options screen, sound effects will no longer overlap
- Nudged manual images over slightly so they didn't crash into the text so hard
- Adjusted scene transition "blast door" parameters
- Chill Mode achievement will now unlock at the end of the session instead of at the beginning

Windows/macOS/Linux:
- Added some nice Steam-y features:
	- Achievements!
	- Rich presence!
	- Leaderboards!
- When using a controller, the left control stick can now be used in place of the Directional buttons
- The game will now pause if the controller is disconnected, the window is defocused, or the Steam overlay is opened mid-game
- Replaced animation timer logic with a much more consistent and smooth-operating library
- Added more controller-friendly method of text input in Mission Command
- When using a Sony-branded controller, appropriate button labels and glyphs will now be rendered
- Added persistent "Fullscreen" save option to Video Options (defaults to "ON")
- Adjusting Minimum Scale when game is fullscreened will no longer kick it out of fullscreen
- Minimum Scale for windowed mode now defaults to 2 on a freshly-opened game
- Fixed bug where in Jukebox, window title would not get properly localized (missing string)
- Fixed bug where changing Language in Options would not adjust the window title accordingly
- Fixed a game crash that would trigger on entering the Jukebox with the music volume at 0
- Fixed bug where in Mission Command, Time Attack seed could be set regardless if that was the Mission's current mode
- Fixed visual bug where control options wouldn't display in the final export step of Mission Command
- Fixed minor visual issue in Visual Options (oops) where controls would render at the wrong opacity/color
- Fixed visual bug in Visual Options (...double-oops) where the control guide would get cut off in Classic mode
- HEXAPLEX Style in Visual Options can no longer be highlighted at all in Classic mode
- Removed "Up opens directory" prompt in custom Missions menu (this was confusing for platforms where it did nothing)
- Locked Mission headers will now use the proper font in Colorful mode
- Tweaked the Quit status bar to use the proper font in Colorful mode
- Daily Run countdown will now use the proper font in Colorful mode
- Added ability to exit keyboard remapping by pressing ESC (or Start/Options, on a gamepad)
- Fixed bug where pressing an invalid key during keyboard remapping would crash the game
- Keyboard remapping will now refuse to initiate when activated with a controller

Playdate:
- In Jukebox, going back from the Slide menu will no longer play an extra sound effect
- Added badge icons for locked and unlocked achievements
- Fixed bug where locking and unlocking the console during an active game may crash the system
- Fixed bug where exiting the High Scores screen before scores could finish loading would crash the game
- Fixed bug where "Can't clear the mission in this state!" error in Mission Command wouldn't get properly localized
- Cleaned up Time Attack seed input behavior in Mission Command (less crashes?)
- Fixed bug where in Mission Command, extra numbers inputted into the Time Attack seed wouldn't get lopped off properly
- Fixed bug where hitting Slide menu options with the keyboard open in Mission Command would cause all manner of issues
- Adjusting HEXA match speed back down to match with the PC's more accurate timers in 2.3.0
- Fixed incorrect criteria for Swap- and HEXA-based achievements
- Fixed wording in Mission Command achievement, as well as making it un-hidden

## Version 2.2.0
### 10.16.2025

- Added new "Language" option, as well as a full French localization! Thanks, Voxy!
- Added ability to toggle Options using the left and right Directional buttons

Windows/macOS/Linux:
- Added keyboard remapping! Instead of presets, map the keys anywhere on the keyboard you like
- Added "Wonky Pixels" scaling mode, in Video Options. This minimizes letterboxing, at the cost of...well, wonky pixels
- Added ability to toggle Visual Options using the left and right Directional buttons
- Screen clip rect will now accurately follow screen "shake" effect
- Added ability to pause the game while a HEXA match is taking place
- App icon will now change at runtime based on Color attribute
- F11 will now toggle fullscreen mode
- Screen shake has been adjusted to hopefully better match the Playdate version
- Fixed controller logic — now any input from any connected controller will be registered
- Fixed rumble logic — the most recently used controller (if any) will be the one used for rumble
- Fixed bug where the screen border may flicker rapidly with a latent frame on resizing
- Fixed bug where music volume wouldn't quieten properly on game pause, or quit from title
- Fixed bug where in Arcade Mode, the button inputs at the end of the round would not appear
- Fixed bug where in Chill Mode, the button inputs at the end of the round used the wrong font in Colorful mode
- Fixed bug where on exit from title screen, the text would be using the wrong font in Colorful mode

Playdate:
- Sped up HEXA matching to roughly match the PC version

## Version 2.1.7
### 10.03.2025

Windows/macOS/Linux:
- Initial release.

Playdate:
- Added new Statistics menu! (Most statistics are tracked as of 10.03.2025. Sorry!)
- Added a second page to the credits screen — so many wonderful people!
- Replaced "Music" and "SFX" toggles with granular volume settings
- Reduced chance of Special Activity to one in ten thousand
- Fixed bug where "Half circle" font would be rendered under "Full circle" font in menus
- Fixed bug where Hard Mode Arcade score doesn't get cleared upon resetting local stats
- Re-classified "black, gray, and white" tris to "dark, dithered, and light"
- Fixed crash that occurs if attempting to move left/right in an empty custom Mission list
- Daily Run no longer prompts to view high scores if the build isn't from Catalog
- Non-JSON files in the custom Mission folder will no longer attempt to be read
- Track information is now hidden in the Jukebox, when music is disabled
- Seed argument is now properly set when entering a stock Mission
- Fixed Mission Command selector Power-ups still moving when Reduce Flashing is enabled
- Reduced flashing velocity of Mission Command selector cursor
- Edited author name save behavior to always keep the most recent name

## Version 2.1.6
### 08.20.2025

- Fixed crash that happens when launching stock Missions in Mission Mode
- Improved error checking accuracy when creating custom Missions

## Version 2.1.5
### 07.30.2025

- Added ability to create custom Missions! Check the game manual to learn more.
- Added achievements! [Learn more here.](https://github.com/PlaydateSquad/pd-achievements)
- Added separate save variable for when Hard Mode is enabled
- Added on-line leaderboards for Hard Mode (Arcade Mode and Daily Run)
- Hopefully fixed a rare crash when completing a game
- Souped up pause screen input guide (thanks Kenney for the input prompts!)
- Fixed a bug where Daily Run score wouldn't be saved on sideloaded copies
- Leaderboard will now open to the mode you last played (Arcade Mode or Daily Run)
- Mission Mode will now remember your "custom" setting between Missions

## Version 2.1.2
### 02.07.2025
- *Actually* fixed crash that sometimes fired upon entering Mission Mode

## Version 2.1.1
### 01.15.2025

- De-looped music tracks. Whoops!
- Fixed crash that sometimes fired upon entering Mission Mode
- "Hard Mode" is now available as a direct toggle in the Options menu
- Added slight deadzones to swapping with the crank

## Version 2.1.0
### 01.06.2025

- Fix wi-fi cauterization in sideload copies
- Edit static list icon to be more visually interesting
- Compress music to get file size from ~30 MB down to <10
- Music now also loops a bit more appropriately
- Add hidden "Hard Mode" in Arcade/Daily Run
- Swap SFX quietened
- Added support for importing Custom Missions
- Fixed bug with "flip rotation" setting mid-game
- If all missions are beaten, the mission screen will now start at the beginning of the list instead of the end
- B button will now skip end card as well as A
- The crank can now be used to scroll through missions
- In a situation with multiple HEXAs, any with bombs will be de-prioritized to avoid unfortunate scenarios
- Added cranking deadzone of 5º
- Enhanced scene management optimization

## Version 2.0.0
### 08.13.2024

- Added Mission Mode! 50 all-new challenges to complete across four unique game-modes!
- Adjusting round end behavior to fix potential soft lock.
- Pause preview is now hidden for time-sensitive game modes.
- Added additional "2:1" option for crank sensitivity.
- Removed brief timeout between Swaps
- Fixed bug where randomized tag would show up twice in ending card, in specific scenarios
- Hopefully fixing a bug with Daily Run metrics not saving.
- Commalizing best scores on Title screen
- Additional gameplay tweaks and fixes.

## Version 1.1.0
### 08.05.2024

- Fixed a bug where restarting the game wouldn't properly clear the timer.
- The user can now press A to skip the fanfare mid-way through, if "Skip Fanfare" setting is off.
- Added Jukebox, which cycles through the game's music tracks randomly with a nice screensaver.
- Rewording How to Play section slightly to make some game rules more clear.
- Show scores for Arcade Mode and Daily Run on the Title screen, if applicable.
- Fixed a bug in Options where some SFX weren't playing correctly.
- Added all-time Swap and HEXA tracking to the Options menu, starting with the release of v1.1.0.
- Fixed potential bug in Daily Run on-line score caching.
- Reworded "Local Scores" to "Local Stats" in Options; this function now clears Swaps/HEXA counts too.

## Version 1.0.0
### 07.30.2024

- Initial release.

<br>
<a href="https://rae.wtf/games/hexa" class="button">Visit <i>HEXA</i>'s webpage</a>