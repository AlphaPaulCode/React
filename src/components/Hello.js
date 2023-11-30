 import React from "react";

 let Hello = () => {
    // return (
    //     <div>
    //         <h1>Hello World</h1>
    //     </div>
    // )

    return React.createElement(
    'div',
     {id: 'hi', className: 'dummyClass'},
      React.createElement('h1', null, 'Hello World') )
 }
 export default Hello