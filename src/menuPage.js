export function menuPage() {
  const menuPageContainer = document.createElement("div");
  menuPageContainer.classList.add("menu-page-container");

  const starters = document.createElement("div");
  const startersTitle = document.createElement("h2");
  startersTitle.setAttribute("id", "startersTitle");
  startersTitle.textContent = "Starters";
  starters.appendChild(startersTitle);
  const startersContent = document.createElement("div");
  startersContent.classList.add("dish-content");
  starters.appendChild(startersContent);
  menuPageContainer.appendChild(starters);

  const mainCourse = document.createElement("div");
  const mainCourseTitle = document.createElement("h2");
  mainCourseTitle.setAttribute("id", "mainCourseTitle");
  mainCourseTitle.textContent = "Main Course";
  mainCourse.appendChild(mainCourseTitle);
  const mainCourseContent = document.createElement("div");
  mainCourseContent.classList.add("dish-content");
  mainCourse.appendChild(mainCourseContent);
  menuPageContainer.appendChild(mainCourse);

  const dessert = document.createElement("div");
  const dessertTitle = document.createElement("h2");
  dessertTitle.setAttribute("id", "dessertTitle");
  dessertTitle.textContent = "Dessert";
  dessert.appendChild(dessertTitle);
  const dessertContent = document.createElement("div");
  dessertContent.classList.add("dish-content");
  dessert.appendChild(dessertContent);
  menuPageContainer.appendChild(dessert);

  // MAP DISHES' KEYS TO CORRESPONDING ELEMENTS AND SORT BY TYPE:

  menu.currentMenu.map((dish) => {
    const dishContainer = document.createElement("div");
    dishContainer.classList.add("dish-container");

    const dishName = document.createElement("h3");
    dishName.textContent = `${dish.dishName}`;
    dishContainer.appendChild(dishName);

    const dishDescription = document.createElement("p");
    dishDescription.classList.add("dish-description");
    dishDescription.textContent = `${dish.description}`;
    dishContainer.appendChild(dishDescription);

    const dishPrice = document.createElement("p");
    dishPrice.classList.add("dish-price");
    dishPrice.textContent = `${dish.price}`;
    dishContainer.appendChild(dishPrice);

    dish.type == "starters"
      ? startersContent.appendChild(dishContainer)
      : dish.type == "main-course"
      ? mainCourseContent.appendChild(dishContainer)
      : dessertContent.appendChild(dishContainer);
  });

  // EVENT LISTENER FOR OPENING/CLOSING MENU SECTIONS:

  let startersVisibility = false;
  let mainCourseVisibility = false;
  let dessertVisibility = false;

  menuPageContainer.addEventListener("click", (e) => {
    let arrow = e.target.id;

    if (arrow == "startersTitle") {
      if (startersVisibility == true) {
        startersContent.style.display = "none";
        startersTitle.classList.remove("open");
        startersVisibility = false;
        return;
      }
      startersContent.style.display = "block";
      startersTitle.classList.add("open");
      startersVisibility = true;
      mainCourseContent.style.display = "none";
      mainCourseTitle.classList.remove("open");
      mainCourseVisibility = false;
      dessertContent.style.display = "none";
      dessertTitle.classList.remove("open");
      dessertVisibility = false;
    } else if (arrow == "mainCourseTitle") {
      if (mainCourseVisibility == true) {
        mainCourseContent.style.display = "none";
        mainCourseTitle.classList.remove("open");
        mainCourseVisibility = false;
        return;
      }
      startersContent.style.display = "none";
      startersTitle.classList.remove("open");
      startersVisibility = false;
      mainCourseContent.style.display = "block";
      mainCourseTitle.classList.add("open");
      mainCourseVisibility = true;
      dessertContent.style.display = "none";
      dessertTitle.classList.remove("open");
      dessertVisibility = false;
    } else if (arrow == "dessertTitle") {
      if (dessertVisibility == true) {
        dessertContent.style.display = "none";
        dessertTitle.classList.remove("open");
        dessertVisibility = false;
        return;
      }
      startersContent.style.display = "none";
      startersTitle.classList.remove("open");
      startersVisibility = false;
      mainCourseContent.style.display = "none";
      mainCourseTitle.classList.remove("open");
      mainCourseVisibility = false;
      dessertContent.style.display = "block";
      dessertTitle.classList.add("open");
      dessertVisibility = true;
    } else {
      return;
    }
  });

  return menuPageContainer;
}

// STORE EACH DISH IN AN ARRAY;

const menu = {
  currentMenu: [],

  addDish(dish) {
    this.currentMenu.push(dish);
  },
};

// CLASS FOR ALL DISHES:

const Dish = class {
  constructor(dishName, type, description, price) {
    this.dishName = dishName;
    this.type = type;
    this.description = description;
    this.price = price;
  }
};

// INSTANTIATE DISHES (in a real world scenario I would add an administrator dashboard to add dishes via input elements instead of instantiating each dish manually here):
// STARTERS:

const mushroomSalad = new Dish(
  "Mushroom Salad",
  "starters",
  "Crisp salad with sauteed mushrooms in garlic butter",
  "18.80€"
);
menu.addDish(mushroomSalad);

const friedTempuraShrimps = new Dish(
  "Fried Tempura Shrimps",
  "starters",
  "Served with salad",
  "21.80€"
);
menu.addDish(friedTempuraShrimps);

const beefCarpaccio = new Dish(
  "Beef Carpaccio",
  "starters",
  "Served with freshly grated French hard cheese",
  "19.80€"
);
menu.addDish(beefCarpaccio);

// MAIN COURSE:

const cornfedChickenBreast = new Dish(
  "Corn-fed Chicken Breast",
  "main-course",
  "Served with mashed potatoes & truffle sauce",
  "29.80€"
);
menu.addDish(cornfedChickenBreast);

const roastedDuckLegs = new Dish(
  "Roasted Duck Legs",
  "main-course",
  "Served with orange sauce, red cabbage & mashed potatoes",
  "29.50€"
);
menu.addDish(roastedDuckLegs);

const lambShank = new Dish(
  "Lamb Shank",
  "main-course",
  "Served with vegetables & mashed potatoes",
  "30.50€"
);
menu.addDish(lambShank);

// DESSERT:

const cremeBrulee = new Dish(
  "Crème Brûlée",
  "dessert",
  "Served with  caramelized  brown  sugar",
  "9.50€"
);
menu.addDish(cremeBrulee);

const chocolateSouffle = new Dish(
  "Chocolate Soufflé",
  "dessert",
  "Served warm with scoop of vanilla ice cream",
  "14.50€"
);
menu.addDish(chocolateSouffle);

const chocolateMousse = new Dish(
  "Chocolate Mousse Variety",
  "dessert",
  "Variety of dark and white chocolate, served with whipped cream",
  "12.50€"
);
menu.addDish(chocolateMousse);
