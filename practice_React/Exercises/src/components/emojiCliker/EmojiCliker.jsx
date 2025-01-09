import { useState } from "react";

const EmojiCliker = () => {
  const [emoji, setEmoji] = useState(["🥷🏻"]);

  const handleAddEmoji = () => {
    const actualEmoji = [...emoji];
    actualEmoji.push("🧑🏻‍💻");
    setEmoji(actualEmoji);
  };

  return (
    <div>
      {emoji.map((e) => (
        <>
          <span style={{ fontSize: "100px" }}>{e}</span>
        </>
      ))}
      <button onClick={handleAddEmoji}>Add Emoji</button>
    </div>
  );
};

export default EmojiCliker;

