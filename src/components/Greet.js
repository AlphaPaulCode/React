import React from 'react'

// function Greet(){
//     return(
//         <h1>
//             Hello Paul
//         </h1>
//     )
// }

let Greet = (props) =>{
console.log(props) 
return (
    <div>
        <h1>Hello {props.name} a.k.a {props.heroName}</h1>
    </div>
)
} 
export default Greet 