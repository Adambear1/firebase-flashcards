import React from "react";
// styles
import "./styles.css";

const speak = (hirigana, rate) => {
  let voice = new SpeechSynthesisUtterance();
  voice.lang = "ja-JP";
  voice.volume = 0.8;
  voice.text = hirigana;
  voice.rate = rate;
  window.speechSynthesis.speak(voice);
};

export default function Card({ eng, kanji, hirigana }) {
  return (
    <div className="card-container">
      <div className="card">
        <div className="front">
          <div className="kanji">{kanji}</div>
          <hr />
          <div
            className="hirigana hirigana-hidden"
            onClick={(e) =>
              e.target.classList.contains("hirigana-hidden")
                ? e.target.classList.remove("hirigana-hidden")
                : e.target.classList.add("hirigana-hidden")
            }
          >
            {hirigana}
          </div>
          <hr />
          <div
            className="eng eng-hidden"
            onClick={(e) =>
              e.target.classList.contains("eng-hidden")
                ? e.target.classList.remove("eng-hidden")
                : e.target.classList.add("eng-hidden")
            }
          >
            {eng}
          </div>
          <hr />
          <br />
          <br />
          <button
            className="speaker"
            role="img"
            aria-label="speaker"
            onClick={() => speak(hirigana, 1)}
          >
            <i class="fas fa-volume-up fa-2x"></i>
          </button>
          <button
            className="speaker"
            role="img"
            aria-label="speaker"
            onClick={() => speak(hirigana, 0.5)}
          >
            <span>🐢</span>
          </button>
        </div>
      </div>
    </div>
  );
}
