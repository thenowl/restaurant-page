import "./styles.css";
import { homePage } from "./homePage.js";
import { menuPage, menu } from "./menuPage.js";
import { aboutPage } from "./aboutPage.js";
import { contactPage } from "./contactPage.js";

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

  const picturesCredit = document.createElement("p");
  picturesCredit.innerHTML = `Image taken from <a href="https://www.freepik.com/" target="_blank">Freepik</a>`;
  picturesCredit.classList.add("picture-credit");
  footer.appendChild(picturesCredit);
  body.appendChild(footer);

  content.appendChild(homePage());

  nav.addEventListener("click", switchPages);

  function switchPages(e) {
    let pageSelection = e.target.id;

    if (!pageSelection) return;

    content.textContent = "";

    pageSelection == "homeButton"
      ? content.appendChild(homePage())
      : pageSelection == "menuButton"
      ? content.appendChild(menuPage())
      : pageSelection == "aboutButton"
      ? content.appendChild(aboutPage())
      : content.appendChild(contactPage());
  }
})();
