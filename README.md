# dice-simulator-website
Introduction
The Dice Simulator is a simple, interactive web application designed to mimic the rolling of physical dice. This project focuses on utilizing JavaScript's math functions to generate random outcomes and updating the user interface in real-time. It is ideal for board games or any situation where a quick random number between 1 and 6 is needed.

Features
Random Outcome Generation: Uses a random number generator to ensure fair and unpredictable results.

Visual Feedback: Updates the dice face image or text based on the result of the roll.

Reset Functionality: Allows users to clear the current result and roll again easily.

Responsive Layout: The interface is designed to work well on both mobile and desktop screens.

Technologies Used
HTML5: For the structure of the simulator.

CSS3: For styling the dice and the layout.

JavaScript: For the randomization logic and DOM manipulation.

How to Run the Project
Download or clone this repository to your local machine: git clone https://github.com/YuluWusu/dice-simulator-website.git

Open the project folder: cd dice-simulator

Launch the application: Open the index.html file in your web browser to start using the simulator.

Logic Overview
The core functionality relies on the following JavaScript logic:

Generating a random integer: Using Math.random() and Math.floor() to produce a value between 1 and 6.

Image Mapping: Mapping the numerical result to a specific image file representing the dice face.
