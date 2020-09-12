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

let cart = [],
  total = 0;

let totalPrice = () => {
  for (let i = 0; i < cart.length; i++) {
    total += cart[i].price;
    console.log("Cart Total: " + totalPrice());
  }
};

let taxFunction = () => {
  totalPrice() * 0.06;
  console.log("Taxes: " + taxFunction());
};

let shipping = () => {
  if (cart.length > 0 && cart.length <= 2) {
    cart.length * 5;
  } else if (cart.length > 2 && cart.length <= 5) {
    cart.length * 3;
  } else {
    cart.length * 2;
  }
  console.log("Shipping: " + shipping());
};

let grandTotal = () => {
  totalPrice() + taxFunction() + shipping();
  console.log("Final Price" + grandTotal());
};

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
  //items in cart with prices
  {
    const cartPage = document.getElementsByClassName("container1");

    for (let i = 0; i < inventory.length; i++)
      const cartItem = document.createElement("div");

    const itemName = document.createElement("h3");
    const remove = document.createElement("button");
    const itemPrice = document.createElement("span");

    itemName.innerText = cart[i].name;
    remove.innerText = "X";
    itemPrice.innerText = cart[i].price;

    cartItem.append(itemName);
    cartItem.append(remove);
    cartItem.append(itemPrice);

    container1.append(cartItem);
  }
  //subtotal to go under the individual items
  {
    const subtotalLine = document.getElementById("container1");
    const subtotal = document.createElement("div");
    const subtotalText = document.createElement("h3");
    const subPrice = document.getElementById("span");
    subtotal.innerText = "Subtotal:";
    subPrice.innerText = totalPrice();

    subtotal.append(subtotalText);
    subtotal.append(subPrice);
    subtotalLine.append(subtotal);
  }

  //tax, shipping, and total
  {
    const finalPrice = document.getElementById("container1");
    const taxAndTotal = document.createElement("div");

    const tax = document.createElement("p");
    const taxText = document.createElement("span");
    let taxNumber = document.createElement("span");
    taxText.innerText = "Tax:";
    taxNumber.innerText = taxFunction();

    const ship = document.createElement("p");
    const shipText = document.createElement("span");
    let shipNumber = document.createElement("span");
    taxText.innerText = "Shipping:";
    taxNumber.innerText = shipping();

    const grand = document.createElement("p");
    const grandText = document.createElement("span");
    let grandNumber = document.createElement("span");
    grandText.innerText = "Total:";
    grandNumber.innerText = grandTotal();

    tax.append(taxText);
    tax.append(taxNumber);
    taxAndTotal.append(tax);

    ship.append(shipText);
    ship.append(shipNumber);
    taxAndTotal.append(ship);

    grand.append(grandText);
    grand.append(grandNumber);
    taxAndTotal.append(grand);

    container1.append(taxAndTotal);

  }


let showCart = () => {
  cart = JSON.parse(window.localStorage.getItem("cart"));
  console.log(cart);
};

let showCart = () => {
  cart = JSON.parse(window.localStorage.getItem("cart"));
  console.log(cart);
};

const getAllProducts = () => {
  getProducts("succulents");
  getProducts("petFriendly");
  getProducts("beginnerFriendly");
  getProducts("luxury");
};


function ccSelection() {
  var x = document.getElementById("shipBillContainer");
  var c = (document.getElementById("cashPayment").style.display = "none");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function cashSelection() {
  var c = document.getElementById("cashPayment");
  var x = (document.getElementById("shipBillContainer").style.display = "none");
  if (c.style.display === "none") {
    c.style.display = "block";
  } else {
    c.style.display = "none";
  }

}


