import React, { useState, useEffect } from "react";
// styles
import "./App.css";
import AddBtn from "./components/AddBtn/AddBtn";
import AddCard from "./components/AddCard/AddCard";
import Card from "./components/Card/Card.js";
import DrawBtn from "./components/DrawBtn/DrawBtn.js";
import { database } from "./config";
function App() {
  const [cards, setCards] = useState([]);
  const [currentCard, setCurrentCard] = useState();
  useEffect(() => {
    let arr = [];
    database.on("value", (snap) => {
      let obj = snap.val();
      console.log(snap.val());
      for (var key in obj) {
        arr.push({
          eng: obj[key].eng,
          kanji: obj[key].kanji,
          hirigana: obj[key].hirigana,
          _id: key,
        });
      }
      setCards(arr);
      setCurrentCard(getRandomCard(arr));
    });
  }, []);

  const getRandomCard = (c) => {
    return c[Math.floor(Math.random() * c.length)];
  };
  const drawCard = () => {
    setCurrentCard(getRandomCard(cards));
  };

  return (
    <div className="App">
      {currentCard && (
        <>
          <div className="cardRow">
            <Card
              eng={currentCard.eng}
              kanji={currentCard.kanji}
              hirigana={currentCard.hirigana}
            />
          </div>
          <div className="btnRow">
            <AddBtn />
            <DrawBtn drawCard={drawCard} />
          </div>
        </>
      )}
      <div className="addCard">
        <AddCard />
      </div>
    </div>
  );
}

export default App;
