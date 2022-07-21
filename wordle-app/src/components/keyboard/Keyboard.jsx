import React from "react";
import Key from "./Key";
import KeyRow from "./Key";

export default function Keyboard(props) {
  render(
    <div>
      {rowLetters.forEach((el) =>
        el.letters.map((key) => <Key key={rowLetters.row} />)
      )}
    </div>
  );
}

// import Key from "Key.js";

// export default function Keyboard(props) {
//   return (
//     // React components need to be differentiated somehow, a popular convention is to use the key attribute
//     <div className={`keyboard-row-${row}`}>
//       <Key data-key={props} />
//     </div>
//   );
// }

// // class KeyBoard extends React.Component {
// //   renderKey(i) {
// //     return <Key value={i} />;
// //   }
// // }
