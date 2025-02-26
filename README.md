# Bubble Game

Welcome to the **Responsive Bubble Game**! This is an interactive and engaging game built using HTML, CSS, and JavaScript. The game dynamically generates bubbles on the screen, and the player needs to pop them by clicking on the correct one. The game is fully responsive, ensuring smooth gameplay across different devices.

## 🚀 Features
- **Fully Responsive**: Works on desktops, tablets, and mobile devices.
- **Dynamic Bubble Generation**: Bubbles are created randomly on the screen.
- **Timer-Based Gameplay**: Players must pop the correct bubble before time runs out.
- **Score System**: Each correct pop increases the score.
- **Interactive UI**: Smooth animations and a user-friendly interface.
- **Difficulty Levels**: The game gets challenging over time.
- **Randomized Target Number**: Players must match the target number by clicking the correct bubble.

## 🛠️ Technologies Used
- **HTML**: Structure of the game.
- **CSS**: Styling and responsiveness.
- **JavaScript**: Game logic and interactivity.

## 📜 How to Play
1. Start the game, and a **target number** will appear at the top.
2. Randomly generated bubbles will display numbers.
3. Click the bubble that matches the target number.
4. Each correct click increases your score.
5. If you click the wrong bubble, no points are awarded.
6. The game runs on a **timer**, so act quickly!
7. Try to score as high as possible before time runs out.

## 🎮 Installation Guide
Follow these steps to download and run the game on your local machine:

1. **Clone the repository**
   ```sh
   git clone https://github.com/yourusername/bubble-game.git
   ```
2. **Navigate to the project folder**
   ```sh
   cd bubble-game
   ```
3. **Open the game in your browser**
   - If you have Live Server installed in VS Code, right-click `index.html` and select **Open with Live Server**.
   - Or, manually open `index.html` in your browser.

## 📂 Project Structure
```
Bubble-Game/
│── index.html        # Main HTML file
│── style.css         # Styling file
│── script.js         # JavaScript logic
│── assets/           # Images, icons, and other assets
│── README.md         # Documentation
```

## 🎨 Customization
Want to personalize the game? Here are some ways to modify it:
- **Change Colors**: Modify `style.css` to update the UI color scheme.
- **Adjust Timer**: Change the game duration in `script.js`.
- **Modify Bubble Count**: Increase or decrease the number of bubbles generated.
- **Add Sound Effects**: Implement sounds for bubble popping.

## 🛑 Known Issues & Fixes
| Issue | Solution |
|--------|---------|
| Bubbles overlap on small screens | Adjust CSS media queries in `style.css` |
| Game timer stops working | Ensure setInterval is correctly implemented in `script.js` |
| Clicks not registering properly | Check event listeners for accuracy |

## 📌 Future Enhancements
- Adding different difficulty modes.
- Implementing power-ups like extra time or bonus points.
- Storing high scores using local storage.
- Adding background music and sound effects.
- Introducing different themes.

## 📜 License
This project is open-source and available under the **MIT License**.

## 🤝 Contributing
Feel free to contribute! Fork the repository, make changes, and submit a pull request.

---
Enjoy playing the Bubble Game! 🎈🔥

