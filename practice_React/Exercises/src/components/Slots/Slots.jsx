import { useEffect, useState } from "react";
const SlotGame = () => {
  const [emoji1, setEmoji1] = useState("🍒");
  const [emoji2, setEmoji2] = useState("🍒");
  const [emoji3, setEmoji3] = useState("🍒");
  const [result, setResult] = useState("");

  const emojis = ["🍒", "🍋", "🍉", "🍇", "🍌"];

  const spin = () => {
    setEmoji1(emojis[Math.floor(Math.random() * emojis.length)]);
    setEmoji2(emojis[Math.floor(Math.random() * emojis.length)]);
    setEmoji3(emojis[Math.floor(Math.random() * emojis.length)]);
  };

  useEffect(() => {
    if (emoji1 === emoji2 && emoji3 === emoji2) {
      setResult(true);
    } else {
      setResult(false);
    }
  }, [emoji1, emoji2, emoji3]);
  return (
    <div>
      <h1>🎰 Slot Machine 🎰</h1>
      <div
        style={{
          fontSize: "50px",
          border: "2px solid black",
          borderRadius: "10px",
          justifyContent: "space-around",
          alignItems: "center",
          padding: "10px",
          margin: "10px",
        }}
      >
        {emoji1} {emoji2} {emoji3}
        
        {result ? (
          <h4 style={{ color: "green" }}>🎉 WINNER 🎉</h4>
        ) : (
          <h4 style={{ color: "yellow" }}>😢 LOSER 😢</h4>
        )}
      </div>
      <button onClick={spin}>Spin</button>
    </div>
  );
};

export default SlotGame;

