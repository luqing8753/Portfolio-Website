import React, { Component } from "react";
import Value from './Value'

// class Description extends Component {
//     render() {
//         var text = this.props.description
//         console.log(text)
//         return (
//         <div>
//             {text.split("\n").map((i,key) => {
//                 return <div key={key}>{i}</div>;
//             })}
//         </div>);
//     }
// }




const Description = (props) => {


    const numbersMultipledByTwo = Value.map((number) => {
        return <p>{ number}</p>
     })





//let value=['Item 1','Item 2','Item 3','Item 4','Item 5'];



    return(

        <div>
        {numbersMultipledByTwo}
      </div>
 
 
    );
}

export default Description;
