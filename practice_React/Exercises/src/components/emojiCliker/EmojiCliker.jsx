import { v4 as uuid } from "uuid";
import { useState } from "react";

const EmojiCliker = () => {
  const randomEmoji = () => {
    const emojis = ["😀", "😁", "😂", "🤣", "😃", "😄", "😅", "😆", "😉", "😊"];
    const randomIndex = Math.floor(Math.random() * emojis.length);
    return emojis[randomIndex];
  };

  const [emojis, setEmoji] = useState([{ id: uuid(), emoji: randomEmoji() }]);

  return (
    <div>
      <h1>Emoji Clicker</h1>

      {emojis.map((actualEmoji) => (
        <span
          onClick={() => {
            const newEmoji = emojis.filter(
              (emoji) => emoji.id !== actualEmoji.id
            );
            setEmoji(newEmoji);
          }}
          key={actualEmoji.id}
        >
          {actualEmoji.emoji}
        </span>
      ))}
      <br />
      <button
        onClick={() =>
          setEmoji([...emojis, { id: uuid(), emoji: randomEmoji() }])
        }
      >
        Add Ramdon
      </button>
    </div>
  );
};

export default EmojiCliker;

