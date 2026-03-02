---
title: Labsylle Manual
tag: labsylle
desc: How to get started and swap those words!
---
![Labsylle](/blog/images/2026-02-17-1.png)

## Synopsis

> A cool word puzzle game, all about the "building blocks" of the English language.

*Labsylle* is a puzzle game. All about syllables. It's easy to play: you swap around these syllable blocks, two at a time, and try to assemble words. That's it! Once you get started, though, it's hard to stop yourself from saying "just one more". Pop in and out of themed puzzle paks at ease — suspend, and then resume, exactly where you left off. Perfect to play on the bus, waiting in line, or anywhere you need a quick puzzle fix. Who knows? You might even learn a new word or three!

We're not skimping, either. The game includes over four hundred and fifty word puzzles, and an expansive dictionary of *"Quik-Words"*, for you to barrel through in sixty second bursts — how many rounds can you complete in that time? If you want a break from all the words words words, there are also about 50 *bonus* puzzles centered on shapes — the perfect counterpart. That's Labsylle, explained to you in one hundred and sixty eight words — are you in?

# Gameplay Basics

## Controls

A set of Directional and Action buttons are required to play this game. These buttons are used to navigate menus, and are mandatory in main gameplay.

On personal computers, you can use the keyboard (which defaults to Arrows & Z + X), or a compatible gamepad (d-pad & A + B). During an active game, ESC/Start accesses the pause menu. Otherwise, pressing either button twice in succession will quickly exit the game.

On Playdate, you can also optionally use the crank to perform the swapping action usually done by the Action buttons — this can be toggled in the Options menu. (The crank can also be used to navigate menus.)

## Gameplay

Gameplay is simple! You'll be given a group of syllable "blocks", which are jumbled around in a random order. Your task is to swap them, two-at-a-time, to reach the target word. Preferably, you'd like to do it in as few swaps as possible, as well. That's it for the basics! But you may encounter a couple other quirky obstacles...

*Impostors* are syllable blocks that don't actually belong anywhere in the target word. When an impostor block is hiding about, there will be a dedicated spot for it at the far-right end of the playfield. To complete the puzzle, solve the rest of the word correctly, and silo the impostor out in the time-out corner.

*Bombs* are syllable blocks that only give you a limited amount of swaps. If you shuffle them around too many times, they'll get increasingly fired up, and eventually KERPLODE! ...Which means you'll need to restart the puzzle from the beginning.

# Modes

## Word Puzzle Paks

The word puzzle paks comprise the default game mode. When you enter this mode, you'll get to choose from a variety of paks, sorted by difficulty, where words are grouped together under common themes such as "Animals" or "Food & Drink". Solve all of these words in as little cumulative swaps as you can for a high score! High scores are tracked individually per pak.

If you wanna take a break from a pak and come back to it later, you can select "suspend" from the pause menu. This will kick you back to the pak selection screen, and re-entering the pak will put you exactly where you left off.

Selecting "quit" from the pause menu will maintain your progress within the pak, starting you at the top of the last puzzle you reached, but will reset any progress within the individual puzzle.

If you'd like to clear all progress on a puzzle pak, hover over the pak on the selection screen, and press the left Directional button to arm the deletion process. Press the primary Action button to confirm deletion, and reset all progress and high scores. If you'd like to change your mind, navigate away from the active pak or press the right Directional button to disarm the deletion process.

## Quik-Word

In Quik-Word, you get 60 seconds to plonk together as many 4-syllable words as you can! Instead of being scored based on minimum swaps, your goal is simply to complete as many rounds — properly assmble as many words — as possible in the time limit!

## Bonus Paks

Bonus Paks function like the Word Puzzle Paks, but center around anything but! Currently, there are two types of Bonus Paks — *Shapes Paks* ask of you to link the blocks together in such a way that there's an unbroken string of properly-connected shapes, and *Math Paks* want you to assemble the blocks to create a valid mathematical equation.

# On-line Capability

## About on-line play

This game connects to Playdate's on-line leaderboard API, to enable sending and receiving of high scores among players across the globe. To use on-line functionality in this game, make sure your Playdate has an active Wireless connection.

> ⚠️ *Labsylle for personal computers does not connect on-line, or transmit high scores.*

## Submitting your scores

To submit a new score to a global leaderboard, simply complete a pak or finish a round of Quik-Word. When you reach the end results screen, your score will be submitted to the proper leaderboard automatically.

> ⚠️ *Be careful — if you close out of Quik-Word without properly ending your run, your score won't be saved or submitted!*

## Viewing global scores

You can view global scores using two primary methods:

1. Visit the Labsylle game page in your Web browser, at [play.date/games/labsylle](https://play.date/games/labsylle). From here, you can view available scores in the Scoreboards section. You can see top 10 scores in every available board.

2. To view global scores for paks within the game, hover over a pak on the selection screen, and select "pak boards" from the Slide menu. From here, you can see the top scores for the current pak.

3. To view global scores for Quik-Word within the game, enter the "Best Scores" menu, accessible from the Title screen. When in this screen, you can use the left and right Directional buttons to toggle between the All-Time and Daily best score leaderboards. From here, you can see hte top scores for the currently-highlighted board.

The Daily Quik-Word leaderboard refreshes automatically at 00:00 midnight GMT, clearing all scores from the past day.

# Credits

- Art, code, music, and SFX — [Rae](https://rae.wtf)
- Pak writing — Rae, [Toad](https://toadley.space), and [Voxy](https://voxy.space)
- [Quik-Word list](https://github.com/gautesolheim/25000-syllabified-words-list) — [Gaute Solheim](https://github.com/gautesolheim); [Unlicense](https://github.com/gautesolheim/25000-syllabified-words-list/blob/main/LICENSE.md)
- [Digital Disco](https://fontenddev.com/fonts/digital-disco/) font — [Font End Dev](https://fontenddev.com); [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)
- [Cal Sans](https://fonts.google.com/specimen/Cal+Sans) font — Mark Davis; [OFL](https://github.com/calcom/sans/blob/main/OFL.txt)
- Playdate [achievements](https://playdatesquad.github.io/pd-achievements/) library — Playdate Squad
- xorshift PRNG implementation — [Eli Piilonen](https://bsky.app/profile/2darray.bsky.social) (2DArray)
- LÖVE2D [Knife](https://github.com/airstruck/knife) library — [airstruck](https://github.com/airstruck); [MIT](https://github.com/airstruck/knife/blob/master/license)
- LÖVE2D [HUMP](https://hump.readthedocs.io/en/latest/) library — Matthias Richter; [License](https://github.com/HDictus/hump/blob/temp-master/README.md)
- [Tween easings](https://github.com/EmmanuelOga/easing) — Yuichi Tateno and Emmanuel Oga; [MIT](https://github.com/EmmanuelOga/easing/blob/master/license.txt)
- Lua [JSON](https://github.com/rxi/json.lua) parser — [rxi](https://github.com/rxi); [MIT](https://github.com/rxi/json.lua/blob/master/LICENSE)
- Playtesters — Oatcup, Dimitri, dennens, scizzorz, benjymous, TheOddLinguist, Scenic Route, Toad, BrittOmnRex, and Angry
- Thanks — Voxy, Toad, Robbo, Scenic Route, Orchid, Winter, Devon, The Rhythm League, the PeeDee Dev Server, and Panic!

# Changelog

## Version 1.0.3
### 03.02.2026

- Fixed game crash when launching the Shapes! pak.
- Fixed game crash when entering puzzle 4 in the Card Stock bonus pak.
- Optimized automatic check logic slightly. Now the correct state will only be checked after each swap, and not on every frame.
- Page numbers are now displayed in Options and Credits screens.
- Removed impostor/bomb icons from the Pak Select screen (due to visual bug with it sometimes crashing into the text).

Windows/macOS/Linux:
- Added clearer selection indicator on the in-game Pause screen.
- Fixed edge case where you could pause the game again after selecting Suspend or Quit.
- Button display now always reads "A" and "B" regardless of controller connection (due to visual bug with some keyboard key labels).
- Fixed bug where scene transition would not properly occur when resuming a suspended pak.
- Fixed edge case where pressing ESC/Start too early as you enter a game would queue up the full-game quit flow.

Playdate:
- Added default username check to scoreboards, and a call-to-action if the player hasn't set their own.
- Cranking on the Options screen will now move to the next/previous page of items (if any) when it attempts to pass the edge.

## Version 1.0.2
### 02.18.2026

- Fixed impossible puzzle in the Sports! pak.
- Fixed word touching the edges of the syllable block in the Food & Drink I pak.
- Cursor now starts in (or near) the center when opening a new puzzle.
- Adjusted visualization of bomb blocks (now the explosion happens *after* 0, not *at* 0).

Playdate:
- Added wrapping paper to launch experience.

## Version 1.0.1
### 02.17.2026

- Fixed bug where Pak Swaps would erroneously be inflated in Results screen and Playdate leaderboards.
- Added edge-case catch to not attempt to play a sound if it doesn't exist.
- In Quik-Word, timer will no longer remain visually frozen during Round 1.
- Fixed 'Paks' being referred to as 'Packs' in quite a lot of places.

Playdate:
- Fixed bug where, in Quik-Word, leaving the Results screen too fast would cause a leaderboard-related crash.
- Swapped direction of crank scrolling in Quik-Word results screen.

## Version 1.0.0
### 02.09.2026

- Initial pre-release.

<br>
<a href="https://raewtf.itch.io/labsylle" class="button">Buy <i>Labsylle</i> for personal computers</a>
<a href="https://play.date/games/labsylle" class="button">Buy <i>Labsylle</i> for Playdate</a>