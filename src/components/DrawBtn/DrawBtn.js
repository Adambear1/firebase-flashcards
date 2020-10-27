import React from "react";
import "./styles.css";

export default function DrawBtn({ drawCard }) {
  return (
    <div className="btnContainer">
      <button className="btn" onClick={drawCard}>
        <i class="fas fa-arrow-circle-right fa-3x"></i>
      </button>
    </div>
  );
}
