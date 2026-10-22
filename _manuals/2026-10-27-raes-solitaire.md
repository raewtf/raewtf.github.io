---
title: Rae's Solitaire Manual
layout: manual
redirect_from: /blog/raes-solitaire-manual/
---
![Rae's Solitaire logo. There's a set of antennae, and a stacked card motif.](/blog/images/2026-10-27-1.png)

## Synopsis

> For having fun or killing time; patience is a virtue.

Hi! My name's Rae. Lately, I've been getting into solitaire (patience, card solitaire, what-have-you). One night, I thought: "I wanna play some solitaire on my Playdate". Then I thought, "how hard would it be to *make* it?" ...So, I made solitaire for my Playdate! Now, you can play it on yours too.

It's robust, and ridiculously customizable. You can freely adjust your play settings to suit your play style, choose from a variety of pre-set visual settings, or even draw and import your own deck of cards! It's got some nice features made with Playdate in mind, too — easy undo, extensive use of the Playdate's crank to make your life easier, and an automatic suspend feature that lets you pick a game up where you left off. There's Klondike, Spiderette, Yukon, maybe more...it's solitaire! I hope you enjoy it!

# Gameplay Basics

## Controls

The d-pad and A and B buttons are required to play this game. These buttons are used to navigate menus, and are mandatory in main gameplay. The crank can also optionally be used. Within the game, context is provided as to which controls will perform what actions.

# Modes

## Klondike

In Klondike solitaire, you start with a 'tableau' of 28 cards, plus a 'deck' with 24 more. The goal's to sort the cards into the 'banks' at the top, in order, by suit.

In the tableau, cards can be stacked by alternating color; starting with K at the top, down to A. In banks, cards are stacked by suit, from A to K. Cards can be flipped and drawn from the deck, and moved either into the tableau, or straight into a bank. If all cards have been flipped, it goes from the top.

## Spiderette

In Spiderette solitaire, you start with a 'tableau' of 28 cards, plus a 'deck' with 24 more. The goal's to sort the cards into four piles of thirteen, in order, by suit.

You can move around the top card in any tableau. If it's part of a stack of the same suit, in order, then you can pick all those cards up as well! You can move any card into an empty spcae on the tableau, but Kings don't have anything to stack on top of otherwise, so those spots are great for 'em.

If every spot on the tableau is full, then you can 'deal' from the deck, adding seven more cards into the tableau; one at the top of each stack.

In 'Will o' the Wisp' dealing, every slot in the tableau has just three cards dealt into it, instead of following the typical Klondike layout. This makes it a bit easier. You can also adjust how many suits are in play. Less suits can also make the game easier, by way of letting more tall stacks of alike suits be made.

## Yukon

In Yukon solitaire, you start with a 'tableau' of all 52 cards! The goal is to sort the cards into the 'banks' at the top, in order, by suit.

You can pick up as many cards at a time as you want. To move them somewhere else, the colors of the connecting cards must alternate, in descending rank. (If you're playing using Russian stacking rules, then the connecting cards must match suits exactly, in descending rank.) In banks, cards are stacked by suit, from A to K.

# Scoring Algorithms

## Klondike: Standard

Standard scoring depends on the moves you make throughout the game, as well as how much time you take to complete it.

- Moving a card from the deck to the tableau: +5 points
- Revealing a new card in the tableau: +5 points

- Moving a card from the deck to a bank: +10 points
- Moving a card from the tableau to a bank: +10 points
- Moving a card from a bank back to the tableau: -15 points

- Reversing the deck, in 1-Draw: -100 points
- Reversing the deck, in 3-Draw: -20 points

- Timer bonus: +(700,000 / seconds) points, if the game's taken at least 30 seconds
- Time penalty: -2 points for every 10 seconds elapsed

## Klondike: Vegas

For Vegas scoring, you play not with points, but with dollars. For each game, you start by anteing $52. Then, for each time you move a card into a bank, you gain +$5. (If a card gets moved from a bank back into the tableau, you lose $5 instead.) Upon starting a new game, you'll begin again with -$52 to start the next round.

Vegas (Cumulative) scoring works just like Vegas scoring, except you play with the same pot between games. If you end with a score of $208, playing again will subtract $52 for the new ante, and leave you with $156 to start the next game.

## Spiderette: Standard

## Yukon: Standard

Standard scoring depends on the moves you make throughout the game, as well as how much time you take to complete it.

- Revealing a new card in the tableau: +5 points

- Moving a card from the tableau to a bank: +10 points
- Moving a card from a bank back to the tableau: -15 points

- Timer bonus: +(700,000 / seconds) points, if the game's taken at least 30 seconds
- Time penalty: -2 points for every 10 seconds elapsed

## Yukon: Vegas

For Vegas scoring, you play not with points, but with dollars. For each game, you start by anteing $52. Then, for each time you move a card into a bank, you gain +$5. (If a card gets moved from a bank back into the tableau, you lose $5 instead.) Upon starting a new game, you'll begin again with -$52 to start the next round.

Vegas (Cumulative) scoring works just like Vegas scoring, except you play with the same pot between games. If you end with a score of $208, playing again will subtract $52 for the new ante, and leave you with $156 to start the next game.

# Custom Card Assets

tbd

# On-line Capability

## About On-line Play

This game connects to Playdate's on-line leaderboard API, to enable sending and receiving of high scores among players across the globe. To use on-line functionality in this game, make sure your Playdate has an active Wireless connection.

> ⚠️ To access on-line features in this game, On-line Participation must be turned ON, in the in-game Settings > Gameplay. If this setting is turned OFF, both reading and writing will be disabled.

## Submitting Your Scores

To submit a new score to a global leaderboard, simply finish a game. When you reach the 'Game Complete!' screen, your score will be submitted to the proper leaderboard automatically.

> ⚠️ For games of Klondike, any submission to on-line records will be counted by Standard scoring rules, regardless of in-game scoring selection.

## Viewing Global Scores

You can view global scores using two primary methods:

1. Visit the *Rae's Solitaire* game page in your Web browser, at [play.date/games/raes-solitaire](https://play.date/games/raes-solitaire). From here, you can view all available scores in the Scoreboards section. You can see top 10 scores in every available board.

2. Enter the 'Global' menu within the game, accessible from the Title screen. When in this screen, you can use the left and right buttons on the D-pad to switch between modes.

# Credits

- Art, code, music, and SFX — [Rae](https://rae.wtf)
- [Pixolde](https://fontenddev.com/fonts/pixolde/) font — [Font End Dev](https://fontenddev.com/)
- xorshift PRNG implementation — [Eli Piilonen](https://bsky.app/profile/2darray.bsky.social) (2DArray)
- Additional card art — Powerdive Games, Toad, Scenic Route Software, Synaptic Sugar, Tijn and Jazzie, and gurtt
- Playtesters — Tijn, BT, Ophelia Bee, TheOddLinguist, hekhound, James Gameboy, Kirkpad, David Hepworth, librarian.bmp, Kell Antari
- Thanks — potch, Kenney, the Café, Panic, and you!

# Changelog

## Version 1.1.0
### 10.27.2026

- Added Spiderette, Yukon, and...?
- Fixed bug where using the crank to make the first move in a game wouldn't properly start the timer
- Fixed bug where the win function could be run multiple times at the end of a game, potentially messing with stats
- Fixed bug where cursor could be maneuvered during an opening deal
- Fixed bug where if auto-complete cycled the deck in Klondike, the amount of points taken in 3-Draw mode would be incorrect
- Fixed bug that could potentially crash the game if a custom card back art was used in-game
- Fixed visual bug in the statistics menu if no games of Klondike had been played yet
- Fixed bug in the Global screen where personal best may not have been showing properly-formatted scoring info
- Fixed bug where 'doink' noise would play rapidly, if the end of a stack is reached while quick-picking
- Removed ability to undo moves made before a resumed game's suspend point
- Added 'On-line Participation' toggle, in the Catalog version of the game
- Fixed potential bug when changing "auto-flip" variable in Klondike, and then re-entering a suspended game
- Added better support for multiple game modes on the title screen
- Fixed bug where 'doink' sound wouldn't play if attempting to pick up non-flipped cards in a stack
- Adjusted Klondike-specific rules settings under the hood to be more distinct from other game modes – save data will be adjusted upon first boot of v1.1.0
- Fixed bug where the crank would scroll the list on the title screen while a dialog box is open
- Floored crank movement on the title screen, to prevent dither flashing

## Version 1.0.0
### 10.27.2026

- Initial release.

<br>
<a href="https://play.date/games/raes-solitaire" class="button">Buy <i>Rae's Solitaire</i> in Playdate Catalog</a>
<a href="https://raewtf.itch.io/raes-solitaire" class="button">Buy <i>Rae's Solitaire</i> on Itch.io</a>