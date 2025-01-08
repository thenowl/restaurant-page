import "./styles.css";
import { initPageLoad } from "./initPageLoad.js";

(function pageStatics() {
  const body = document.body;
  const header = document.createElement("header");
  body.appendChild(header);

  const title = document.createElement("h1");
  title.textContent = "peu à peu";
  header.appendChild(title);

  const nav = document.createElement("nav");
  header.appendChild(nav);

  const homeButton = document.createElement("button");
  homeButton.setAttribute("id", "homeButton");
  homeButton.textContent = "Home";
  nav.appendChild(homeButton);

  const menuButton = document.createElement("button");
  menuButton.setAttribute("id", "menuButton");
  menuButton.textContent = "Menu";
  nav.appendChild(menuButton);

  const aboutButton = document.createElement("button");
  aboutButton.setAttribute("id", "aboutButton");
  aboutButton.textContent = "About";
  nav.appendChild(aboutButton);

  const contactButton = document.createElement("button");
  contactButton.setAttribute("id", "contactButton");
  contactButton.textContent = "Contact";
  nav.appendChild(contactButton);

  const content = document.createElement("div");
  content.setAttribute("id", "content");
  content.classList.add("content");
  body.appendChild(content);

  const footer = document.createElement("footer");
  const footerText = document.createElement("p");
  footerText.textContent = "Created by TheNowl";
  footer.appendChild(footerText);
  body.appendChild(footer);
})();

initPageLoad();
