const { Client, Message, MessageAttachment } = require('discord.js');
const SnakeGame = require('snakecord');

module.exports = {
    name: 'snake',
    category: 'fun',
    description: 'Play snake game',

    async execute(client, message, args) {

    const snakeGame = new SnakeGame({
      title: 'Snake Game',
      color: 'BLUE',
      timestamp: false,
      gameOverTitle: 'Game Over!',
    });

    snakeGame.newGame(message);
  },
};