// Error Lens VS Code Extensions
// Import the node-emoji library that we installed
import emoji from 'node-emoji';

// get the emoji name that the user specified on the command line
const emojiName = process.argv[2];

if (!emojiName) {
  // if the user did not chose an emoji,
  // display a random emoji
  const randomEmoji = emoji.random();
  console.log(randomEmoji.emoji);
} else if (emojiName) {
  // if the user did specify an emoji, try
  // to find that emoji
  const foundEmoji = emoji.find(emojiName);
  if (foundEmoji) {
    // If the emoji exists (is valid),
    // print an emoji
    console.log(foundEmoji.emoji);
  } else {
    // If the emoji doesn't exist (is invalid)
    // print an error message
    console.log('invalid emoji name');
  }
}
