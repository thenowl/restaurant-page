export function initPageLoad() {
  const contentContainer = document.querySelector("#content");

  const headlineContainer = document.createElement("div");
  headlineContainer.classList.add("headlineContainer");
  const greeting = document.createElement("h2");
  greeting.classList.add("greeting");
  greeting.textContent = "Bienvenue à";
  headlineContainer.appendChild(greeting);
  const restaurantName = document.createElement("h2");
  restaurantName.classList.add("restaurantName");
  restaurantName.textContent = "peu à peu";
  headlineContainer.appendChild(restaurantName);
  contentContainer.appendChild(headlineContainer);
}
