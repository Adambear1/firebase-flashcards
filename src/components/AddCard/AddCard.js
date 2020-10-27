import React, { useRef } from "react";
import { database } from "../../config";

export default function AddCard() {
  const engRef = useRef();
  const kanjiRef = useRef();
  const hiriganaRef = useRef();
  const addCard = (e) => {
    e.preventDefault();
    // console.log({
    //   eng: engRef.current.value,
    //   kanji: kanjiRef.current.value,
    //   hirigana: hiriganaRef.current.value,
    // });
    database.push().set({
      eng: engRef.current.value,
      kanji: kanjiRef.current.value,
      hirigana: hiriganaRef.current.value,
    });
  };
  return (
    <div>
      <input type="text" name="eng" ref={engRef} placeholder="English Word" />

      <input type="text" name="kanji" ref={kanjiRef} placeholder="Kanji" />

      <input
        type="text"
        name="hirigana"
        ref={hiriganaRef}
        placeholder="Hirigana"
      />

      <button type="submit" onClick={addCard}>
        Add Card
      </button>
    </div>
  );
}
