const jokeHolder = document.querySelector(".joke");
const jokeButton = document.querySelector(".getJoke");
const loader = document.querySelector(".loader");

const buttonText = [
  "Ugh.",
  "🤦🏻‍♂️",
  "omg dad.",
  "you are the worst",
  "seriously",
  "stop it.",
  "please stop",
  "that was the worst one",
];

async function fetchJoke() {
  loader.classList.remove("hidden"); // Show loader
  jokeButton.disabled = true; // Disable the button

  const response = await fetch("https://icanhazdadjoke.com", {
    headers: {
      Accept: "application/json",
    },
  });

  const data = await response.json();

  loader.classList.add("hidden"); // Hide loader
  jokeButton.disabled = false; // Enable the button
  return data.joke;
}

function randomItemFromArray(arr, not) {
  const item = arr[Math.floor(Math.random() * arr.length)];
  return item === not ? randomItemFromArray(arr, not) : item;
}

async function handleClick() {
  const joke = await fetchJoke();
  jokeHolder.textContent = joke;

  // Change button text randomly
  jokeButton.textContent = randomItemFromArray(buttonText, jokeButton.textContent);
}

jokeButton.addEventListener("click", handleClick);

