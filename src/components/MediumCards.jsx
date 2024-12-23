import { useState, useEffect } from "react";
import MediumCard from "./MediumCard";
import Grid2 from "@mui/material/Grid2";
import rawData from "../assets/raw_data.csv";

function MediumCards(props) {
  const [counter, setCounter] = useState(5);
  const [cards, setCards] = useState([]);

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  useEffect(() => {
    const loadCards = async () => {
      const response = await fetch(rawData);
      const text = await response.text();
      const rows = text.split("\n").slice(1);
      const cardObjects = rows.map(row => {
        const columns = row.split(",");
        return {
          mainWord: columns[0],
          subWords: columns.slice(1, 6),
        };
      });
      setCards(shuffleArray(cardObjects));
    };

    loadCards();
  }, []);

  return (
    <Grid2
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
      spacing={2}
      style={{ minHeight: "100vh" }}
    >
      {cards.filter((_, index) => index <= counter).map((card, index) => (
        <Grid2 item key={index} style={{ width: "100%" }}>
          <MediumCard
            mainWord={card.mainWord}
            onIncrement={() => setCounter((prev) => Math.min(prev + 1, cards.length - 1))}
          />
        </Grid2>
      ))}
    </Grid2>
  );
}

export default MediumCards;