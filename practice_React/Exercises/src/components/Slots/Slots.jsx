import { useEffect, useState } from "react";
const SlotGame = () => {
  const [emoji1, setEmoji1] = useState("🍒");
  const [emoji2, setEmoji2] = useState("🍒");
  const [emoji3, setEmoji3] = useState("🍒");
  const [result, setResult] = useState();

  const emojis = ["🍒", "🍋", "🍉", "🍇", "🍌"];

  const spin = () => {
    setEmoji1(emojis[Math.floor(Math.random() * emojis.length)]);
    setEmoji2(emojis[Math.floor(Math.random() * emojis.length)]);
    setEmoji3(emojis[Math.floor(Math.random() * emojis.length)]);
  };

  useEffect(() => {
    if (emoji1 === emoji2 && emoji2 === emoji3) {
      setResult(true);
    } else {
      setResult(false);
    }
  }, [emoji1, emoji2, emoji3]); // Se ejecuta cuando cualquiera de los emojis cambie

  return (
    <div>
      <h1>🎰 Slot Machine 🎰</h1>
      <div style={{ fontSize: "50px" }}>
        {emoji1} {emoji2} {emoji3}
      </div>
      <button onClick={spin}>Spin</button>

      {result ? (
        <h2 style={{ color: "green" }}>🎉 WINNER 🎉</h2>
      ) : (
        <h2 style={{ color: "yellow" }}>😢 LOSER 😢</h2>
      )}
    </div>
  );
};

export default SlotGame;

