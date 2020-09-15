// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();

// ********** close links ************
const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');

navToggle.addEventListener('click', function () {
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const linksHeight = links.getBoundingClientRect().height;

    if (containerHeight === 0) {
        linksContainer.style.height = `${linksHeight}px`;
    } else {
        linksContainer.style.height = 0;
    }
});
const navbar = document.getElementById('nav');
const topLink = document.querySelector('.top-link');

// ********** fixed navbar ************
window.addEventListener('scroll', function () {
    //console.log(window.pageYOffset);
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;
    if (scrollHeight > navHeight) {
        navbar.classList.add('fixed-nav');
    } else {
        navbar.classList.remove('fixed-nav');
    }

    if (scrollHeight > 500) {
        topLink.classList.add('show-link');
    } else {
        topLink.classList.remove('show-link');
    }
});

// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll('.scroll-link');

scrollLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
        // prevent default
        e.preventDefault();
        // navigate to specific spot
        const id = e.currentTarget.getAttribute('href').slice(1);
        //console.log(id);
        const element = document.getElementById(id);

        // calculate the heights
        const navHeight = navbar.getBoundingClientRect().height;
        const containerHeight = linksContainer.getBoundingClientRect().height;
        const fixedNav = navbar.classList.contains('fixed-nav');
        let position = element.offsetTop - navHeight;

        if (!fixedNav) {
            position = position - navHeight;
        }

        if (navHeight > 82) {
            position = position + containerHeight;
        }
        // console.log(position);
        window.scrollTo({
            left: 0,
            top: position,
        });
        linksContainer.style.height = 0;
    });
});

var menu = [
        { 
            id: 1, 
            title: "Soft Baked Pretzels", 
            category: "starters", 
            price: 7.99, 
            img: "./images/pretzel.jpg", 
            desc: "Three baked pretzels, buttered and salted, served with mustard. " 
        },
        {
            id: 2,
            title: "wings",
            category: "starters",
            price: 10.99,
            img: "./images/wings.jpg",
            desc: "Eight bone-in wings fried to a crisp severd with your choice of either buffalo, BBQ, or Thai Chili. All wings served with ranch (.25 for each extra sauce). ",
        },
        {
            id: 3,
            title: "Cheddar Burger",
            category: "sandwiches",
            price: 12.99,
            img: "./images/cheddar-burger.jpg",
            desc: "Half-pound grass fed patty topped with cheddar cheese and served on a brioche bun accompanied by lettuce, tomato, onion, and pickles. Add bacon for $1.00. Served with french fries.",
        },
        {
            id: 4,
            title: "Pastrami Reuben",
            category: "sandwiches",
            price: 12.99,
            img: "./images/pastrami.jpg",
            desc: "Seared black pastrami, melting Swiss cheese and coleslaw served on toasted rye and finished with Russian dressing. Served with french fries.",
        },
        { 
          id: 5, 
          title: "Shoestring fries", 
          category: "sides", 
          price: 3.99, 
          img: "./images/fries.jpg", 
          desc: "Matchstick potatoes deep-fried until golden brown. " 
        },
        { id: 6, 
          title: "Seasonal Vegetables", 
          category: "sides", 
          price: 3.99, 
          img: "./images/veggies.png", 
          desc: "Fresh seasonal vegetables. See server for details" 
        },
        { 
          id: 7, 
          title: "Roasted Red Potatoes", 
          category: "sides", 
          price: 3.99, 
          img: "./images/potatoes.jpg", 
          desc: "Crispy on the outside and creamy soft on the inside." 
        },
        { 
          id: 8, 
          title: "Coleslaw", 
          category: "sides", 
          price: 3.99, 
          img: "./images/coleslaw.png", 
          desc: "Crisp and refreshing, with just enough creamy dressing to bring it all together." 
        },
        { 
          id: 9, 
          title: "Steak Tips", 
          category: "entrees", 
          price: 16.99, 
          img: "./images/steak-tips.jpg", 
          desc: "Served with seasonal vegetables and roasted red potatoes." 
        },
        {
            id: 10,
            title: "Shepherd's Pie",
            category: "entrees",
            price: 11.99,
            img: "./images/shepherds-pie.jpg",
            desc: "Grass fed beef, corn, caramelized onions, peas, and carrots served over mashed potatoes and topped with house-made gravy.",
        },
        {
            id: 11,
            title: "Chicken and Waffles",
            category: "entrees",
            price: 14.99,
            img: "./images/waffle.jpg",
            desc: "Two Belgian waffles, crispy chicken, bacon and an over easy egg drizzled with maple cayenne aiolo and served with fries.",
        },
        { 
          id: 12, 
          title: "Charlie's Award Winning Chili", 
          category: "soup", price: 6.99, 
          img: "./images/chili.jpg", 
          desc: "Crock of chili covered in melting cheddar jack cheese and served with tri-color nachos." 
        },
        { 
          id: 13, 
          title: "Fried Oreos", 
          category: "dessert", 
          price: 7.99, 
          img: "./images/oreos.jpg", 
          desc: "6 Oreos battered and fried servered with house made icing." 
        },
    ],

    sectionCenterMenu = document.querySelector(".section-center-menu"),
    container = document.querySelector(".btn-container");

    function displayMenuitems(menuItems) {
      let displayMenu = menuItems.map(function (item) {
          //console.log(item);
          return `<article class="menu-item">
          <img src=${item.img} class="photo" alt=${item.title} />
          <div class="item-info">
              <h1>
                  <h4>${item.title}</h4>
                  <h4 class="price">${item.price}</h4>
              </h1>
              <p class="item-text">${item.desc}</p>
          </div>
      </article>`;
      });
      displayMenu = displayMenu.join(" ");
      //console.log(displayMenu);
      sectionCenterMenu.innerHTML = displayMenu;
  }
  
  function displayMenuButtons() {
      const categories = menu.reduce(function (values, item) {
          if (!values.includes(item.category)) {
              values.push(item.category);
          }
          return values;
      }, ['all']);
      const categoryBtns = categories.map(function (category) {
          return `<button class="filter-btn" type="button" data-id=${category}>${category}</button>`
      }).join('');
      container.innerHTML = categoryBtns;
      const filterBtns = document.querySelectorAll(".filter-btn");
    //   console.log(categoryBtns);
      // filter items
      filterBtns.forEach(function (btn) {
          btn.addEventListener("click", function (e) {
              const category = e.currentTarget.dataset.id;
              const menuCategory = menu.filter(function (menuItem) {
  
                  if (menuItem.category === category) {
                      return menuItem;
                  }
              });
              //console.log(menuCategory);
              if (category === 'all') {
                  displayMenuitems(menu);
              } else {
                  displayMenuitems(menuCategory);
              }
          });
      });
  }
  
// window.addEventListener("DOMContentLoaded", function () {
//     displayMenuitems(menu), displayMenuButtons();
// });
