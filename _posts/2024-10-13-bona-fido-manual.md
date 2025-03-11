---
title: Bona Fido Manual
tag: bona fido
desc: How to get started and traverse the afterlife in style.
---
![Bona Fido](/blog/images/2024-10-13-1.png)

## Synopsis

> Turns out the afterlife's not as bad as they say! Well, except for all the terrifying monsters, at least.

*"Hey. Name's Fido. I'm a dog, as you can clearly see; but really I'm nothing but a bag of bones. The afterlife's pretty nice; it's a bit repetitive, but I can get used to it. It's pretty chill! ...Well, aside from all the unmentionable horrors that are out to kill me *again*. Maybe if I keep running around, I can find a way outta this place? Or at least set some new high scores."*

Bona Fido is a fast-paced, single-screen platformer, inspired by classic arcade games but with a spooOOooky twist. Try for a new high score again and again as you narrowly dodge enemies, dig up treasures that could either help you eke out a record or spell your utter demise, and bark your way to becoming top dog of the afterlife! Don't worry, it only goes on forever.

# Gameplay Basics

## Controls

The d-pad, A and B buttons, and crank are required to play this game. These buttons are also used to navigate menus.

## Gameplay

The d-pad runs around. A button jumps, B button barks. The crank helps you dig up opportune stuff in the ground. Run around and dodge the enemies; bark to kill 'em and move up to a harder (but higher-scoring) level. You've got three "lives" (hah)to start. Run out, and it's game over.

Enemies, obviously, are bad. If you run into them, they'll kill ya (...again), as quick as can be. Luckily, your bark seems to shut 'em up and make 'em go away. Press B to use that, so long as you haven't lost your voice.

Dig-ups are items that sprout from the ground occasionally. Some are good, some are bad, but you don't know what's what until you go fish it out. If you see something buried in the ground, walk up to it and use the crank to dig it up. Trick or treat!

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

1. Visit the *Bona Fido* game page in your Web browser, at [play.date/games/bona-fido](https://play.date/games/bona-fido/). From here, you can view available scores in the Scoreboards section. You can see top 10 scores in every available board.

2. Enter the 'High Scores' menu within the game, accessible by opening the Slide menu within the Title screen. From here, you can see the top scores for the board, as well as your own score and ranking (if available).

# Credits

- Art, code, and music — [Rae](https://rae.wtf)
- SFX — [pixabay.com](https://pixabay.com/); [License](https://pixabay.com/service/terms/)
- Newsleak font — [Panic](https://panic.com); [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)
- [Tanuk](https://github.com/Schyzophrenic/Tanuk_CodeSequence) library — [Toad](https://toadleyundercontrol.itch.io/) and [Schyzo](https://twitter.com/Schyzo99); [MIT](https://github.com/Schyzophrenic/Tanuk_CodeSequence/blob/main/LICENSE)
- Thanks — Mag, Toad, Kirk, Henry, John, and bumbleborn!

# Changelog

## Version 1.5.5
### 02.26.2025

- Added achievements! [Learn more here.](https://github.com/PlaydateSquad/pd-achievements)

## Version 1.5.1
### 01.31.2025

- Added hard cap on lives (six max)
- Platforms now disappear programmatically over the course of the game
- Barks are now limited (starts/caps at 3)
	- Dig-ups now always spawn +3 barks, if the player has no barks
	- Barks reload on life loss
- Bark indicator is now shown in the bottom-left corner
- Dig-ups no longer give or take away lives
- "Lose point" Dig-ups now take away more points
- Crank threshold for digging lowered slightly
- Bark cooldown removed (cuz now there's an inherent limit!)
- Tweaked/fixed wording in tutorial pages
- Added ability for more enemies on-screen at once. Number increases as the game progresses

## Version 1.5.0
### 01.28.2025

- Added on-line leaderboards! Access it via the Slide menu on the title screen.
- Added completely custom OST, made by yours truly!
- Fido will now be uncontrollable while digging.
- Timeout sensitivity for Dig-ups has been reduced (more safety net)
- Added digging animation for Fido
- Dig-up item sprites will now appear above Fido on the Z-index
- Best local score now shows on title screen
- Added wrapping paper on first unwrap
- Inverted list icon
- Crank can now be used to navigate menus
- Mud platforms now spawn a bit more often
- Dig-ups spawn a bit more often, and the likelihood of bad items has been evened out a tad.
- Credits moved to separate screen — access it via the Slide menu on the title screen.
- Bug fixes
	- Dig-up will no longer spawn if the player is not in control
	- Fido will no longer slide around while holding Up/Down and walking
	- "Reset local scores" in Options will now re-set itself if you hover away
- First-person text in-game is more consistent now
- Dig-up noises are now stereo panned
- You can now end a game early, through the Slide menu.
- Fido's hitbox is now smaller
- Game text updated to use localized strings
- B button will now act as a back button in menus.
- Cooldown between barks has been extended.
- Sprite classes now get properly purged on scene exit.
- Outlined gameplay sprites
- Added some cool art to the Options screen.

## Version 1.0.0
### 10.13.2024

- Initial release, for PlayJam 6.

<br>
<a href="https://play.date/games/bona-fido" class="button">Buy <i>Bona Fido</i> in Catalog</a>