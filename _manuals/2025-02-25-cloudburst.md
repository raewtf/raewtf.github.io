---
title: Cloudburst Manual
layout: manual
redirect-from:
  - /blog/cloudburst-manual/
---
![Cloudburst logo. A simplistic design with an umbrella creating the O in "cloud", and the pole looping down to form the U in "burst".](/blog/images/2025-02-07-1.png)

## Synopsis

> Real-time weather. On your Playdate.

Curious what the forecast looks like? Easy! But...your laptop's out of reach, your phone's battery is dead, your smart assistant's brain is busted, and your curtains are shut. It's just you, and your Playdate. What can you do? Well, here is your answer! Leveraging state-of-the-art networking capabilities, Cloudburst is a fully seamless, on-line enabled weather app for your Playdate!

Get the forecast here, there, or anywhere — it's compatible with cities around the world! (And don't worry, it works with Fahrenheit or Celsius — metric or imperial.) See detailed stats such as hourly forecast, precipitation, wind, and more. Change settings to your heart's content, and even use it as a low-power screensaver — the perfect desk buddy. No external tools or setup required, just download and go — it's weather, untethered.

# Basics

This app connects to an external on-line API, to enable sending and receiving of data including weather information. This app also connects to Playdate's on-line leaderboard API, to enable sending of high scores among players across the globe. To use this app, make sure your Playdate has an active Wireless connection.

## Controls

The d-pad and A and B buttons are used to navigate menus. The crank is optionally used in menus, or to display detailed weather information. Within the app, context is provided as to which controls will perform what actions.

## Initialization

When you first start the app, you'll be prompted to provide an approximate location. This data will be shared with the weatherapi.com service to gather information about your area. This information isn't shared anywhere else on-line, but your direct input will be saved on your Playdate's local disk.

After providing a location, you'll be prompted to adjust a few settings — namely, temperature preference, and measurement preference. After this, the Playdate will attempt to connect to the Internet and grab weather data for your area. If your Playdate cannot connect to the Internet, an error message will appear and you'll be prompted to try again later.

## Where are you?

If the resulting API data doesn't match your location, try being a bit more specific with your data entry. For example, instead of "Portland", try inputting something like "Portland OR", or a direct ZIP/Postal code. Cloudburst should work with most (if not all) areas around the globe — if you live in or discover an area that you just cannot get to work, let me know!

# Weather

## Main Screen

The main screen always shows your area's current temperature and estimated forecast, your console's local time, and current battery estimate.

By default, when the Playdate is plugged in to power, animated wallpapers will refresh at 30 frames per second. When running on battery, the display will enter a lower-power state to save energy, refreshing at 5 frames per second. You can change this behavior by toggling "Smooth animations" in Options.

If you open the app without a Wireless connection, the main screen won't contain weather information, or The Fold™. Feel free to continue using the app as a screensaver. When you get back into a place with internet, open the Slide menu and select 'refresh' to scout for new weather data.

> 💡 *When no connection is available, automatic refresh of weather data will be disabled.*

## The Fold™

By using the crank or d-pad on the main screen, you can wring up The Fold™. This contains more detailed weather info for your current location, such as:

- Current temperature and estimated forecast
- "Feels like" temperature, and HI/LO temps for the day
- Estimated temperature and forecast for the next six hours
- Sunrise and sunset times
- Air quality (EPA and DEFRA index), and information on particulate matter
- Humidity, now and within the next hour
- Precipitation, now and within the next hour
- Estimated forecast, HI/LO temp, and sunrise/sunset times for the next day
- Current moon phase
- Current wind speed, gusts, and direction
- UV index
- Visibility

# Options

In this app, there are a variety of options you can change to fully optimize your experience.

- Change area: Edit your location area used for gathering weather data. This can be changed as many times as you wish.
- Save recent areas: Choose how many location inputs are saved to disk, for easy access.
- Temperature: Choose between Celsius or Fahrenheit readings for temperature info.
- Measurement: Choose between Metric or Imperial readings for measurement info.
- Idle refresh rate: Decide how often the app will try to grab new weather data while idling.
- Auto-lock %: When the console reaches this battery percentage, it will automatically lock after three minutes without input.
- Time display: Whether clocks in the app should follow 24-hour or 12-hour time. "System" will force the app to respect your OS' clock setting.
- Music: Toggles music in the Initialization screen.
- Sound Effects: Toggles sound effects throughout the app.
- Wallpaper: Choose the wallpaper that is displayed on the idle screen.
	- Default: The default setting; chill Cloudburst waves.
	- Earth: A replication of the "Initialization" screen; a spinning globe in a starfield.
	- Temp. Focus: A lower-power display that brings the temperature front-and-center.
	- Clock Focus: A second low-power display that shows the current console time in large text.
	- Analog: A recreation of the Playdate's analog clock screen, with weather info.
	- Flip Clock: A stylized design that emulates a retro flippy-flappy flip clock.
	- Terminal: A retro design that looks like a computer terminal. Try mashing buttons!
	- Custom Img.: If the console detects a 400x240 <span class="code-span">.pdi</span>-converted image (no transparency) in <span class="code-span">Data/wtf.rae.cloudburst/images/custom.pdi</span>, you can use this image as your wallpaper.
- D-pad (The Fold™): Determines the direction of scrolling when using the d-pad to control The Fold™.
- Smooth animations: Choose whether the main weather screen should update at a full refresh rate of 30 FPS, or a lower-power 5 FPS. "On Power" will only enable smooth frame rate if the Playdate is plugged in to a power source.
- Invert display: Choose whether the display should be inverted. "On noons" will flip between them automatically — non-inverted from midnight to noon, and inverted from noon to midnight.
- ?

# On-line Capability

## Submitting your data

This app supports global on-line leaderboards — just for fun!

To submit new data to the global leaderboards, simply launch the app. As you leave the initialization screen, your data will be submitted to the proper leaderboards automatically.

## My data didn't send! What do?

If you tried to send some data, but it didn't get sent up to the appropriate leaderboard, there are a few things you can try:

1. Give it a little time, and see if it sends up automatically.

2. Try refreshing the weather, by opening the Slide menu and selecting 'refresh' — this might kick the OS' caching into high gear.

> ⚠️ *If you already set a greater benchmark earlier in the day, your score won't be overwritten. Please wait for the leaderboards to refresh at the end of the day.*

## Viewing global data

You can view global data by visiting the *Cloudburst* game page in your Web browser, at [play.date/games/cloudburst](https://play.date/games/cloudburst/). From here, you can view all available scores in the Scoreboards section. You can see top 10 scores in every available board.

Leaderboards refresh automatically at 00:00 midnight GMT, clearing all scores from the past day.

# Credits

- Art, code, and music — [Rae](https://rae.wtf)
- Weather data — [weatherapi.com](https://weatherapi.com)
- Addtl. music — Scratchminer
- SFX — [pixabay.com](https://pixabay.com/); [License](https://pixabay.com/service/terms/)
- Planet animation — [Pixel Planet Generator](https://deep-fold.itch.io/pixel-planet-generator)
- [Tanuk](https://github.com/Schyzophrenic/Tanuk_CodeSequence) library — [Toad](https://toadleyundercontrol.itch.io/) and [Schyzo](https://twitter.com/Schyzo99); [MIT](https://github.com/Schyzophrenic/Tanuk_CodeSequence/blob/main/LICENSE)
- Sasser Slab, Roobert, Asheville, and Mikodacs Clock fonts — [Panic](https://panic.com); [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)
- Thanks — Andy, Toad, Vachi, Jackson, Scratchminer, and those who waited patiently!

<br>
<a href="https://play.date/games/cloudburst" class="button">Buy <i>Cloudburst</i> in Catalog</a>