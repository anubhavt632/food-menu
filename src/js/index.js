const menu = [
  {
    id: 14,
    title: "Steak",
    category: "Dinner",
    price: 19.99,
    img: "https://img.freepik.com/free-photo/azerbaijani-lyulya-kebab-with-potatoes-vegetables_140725-908.jpg?t=st=1719090524~exp=1719094124~hmac=5a9972108c41f2f9bc2e87e40ded5f2979a5bf854f19ee21bed23749ecdff528&w=1480",
    desc: "Juicy steak grilled to perfection, served with a side of seasoned vegetables and a savory sauce.",
  },
  {
    id: 2,
    title: "Omelette",
    category: "Breakfast",
    price: 6.99,
    img: "https://img.freepik.com/free-photo/omelette-with-broccoli-tomatoes-red-onions-dark-table-italian-frittata-with-vegetables_2829-20241.jpg?t=st=1719090445~exp=1719094045~hmac=5aa0e0cbf33d3943b95f3f549e604a040aa789735d6f6311547c1310be465356&w=1800",
    desc: "Fluffy omelette stuffed with melted cheese, ham, and fresh vegetables. A perfect start to your day!",
  },
  {
    id: 8,
    title: "BLT Sandwich",
    category: "Lunch",
    price: 8.49,
    img: "https://img.freepik.com/free-photo/delicious-ham-cheese-toast_1147-514.jpg?t=st=1719090570~exp=1719094170~hmac=870ac295b01b4128630937f6e5aaf83e31b5ed8b4f575932e90873feee3e8739&w=1800",
    desc: "Crispy bacon, fresh lettuce, and ripe tomatoes layered between toasted bread. A classic favorite for lunch.",
  },
  {
    id: 12,
    title: "Banana Shake",
    category: "Shakes",
    price: 4.99,
    img: "https://img.freepik.com/free-photo/view-delicious-milkshake-drink-with-bananas_23-2150822921.jpg?t=st=1719090408~exp=1719094008~hmac=1edebe648647d1cd078fd1920369b0b47af42fadf869a5861635d319cbfeef8d&w=1800",
    desc: "Creamy banana shake made with fresh bananas and topped with whipped cream. A delightful treat anytime.",
  },
  {
    id: 6,
    title: "Chicken Wrap",
    category: "Lunch",
    price: 9.99,
    img: "https://images.pexels.com/photos/2015191/pexels-photo-2015191.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    desc: "Grilled chicken, lettuce, tomato, and ranch dressing wrapped in a soft tortilla. Perfect for a quick meal.",
  },
  {
    id: 17,
    title: "Breakfast Burrito",
    category: "Breakfast",
    price: 6.99,
    img: "https://images.pexels.com/photos/20810846/pexels-photo-20810846/free-photo-of-bread-with-vegetables-on-plate.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    desc: "Scrambled eggs, crispy bacon, cheese, and salsa wrapped in a warm tortilla. Delicious and filling breakfast.",
  },
  {
    id: 15,
    title: "Chicken Alfredo",
    category: "Dinner",
    price: 13.49,
    img: "https://img.freepik.com/free-photo/delicious-pasta-plate_23-2150690745.jpg?t=st=1719090626~exp=1719094226~hmac=a84a3dff015863e991826783ec7b8c01136f25a5ad93a2eb61ed9009f8f3ffd5&w=1800",
    desc: "Tender fettuccine pasta with creamy Alfredo sauce and grilled chicken. A comforting and satisfying dinner choice.",
  },
  {
    id: 3,
    title: "French Toast",
    category: "Breakfast",
    price: 5.49,
    img: "https://img.freepik.com/free-photo/top-view-yummy-cake-slices-with-strawberries-candies-light_140725-120631.jpg?t=st=1719090702~exp=1719094302~hmac=63d31608877943337dd1706f589e0089a8c4849cc5bc599b3da53420d3673467&w=1800",
    desc: "Golden-brown French toast topped with syrup and butter. A sweet and delightful way to start your morning.",
  },
  {
    id: 18,
    title: "Club Sandwich",
    category: "Lunch",
    price: 9.99,
    img: "https://img.freepik.com/free-photo/club-sandwich-panini-with-ham-cheese-tomato-herbs_2829-19928.jpg?t=st=1719090772~exp=1719094372~hmac=bbb1766d6b9fa31b8edc7045102135951d31a28c6a192bfc999d27b4b2465d2e&w=1800",
    desc: "Triple-decker sandwich with turkey, bacon, lettuce, and tomato. A hearty and satisfying lunchtime classic.",
  },
  {
    id: 20,
    title: "Spaghetti Bolognese",
    category: "Dinner",
    price: 12.99,
    img: "https://img.freepik.com/free-photo/delicious-pasta-plate_23-2150690713.jpg?t=st=1719090820~exp=1719094420~hmac=898096baa4500a981186fa2a12a2216a10c814dfe345e26ad8c81ff6956fc92a&w=1800",
    desc: "Spaghetti topped with a rich and hearty Bolognese sauce. A comforting Italian dish full of flavor.",
  },
  {
    id: 13,
    title: "Grilled Salmon",
    category: "Dinner",
    price: 14.99,
    img: "https://img.freepik.com/free-photo/grilled-salmon-with-asparagus-white-plate-isolated-black-background_123827-29142.jpg?t=st=1719090888~exp=1719094488~hmac=99a7273e1c3a38913e6124034fa0d39258178d36f6958de391387e52af298eda&w=1800",
    desc: "Succulent grilled salmon served with a tangy lemon butter sauce. A healthy and delicious dinner option.",
  },
  {
    id: 1,
    title: "Pancakes",
    category: "Breakfast",
    price: 5.99,
    img: "https://img.freepik.com/free-photo/front-view-sweet-pancakes-tower-arrangement_23-2148654085.jpg?t=st=1719090939~exp=1719094539~hmac=004e1d79fb5747abcb7d7a9001c39a05ab8b663ae3ce02fb3ee8781506a835b1&w=1480",
    desc: "Fluffy pancakes stacked high and served with syrup and butter. A delightful breakfast treat.",
  },
  {
    id: 5,
    title: "Caesar Salad",
    category: "Lunch",
    price: 8.99,
    img: "https://img.freepik.com/free-photo/front-view-tasty-vegetable-salad-with-cheese-dark-background_179666-19407.jpg?t=st=1719091004~exp=1719094604~hmac=fff861c2a710fea6419f407cdb8e3f440fe34e061edc54d0aef919393ee25168&w=1800",
    desc: "Crisp romaine lettuce, Caesar dressing, croutons, and Parmesan cheese. A refreshing and flavorful salad.",
  },
  {
    id: 4,
    title: "Avocado Toast",
    category: "Breakfast",
    price: 7.99,
    img: "https://img.freepik.com/free-photo/tasty-appetizing-crispbread-with-mashed-avocado-served-plate_1220-6277.jpg?t=st=1719091085~exp=1719094685~hmac=a48d997732aa4b97088b4384a20b5724553f09e0d1d4544a6ea8194910c150c4&w=1800",
    desc: "Toasted bread topped with creamy mashed avocado, a sprinkle of salt, and a squeeze of fresh lemon.",
  },
  {
    id: 10,
    title: "Chocolate Shake",
    category: "Shakes",
    price: 4.99,
    img: "https://img.freepik.com/free-photo/decadent-chocolate-dessert-rustic-wood-table-generative-ai_188544-12354.jpg?t=st=1719091136~exp=1719094736~hmac=87b431db5910548f5deb11f635da494a883d9a054e8c01899a4bcee8308b6f9d&w=1800",
    desc: "Rich and creamy chocolate shake, topped with whipped cream and a drizzle of chocolate sauce.",
  },
  {
    id: 19,
    title: "Mango Shake",
    category: "Shakes",
    price: 4.99,
    img: "https://img.freepik.com/free-photo/mango-juice-glass-dark-surface_1150-41957.jpg?t=st=1719091230~exp=1719094830~hmac=993cbabb2afa7afe434979e43d3c98cc1a1eb813658cb7299115412854e20762&w=1800",
    desc: "Delicious mango shake made with fresh mangoes, perfect for a refreshing and fruity treat.",
  },
  {
    id: 7,
    title: "Quinoa Salad",
    category: "Lunch",
    price: 10.49,
    img: "https://img.freepik.com/free-photo/salads-with-quinoa-arugula-radish-tomatoes-cucumber-bowl-wooden-table-healthy-food-diet-detox-vegetarian-concept_2829-6842.jpg?t=st=1719091284~exp=1719094884~hmac=4f065967f93d792fa739e21af5fbb3f723d84de12e9c1eceaa825a77bdab332a&w=1800",
    desc: "Healthy quinoa mixed with fresh vegetables and a zesty lemon vinaigrette. Light and nutritious.",
  },
  {
    id: 9,
    title: "Strawberry Shake",
    category: "Shakes",
    price: 4.99,
    img: "https://img.freepik.com/free-photo/front-view-strawberry-milkshake-with-straw_23-2148707795.jpg?t=st=1719091368~exp=1719094968~hmac=9e9afdc702724b9b943907a42299d48e52f74257157b3a889c159a883ebe5beb&w=1800",
    desc: "Creamy strawberry shake made with real strawberries and topped with whipped cream.",
  },
  {
    id: 11,
    title: "Vanilla Shake",
    category: "Shakes",
    price: 4.99,
    img: "https://img.freepik.com/free-photo/close-up-aromatic-beverage-with-spices_23-2148349610.jpg?t=st=1719091437~exp=1719095037~hmac=26af9d8a84dc9bcc5e608f4b26a33d8deb5dd1eb615cea89649f498c237c617b&w=1800",
    desc: "Classic vanilla shake, smooth and creamy, topped with a cherry. A timeless favorite.",
  },
  {
    id: 16,
    title: "Vegetable Stir Fry",
    category: "Dinner",
    price: 10.49,
    img: "https://img.freepik.com/free-photo/fried-vegetables-with-sauce-pan_1220-5230.jpg?t=st=1719091478~exp=1719095078~hmac=c15c18bb3f115e8118e7544a999d93ef441990f8c32f91f141cc840988e38e9e&w=1800",
    desc: "Fresh vegetables stir-fried with savory soy sauce. A delicious and healthy dinner option.",
  },
];
let allAddToCartButtons = [];
let cart = [];
let allCartDeleteButtons = [];
let allDishes = document.getElementById("allDishes");
let content = "";
updateCartCounter();

function updateCartCounter() {
  document.getElementById("cartButton").innerHTML = "&#x1F6D2; " + cart.length;
}

displayAll(menu);
displayCartDishes();
function displayAll(dishes) {
  content = "";
  dishes.forEach((dish) => {
    let individualDish = `<div class="dish">
        <img src=${dish.img} alt="Dish Image" />
        <div class="dishOuter">
          <div class="dishInner">
            <h3 class="dishName">${dish.title}</h3>
            <h3 class="dishPrice">$${dish.price}</h3>
          </div>
          <p class="dishContent">
            ${dish.desc}
          </p>
          <button id=${dish.id} class="orderButton">Order Now</button>
        </div>
      </div>`;
    content += individualDish;
  });
  allDishes.innerHTML = content;
  getCartButtons();
}
// filter logic here

let allButtons = document.querySelectorAll("button");
allButtons.forEach((button) =>
  button.addEventListener("click", (e) => {
    allButtons.forEach((btn) => btn.classList.remove("active"));
    e.target.classList.add("active");
    filterItems(e.target.innerText);
  })
);

function filterItems(category) {
  allDishes.innerHTML = +"";
  if (category == "All") {
    displayAll(menu);
  } else {
    let filteredItems = menu.filter(
      (dish) => dish.category.toLowerCase() == category.toLowerCase()
    );
    displayAll(filteredItems);
  }
}
// select all Add To Cart buttons
function getCartButtons() {
  allAddToCartButtons = document.querySelectorAll(".orderButton");
  allAddToCartButtons.forEach((button) =>
    button.addEventListener("click", (e) => {
      addDishToCart(e.target.id);
    })
  );
}
function addDishToCart(dishID) {
  let flag = -1;
  menu.forEach((dish) => {
    if (dish.id == dishID) {
      cart.forEach((cartDish) => {
        if (cartDish.id == dishID) {
          cartDish.quantity += 1;
          flag = 1;
        }
      });
      if (flag != 1) {
        let tempDish = { ...dish, quantity: 1 };
        cart.push(tempDish);
      }
    }
  });
  updateCartCounter();
  displayCartDishes();
}
function displayCartDishes() {
  let cartContent = "";
  cart.forEach((dish) => {
    let individualDish = `<div class="cartDish">
        <img src=${dish.img} alt="Cart Image" />
        <h3>${dish.title}</h3>
        <h3>${dish.price}</h3>
        <h3>${dish.quantity}</h3>
        <button class="cartDelete" id=${dish.id}>Remove</button>
      </div>`;
    cartContent += individualDish;
  });
  document.getElementById("cart").innerHTML = cartContent;
  getDeleteButtons();
}
// select all delete buttons

function getDeleteButtons() {
  allCartDeleteButtons = document.querySelectorAll(".cartDelete");
  allCartDeleteButtons.forEach((button) =>
    button.addEventListener("click", (e) => {
      removeDishFromCart(e.target.id);
    })
  );
}

function removeDishFromCart(removeID) {
  let flag = -1;
  let tempID = -1;
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].id == removeID) {
      flag = 1;
      tempID = i;
    }
  }
  if (flag) {
    cart.splice(tempID, 1);
  }
  updateCartCounter();
  displayCartDishes();
}
