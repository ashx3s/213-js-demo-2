"use strict";

// 1. Basic If Else Pattern with DOM Manipulation

let timeOfDay = "morning";
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

// 2. Advanced Pattern Object Lookup
// greetings object can be used in the first example
const greetings = {
  morning: "Good Morning!!",
  afternoon: "Good Afternoon!!",
  evening: "Good Evening!!",
};
const greetElTwo = document.querySelector("#greeting-field");
// function getGreeting.
const getGreeting = (time) =>
  greetings[time.toLowerCase()] || "The time of day is unknown";

greetElTwo.textContent = getGreeting(timeOfDay);

// Example 3: Interactive array based cycling

const greetArr = [
  "Glorious Morning!!!",
  "Fabulous Afternoon!!!",
  "Stupendous Evening!!!",
];

let currentIndex = 0;

// function declaration
const updateGreeting = () => {
  const greetField = document.querySelector("#greeting-field-interactive");
  greetField.textContent = greetArr[currentIndex];
};

// function invocation
updateGreeting();

const toggleButton = document.querySelector("#cycle-time-button");

toggleButton.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % greetArr.length;
  console.log(currentIndex);
  updateGreeting();
});
