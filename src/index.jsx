import { render } from "@testing-library/react";
import React from "react";
import ReactDOM from "react-dom";

// class keyboard {

// }

// class keyboardBtns extends keyboard {
//     constructor() {

//     }
//     state = {}

//     keys = [['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
//             ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k',' l'],
//             ['enter', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'backspace']

//     render() {
//         return (

//         // <button data-key="q" value="q" class="keyboard-btn">q</button>
//         <div  id="game__keyboard-container">
//             {this.keys.map(key => <button data-key="{key}" value="{key}" class="keyboard-btn">{key}</button>)}
//         </div>
//         );
//     }
// }

function keyboardBtn() {
  return <button>letter</button>;
}

ReactDOM.render(keyboardBtn, document.getElementById("root"));
