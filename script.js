"use strict";

// 1. Basic If Else Pattern with DOM Manipulation

let timeOfDay = "Evening";
const greetElOne = document.querySelector("#greeting-message-field");

if (timeOfDay.toLowerCase() === "morning") {
  greetElOne.textContent = "Good Morning";
} else if (timeOfDay.toLowerCase() === "afternoon") {
  greetElOne.textContent = "Good Afternoon";
} else if (timeOfDay.toLowerCase() === "evening") {
  greetElOne.textContent = "Good Evening";
} else {
  greetElOne.textContent = "Time of day is unknown";
}

// Create time of day variable that could be for the afternoon, morning, evening

// 2. Advanced Pattern Object Lookup
// greetings object can be used in the first example

// function getGreeting.

// Example 3: Interactive array based cycling

// TODO: User Logged in Toggle
