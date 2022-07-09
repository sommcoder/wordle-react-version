import { render } from "@testing-library/react";
import React from "react";
import KeyRow from "./Key";

function Keyboard() {
  render(<div>{KeyRow}</div>);
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
