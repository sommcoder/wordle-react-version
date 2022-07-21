import React, { useState } from "react";
// each letter key should have a state that tells React how to render each key

// // // keyboard array rows:

// enter and backspace buttons are rendered separately since they're unique!

function populateKeyRow(arr) {
  const KeyRow1 = arr.map((letter) => <button>{letter}</button>);
  return KeyRow1;
}


function 
  const rowLetters = [
    {
      row: "row_1",
      letters: ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
    },
    { row: "row_2", letters: ["a", "s", "d", "f", "g", "h", "j", "k", "l"] },
    { row: "row_3", letters: ["z", "x", "c", "v", "b", "n", "m"] },
  ];

function KeyRow() {
  return (
    <div>
      <button></button>
    </div>
  );
}

// const KeyRow1 = row_1.map((letter) => <button>{letter}</button>);
// const KeyRow2 = row_2.map((letter) => <button>{letter}</button>);
// const KeyRow3 = row_3.map((letter) => <button>{letter}</button>);
