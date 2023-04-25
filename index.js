// Error Lens VS Code Extensions

import emoji from 'node-emoji';

const emojiName = process.argv[2];

if (!emojiName) {
  const randomEmoji = emoji.random();
  console.log(randomEmoji.emoji);
} else if (emojiName) {
  const foundEmoji = emoji.find(emojiName);

  if (foundEmoji) {
    // If the emoji exists (is valid)
    console.log(foundEmoji.emoji);
  } else {
    // If the emoji doesn't exist (is invalid)
    // print an error message
    console.log('invalid emoji name');
  }
}
