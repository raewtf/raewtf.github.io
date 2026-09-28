---
title: Loop Lariat Manual
layout: manual
redirect_from: /blog/loop-lariat-manual/
---
![Loop Lariat logo. The 'Loop' is made of lasso rope, and 'Lariat' is written in a glossy serifed font.](/blog/images/2026-09-27-1.png)

## Synopsis

> Link those lasso-bits, and round up them outlaws! Yee-haw!

It's tough out there. Out on the range. But that's exactly why they brought you here, isn't it? The town's been absolutely infested with do-no-good outlaws hailing from the Meeple Crew, and they're wrecking up the place. You've gotta take 'em out with your trustiest tool...your lasso. Well, many lassos— you get it.

*Loop Lariat* is a rootin'-tootin' *spaghetti*-western block puzzle game, where you wrangle bandits one move at a time. Make efficient use of the limited space...or, hope some dynamite comes your way if you make some bad choices. There's cool visuals, addicting gameplay with multiple modes to mess around in, and heaps of cowboy spirit.

# Gameplay Basics

## Controls

A set of Directional and Action buttons are required to play this game. These buttons are used to navigate menus, and are mandatory in main gameplay.

On personal computers, you can use the keyboard (which defaults to Arrows & Z + X), or a compatible gamepad (d-pad & A + B). During an active game, the pause menu can be accessed by pressing ESC/Start.

(On Playdate, the crank can also be used to navigate menus.)

## Gameplay

Some rough-'n'-tumble bandits from the Meeple Crew are terrorizing the town! You've gotta help wrangle 'em with your lassos, and send 'em to the ol' prison house.

There are four types of blocks you can find on the game board:

- Lassos
- Outlaws
- Dynamite
- Tumbleweeds

Each one has its own special properties!

Lassos can be linked together. If you make a full loop, they'll wrangle up anything found inside, except other lassos. This is how you can nab those nasty Meeple bandits!

Dynamite will destroy whatever it lands on. Use it to clear the clutter, or remove some unwanted lasso-bits! Careful, though: if you blow up an outlaw, you won't earn any points!

Tumbleweeds are only seen on rare occasions. They clutter up the screen, and get in your way. You'll need to blow these suckers sky high with some of that dynamite!

# Modes

## Arcade

In Arcade, you start with a time limit (choose from 1 minute, 5 minutes, or 10 minutes). Every lasso you make earns you more time on the board! Score as many as you can, and try to keep the timer from reaching zero! The game ends when the timer reaches zero, or you run out of moves by filling up the board.

## Time Attack

Time Attack plays similarly to Arcade, except there's no time bonus for scoring lassos. See how far you can get under a more strict time limit! The game ends when the timer reaches zero, or you run out of moves by filling up the board.

## Marathon

Marathon has no time limit — play to your heart's content! Play ends when you run out of moves by filling up the board.

## Daily Run

Daily Run plays like Marathon, except instead of being purely randomly-generated, the block order is determined based on a seed. You only get one shot to play the Daily Run each day — make it count, and try to beat your friends! Play ends when you run out of moves by filling up the board.

## Practice

In Practice, you can play at your own pace, for as long as you'd like. There are no time limits, and no game overs. Play ends whenever you feel like it — if you run out of moves by filling up the board, then the board will re-set to an empty state, and you can keep playing.

# Credits

- Art, code, music, and SFX — [Rae](https://rae.wtf)
- French localization — [Voxy](https://voxy.space)
- [Root Beer](https://fontenddev.com/fonts/root-beer/) font — [Font End Dev](https://fontenddev.com/)
- xorshift PRNG implementation — [Eli Piilonen](https://bsky.app/profile/2darray.bsky.social) (2DArray)
- LÖVE2D [Knife](https://github.com/airstruck/knife) library — [airstruck](https://github.com/airstruck); [MIT](https://github.com/airstruck/knife/blob/master/license)
- LÖVE2D [HUMP](https://hump.readthedocs.io/en/latest/) library — Matthias Richter; [License](https://github.com/HDictus/hump/blob/temp-master/README.md)
- [Tween easings](https://github.com/EmmanuelOga/easing) — Yuichi Tateno and Emmanuel Oga; [MIT](https://github.com/EmmanuelOga/easing/blob/master/license.txt)
- Lua [JSON](https://github.com/rxi/json.lua) parser — [rxi](https://github.com/rxi); [MIT](https://github.com/rxi/json.lua/blob/master/LICENSE)
- Thanks — davemakes, Voxy, Toad, Winter, Devon, and the Café!

# Changelog

## Version 1.0.1
### 09.28.2026

- Added a new 'Statistics' screen, with detailed game insights.† (Statistics are tracked as of v1.0.1.)
- Replaced weighted random block generation with a more stable "bag" system.
- Fixed bug where Daily Run would crash upon completion (fetching a "best score" that doesn't exist).
- Daily Run score now gets properly saved for the day.
- The mode select screen now shows your best/today's score in each mode, if available.
- Added some delay between the game over animation and the results screen.
- Fixed bug where leaving the game results screen wouldn't correctly fade the music.
- Music volume now gets ducked when inside a second-level menu.
- Fixed bug where music would fade too early when entering Arcade or Time Attack modes.

Windows/macOS/Linux:
- Added 'Style' option to swap between Color and PeeDee visual assets.†
- Fixed bug where window scaling wouldn't apply properly at <2x resolution.
- Fixed bug where quitting the game through the pause menu wouldn't correctly fade the music.
- Fixed bug where title screen music wasn't looping at the proper point.

Playdate:
- Added crank selection to game results screen, and second-level menus in the mode select screen.

† Option only available in English, for now.

## Version 1.0.0
### 09.27.2026

- Initial release, for Falling Block Jam 2026.
- Fixed bug where adjusting the "Scaling" option would crash the game (referencing a save variable removed in development).

<br>
<a href="https://raewtf.itch.io/loop-lariat" class="button">Get <i>Loop Lariat</i> on Itch.io</a>