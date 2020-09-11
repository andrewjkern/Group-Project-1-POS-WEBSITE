function openNav() {
  document.getElementById("categories").style.display = "inline";
  setTimeout(() => {
    document.getElementById("categories").style.width = "150px";
  }, 100);
}

function closeNav() {
  document.getElementById("categories").style.width = "0";
  setTimeout(() => {
    document.getElementById("categories").style.display = "none";
  }, 500);
}

let inventory = {
  succulents: [
    {
      id: 0,
      sku: 1,
      name: "Cactus",
      productCategory: "productCategory",
      description: "Rugged, yet beautiful.",
      price: 10,
      image: "./images/Cactus-gray-pot-plant-succulent.jpg",
    },
    {
      id: 1,
      sku: 2,
      name: "Chicks and Hens",
      productCategory: "productCategory",
      description: "The classic succulent.",
      price: 10,
      image: "./images/chicks-and-hens-succulent.jpg",
    },
    {
      id: 2,
      sku: 3,
      name: "Snake Plant",
      productCategory: "productCategory",
      description: "Watch it grow from small to tall.",
      price: 10,
      image: "./images/snake-plant-succulent.jpg",
    },
  ],
  petFriendly: [
    {
      id: 0,
      sku: 4,
      name: "Spider Plant",
      category: "Pet-Friendly",
      description: "A wide reach.",
      price: 10,
      image: "./images/spider-plant.jpg",
    },
    {
      id: 1,
      sku: 5,
      name: "Ponytail Palm",
      category: "Pet-Friendly",
      description: "A tropical paradise at home.",
      price: 10,
      image: "./images/Pony-tail-palm-medium.jpg",
    },
    {
      id: 2,
      sku: 6,
      name: "Money Tree Plant",
      category: "Pet-Friendly",
      description: "Have your home looking like a million bucks.",
      price: 10,
      image: "./images/money-tree-plant.jpg",
    },
  ],
  beginnerFriendly: [
    {
      id: 0,
      sku: 7,
      name: "ZZ Plant",
      category: "Beginner-Friendly",
      description: "Everybody's crazy about a sharp-dressed plant.",
      price: 10,
      image: "./images/ZZ-plant.jpg",
    },
    {
      id: 1,
      sku: 8,
      name: "Pothos",
      category: "Beginner-Friendly",
      description: "The devil's advocate.",
      price: 10,

      image: "./images/pothos-plant.jpeg",
    },
  ],
  luxury: [
    {
      id: 0,
      sku: 9,
      name: "Pointsettia",
      category: "Luxury",
      description: "Why wait until the holidays?",
      price: 10,

      image: "./images/poinsettia.jpg",
    },
    {
      id: 1,
      sku: 10,
      name: "Peace Lilly",
      category: "Luxury",
      description: "Take a deep breath.",
      price: 10,

      image: "./images/peace-lily.jpg",
    },
  ],
};

let cart = [];

let addToCart = (event) => {
  cart.push(inventory[event.target.classList[0]][event.target.id]);
  window.localStorage.setItem("cart", JSON.stringify(cart));
  console.log(cart);
};

const getProducts = (category) => {
  const productCategory = document.getElementById(category);
  for (let i = 0; i < inventory[category].length; i++) {
    const itemContainer = document.createElement("div");
    itemContainer.className = "itemContainer";

    const div1 = document.createElement("h2");
    const div2 = document.createElement("div");
    const div3 = document.createElement("div");

    const button = document.createElement("button");
    button.id = i;
    button.classList.add(category);
    button.addEventListener("click", (event) => addToCart(event));

    div1.innerText = inventory[category][i].name;
    div2.innerText = inventory[category][i].description;
    div3.innerText = "$" + inventory[category][i].price;
    button.innerText = "Add to Cart";

    button.classList.add("cartButton");

    const img = document.createElement("img");
    img.src = inventory[category][i].image;
    img.classList.add("plant-image");

    itemContainer.append(img);
    itemContainer.append(div1);
    itemContainer.append(div2);
    itemContainer.append(div3);
    itemContainer.append(button);

    productCategory.append(itemContainer);
  }
};
const getAllProducts = () => {
  getProducts("succulents");
  getProducts("petFriendly");
  getProducts("beginnerFriendly");
  getProducts("luxury");
};

//Fill Cart Function is a work in progress as of push on 9.10 - Devin
let fillCart = () => {
  const cartPage = document.getElementsByClassName("container1");
  for (let i = 0; i < inventory.length; i++)
    const cartItem = document.createElement("div");

  const itemName = document.createElement("h3");
  const remove = document.createElement("button");
  const itemPrice = document.createElement("p");
};

let showCart = () => {
  cart = JSON.parse(window.localStorage.getItem("cart"));
  console.log(cart);
};
