---
title: Cloudburst Manual
tag: cloudburst
desc: How to get started and check the forecast!
---
![Cloudburst](/blog/images/2025-02-07-1.png)

## Synopsis

> *Real-time weather. On your Playdate.*

Curious what the forecast looks like? Easy! But...your laptop out of reach, your phone's battery is dead, your smart assistant's brain is busted, and your curtains are shut. It's just you, and your Playdate. What can you do? Well, here is your answer! Leveraging state-of-the-art networking capabilities, *Cloudburst* is a fully seamless, on-line enabled weather app for your Playdate!

Get the forecast here, there, or anywhere — it's compatible with cities around the world! See detailed stats such as hourly forecast, precipitation, wind, and more. Change settings to your heart's content, and even use it as a low-power screensaver — the perfect desk buddy. No external tools or setup required, just download and go — it's weather, untethered.

# Basics

This app connects to an external on-line API, to enable sending and receiving of data including weather information. To use this app, make sure your Playdate has an active Wireless connection.

## Controls

The D-pad and A and B buttons are used to navigate menus. The crank is optionally used in menus, but required to display detailed weather information. Within the app, context is provided as to which controls will perform what actions.

## Initialization

When you first start the app, you'll be prompted to provide an approximate location. *This data will be shared with the API service to gather information about your area. This information isn't shared anywhere else on-line, but will be saved on your Playdate's local disk.*

After providing a location, you'll be prompted to adjust a few settings — namely, temperature preference, and measurement preference. After this, the Playdate will attempt to connect to the Internet and grab weather data for your area.

## Where are you?

If your given location data returns multiple potential results, you'll be asked to pick from a list which one aligns most with your location. You'll be able to determine which location is yours using country code and approximate region (if available).

# Weather

## Main Screen

The main screen always shows your area's current temperature and estimated forecast, your console's local time, and current battery estimate.

When plugged in, animated wallpapers will refresh at 30 frames per second. When running on battery, the display will enter a lower-power state to save energy.

## The Fold™

By using the crank on the main screen, you can wring up The Fold™. This contains more detailed weather info for your current location, such as:

- Local time
- Current temperature and estimated forecast
- Estimated temperature and forecast for the next six hours
- "Feels like" temperature, and HI/LO temps for the day
- Sunrise and sunset times
- Humidity, now and within the next hour
- Precipitation, now and within the next hour
- Estimated forecast, HI/LO temp, and sunrise/sunset times for the next day

# Options

In this app, there are a variety of options you can change to fully optimize your experience.

- Change area: Edit your location area used for gathering weather data. This can be changed as many times as you wish.
- Temperature: Choose between Celsius or Fahrenheit readings for temperature info.
- Measurement: Choose between Metric or Imperial readings for measurement info.
- Idle refresh rate: Decide how often the app will try to grab new weather data while idling.
- Auto-lock %: When the console reaches this battery percentage, it will automatically lock after three minutes without input.
- Music: Toggles music in the Initialization screen.
- Sound Effects: Toggles sound effects throughout the app.
- Wallpaper: Choose the wallpaper that is displayed on the idle screen.
	- Default: The default setting; chill Cloudburst waves.
	- Earth: A replication of the "Initialization" screen; a spinning globe in a starfield.
	- Temp. Focus: A lower-power display that brings the temperature front-and-center.
	- Clock Focus: A second low-power display that shows the current console time in large text.
	- Custom Img.: If the console detects a 400x240 `.pdi`-converted image (no transparency) in `Data/wtf.rae.cloudburst/images/custom.pdi`, you can use this image as your wallpaper.
- Invert display: choose whether the display should be inverted. "On noons" will flip between them automatically — non-inverted from midnight to noon, and inverted from noon to midnight.

# Credits

- Art, Code, & Music — [Rae](https://rae.wtf)
- Addtl. music — Scratchminer
- SFX — [pixabay.com](https://pixabay.com/); [License](https://pixabay.com/service/terms/)
- Weather Data — [open-meteo](https://open-meteo.com); [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)
- Planet animation — [Pixel Planet Generator](https://deep-fold.itch.io/pixel-planet-generator)
- [Tanuk](https://github.com/Schyzophrenic/Tanuk_CodeSequence) library — [Toad](https://toadleyundercontrol.itch.io/) & [Schyzo](https://twitter.com/Schyzo99); [MIT](https://github.com/Schyzophrenic/Tanuk_CodeSequence/blob/main/LICENSE)
- Sasser Slab, Roobert, Mikodacs Clock — [Panic](https://panic.com); [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)

# Changelog

## Version 1.0.0
### ???

- Initial release.

<br>
<a href="https://stuffbyrae.itch.io/cloudburst" class="button">Download <i>Cloudburst</i> on Itch.io</a>