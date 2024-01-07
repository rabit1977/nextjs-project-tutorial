// CapitalizeString.js
import React from 'react';

function CapitalizeString(props) {
  // split the string into an array of words
  const arr = props.str.split(' ');

  // use the map method to capitalize the first letter of each word
  const newArr = arr.map(word => word.charAt(0).toUpperCase() + word.slice(1));

  // use the template literals to create the new string
  const str2 = `${newArr.join(' ')}`;

  // return a JSX element that displays the capitalized string
  return <div>{str2}</div>;
}

// export the component
export default CapitalizeString;



// function CapitalizeString(props) {
//   // split the string into an array of words
//   const arr = props.str.split(' ');

//   // loop through each word and capitalize the first letter
//   for (var i = 0; i < arr.length; i++) {
//     arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
//   }

//   // join the words into a new string
//   const str2 = arr.join(' ');

//   // return a JSX element that displays the capitalized string
//   return <div>{str2}</div>;
// }

// export the component
// export default CapitalizeString;
