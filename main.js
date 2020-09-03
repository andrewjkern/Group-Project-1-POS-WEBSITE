let inventory = {
  succulents: [
    {
      id: 0,
      sku: 1,
      name: "Cactus",
      category: "Succulents",
      description: "Rugged, yet beautiful.",
      price: 10,
      image: "",
    },
    {
      id: 1,
      sku: 2,
      name: "Chicks and Hens",
      category: "Succulents",
      description: "The classic succulent.",
      price: 10,
      image: "",
    },
    {
      id: 2,
      sku: 3,
      name: "Snake Plant",
      category: "Succulents",
      description: "Watch it grow from small to tall.",
      price: 10,
      image: "",
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
      image: "",
    },
    {
      id: 1,
      sku: 5,
      name: "Ponytail Palm",
      category: "Pet-Friendly",
      description: "A tropical paradise at home.",
      price: 10,
      image: "",
    },
    {
      id: 2,
      sku: 6,
      name: "Money Tree Plant",
      category: "Pet-Friendly",
      description: "Have your home looking like a million bucks.",
      price: 10,
      image: "",
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
      image: "",
    },
    {
      id: 1,
      sku: 8,
      name: "Pothos",
      category: "Beginner-Friendly",
      description: "The devil's advocate.",
      price: 10,
      image: "",
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
      image: "",
    },
    {
      id: 1,
      sku: 10,
      name: "Peace Lilly",
      category: "Luxury",
      description: "Take a deep breath.",
      price: 10,
      image: "",
    },
  ],
};

const getProducts = (category) => {
  const succulent = document.getElementById(succulents);
  for (let i = 0; i > inventory["succulents"].length; i++);
  const div1 = document.createElement("div");
};
