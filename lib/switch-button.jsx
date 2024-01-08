'use client';

import { useState } from 'react';

// Define a custom component for the button
export default function SwitchButton() {
  // Use useState to create a state variable called checked
  // and a function to update it called setChecked
  // The initial value of checked is false
  const [checked, setChecked] = useState(false);

  // Define a function to handle the click event on the button
  function handleClick() {
    // Toggle the value of checked by using setChecked
    setChecked(!checked);
  }

  // Return the JSX code for the button
  return (
    <div
      // Add an onclick attribute to assign the handleClick function to the button
      onClick={handleClick}
      // Add some styles for the button
      className={`bg-slate-300 ${
        checked ? 'pointer-events-auto cursor-pointer h-6 w-10 rounded-full p-1 ring-1 ring-inset transition duration-200 ease-in-out bg-indigo-600 ring-black/20' : 'pointer-events-auto h-6 w-10 rounded-full p-1 ring-1 ring-inset transition duration-200 ease-in-out bg-slate-400 ring-slate-500 cursor-pointer'
      }`}
    >
      {/* Use a checkbox input to store the state of the button */}
      <input type='checkbox' id='switch' hidden checked={checked} />
      {/* Use a div to display the slider */}
      <div
        // Add some styles for the slider
        className={`h-4 w-4 rounded-full bg-white shadow-sm ring-1 ring-slate-700/10 transition duration-200 ease-in-out ${
          checked ? 'translate-x-4' : 'translate-x-0'
        }`}
      ></div>
    </div>
  );
}
