# Troll Face Website

A prank website where every button or interactive element redirects to a different troll face page.

## Setup Instructions

1. **No Image Download Required**
   - The website now uses online images from public sources
   - All troll face images are loaded directly from wikimedia and other public image hosts

2. **No Audio Download Required**
   - Audio files are also loaded from public sources
   - If these sources become unavailable, the code includes fallback options

3. **Create More Troll Pages (Optional)**
   - Use the existing troll pages as templates to create more variations
   - Update the `trollPages` array in `script.js` if you add new pages

## How to Use

1. **Local Testing**
   - Open `index.html` in a web browser to test locally
   - Click on any button, link, or interactive element to be redirected to a random troll page
   - No internet connection is required to test the basic functionality, but images and sounds require internet

2. **Web Hosting**
   - Upload the entire `troll-website` folder to any web hosting service
   - Share the link with friends to troll them

## Features

- Professional-looking main page to trick visitors
- Multiple unique troll face pages with different effects:
  - Classic Troll: Original troll face with "Problem?" text
  - Animated Troll: Troll face that moves around when you try to catch it
  - Earrape Troll: Loud audio with vibrating, color-changing effects
  - Fake Loading Troll: Shows a loading bar that never completes
  - Jumpscare Troll: Normal page that suddenly shows troll face with sound
  - Fake Virus Scanner: Mimics an antivirus with fake alerts and popups
  - Impossible Maze: A maze game where success is impossible
- Random redirect system for maximum surprise
- Hard-to-close pages with onbeforeunload warnings

## Advanced Troll Features

1. **Cursor Effects**
   - The Maze Troll page features a custom cursor that's difficult to control
   - Some pages trap your cursor or make it behave unpredictably

2. **Popup Chains**
   - The Virus Scanner Troll creates endless popup chains
   - Each attempt to close alerts leads to more alerts

3. **Time-Delayed Pranks**
   - The Jumpscare page waits a random amount of time before revealing the troll
   - This builds tension and maximizes surprise

4. **Audio Trolling**
   - Different sound effects for different troll scenarios
   - Volume levels are intentionally surprising

5. **Interactive Impossibility**
   - Some pages present seemingly doable tasks that are actually impossible
   - The maze finish line moves away as you approach it

## Additional Ideas for Future Trolls

- **Fake Update Screen**: A page that looks like a Windows/Mac update screen that never finishes
- **Typo Game**: Asks users to type a sentence, but always shows typos regardless of input
- **Reverse Mouse**: A page that inverts mouse movements
- **Gravity Cursor**: The cursor is affected by "gravity" and falls to the bottom of the screen
- **Fake Error BSOD**: Classic blue screen of death that looks real
- **Glitching UI**: Elements that move away when you try to click them
- **Memory Game**: A memory game where the tiles change positions when you're not looking
- **Fake Login**: Looks like a social media login but always shows "incorrect password"
- **Slow Motion**: Page that gradually gets slower until it's unusably slow

## Troubleshooting

- **Images Not Loading**: Check your internet connection - the website relies on online images
- **Audio Not Playing**: Some browsers block autoplay audio. Add a manual click on the page to enable audio
- **Redirects Not Working**: Check the JavaScript console for errors

## Disclaimer

Use this website responsibly and only with people who have a good sense of humor.

## License

Feel free to modify and share this project however you want! 