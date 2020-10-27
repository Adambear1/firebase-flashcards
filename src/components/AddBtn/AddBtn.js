import React from "react";

export default function AddBtn({ addCard }) {
  return (
    <div className="btnContainer">
      <button className="btn" onClick={addCard}>
        <i class="fas fa-plus-circle fa-3x"></i>
      </button>
    </div>
  );
}
