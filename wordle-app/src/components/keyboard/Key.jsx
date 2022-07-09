import React from "react";

// export default function Key(props) {
//   return <button>Button</button>;
// }
// export default function Keyboard

// // // keyboard array rows:
const row_1 = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
const row_2 = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
const row_3 = ["z", "x", "c", "v", "b", "n", "m"];
// enter and backspace buttons are rendered separately since they're unique!

const KeyRow1 = row_1.map((letter) => <button>{letter}</button>);
const KeyRow2 = row_2.map((letter) => <button>{letter}</button>);
const KeyRow3 = row_3.map((letter) => <button>{letter}</button>);

export { KeyRow1, KeyRow2, KeyRow3 };

// import React from "react";
// import { useState } from "react";

// // const allRows = [row1, row2, row3];

// // class Key extends React.Component {
// //   render() {
// //     return <button className="key">{this.props.value}</button>;
// //   }
// // }

// const allRows = [
//   ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
//   ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
//   ["Enter", "z", "x", "c", "v", "b", "n", "m", "<-"],
// ];

// // loop through each row separately and push the letter of a row to the key component
// // should we use .map() on each row individually!?
// function populateRow(allRows) {
//   for (let i = 0; i < allRows.length; i++) {
//     let arr = allRows[i];
//     for (let j = 0; j < arr.length; j++) {
//       arr.push(Key(arr[j])); // push the letter to the Key component function
//     }
//     console.log(arr);
//   }
// }

// // populateRow(...allRows);
// populateRow(allRows);

// export default function Key(props) {
//   // const [myprop, setCount] = useState("default value");

//   return (
//     <button dataKey={props} value={props} class="keyboard-btn">
//       {props}
//     </button>
//   );
// }
