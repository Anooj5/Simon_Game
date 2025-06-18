# 🧠 Simon Game

A classic memory-based game rebuilt using **HTML**, **CSS**, and **jQuery**.  
Repeat the correct color sequence as it grows longer with each level. One wrong click, and it's game over!

---

## 🎮 Live Demo

👉 

---

## 📖 How the Game Works

The Simon Game is a memory challenge where the system plays a sequence of colored button flashes and sounds. The user must repeat the exact sequence to advance to the next level.

- The game starts when you press any key.
- At each level, the game adds one new color to the pattern.
- You must click the buttons in the same order as the pattern.
- If you make a mistake, the game ends and shows a "Game Over" message.
- You can restart the game by pressing any key again.

---

## 🕹️ How to Play

1. **Start the Game**: Press any key to begin.
2. **Watch the Pattern**: A color will flash and play a sound.
3. **Repeat It**: Click the color button in the same order.
4. **Advance**: Each level adds a new color to the sequence.
5. **Don't Slip!** A wrong click ends the game and resets the level.
6. **Play Again**: Press any key after a game over to restart.

---

## 🛠 Tech Stack

- **HTML5** – Page structure
- **CSS3** – Styling and animation
- **JavaScript (jQuery)** – Game logic and interactivity

---

## 📁 Project Structure

```bash
Simon_Game/
│
├── index.html       # Main HTML file
├── styles.css       # Styling for buttons and layout
├── game.js          # jQuery logic controlling the game
├── sounds/          # Sound effects for each button
│   ├── blue.mp3
│   ├── green.mp3
│   ├── red.mp3
│   ├── yellow.mp3
│   └── wrong.mp3
└── README.md        # Project documentation
