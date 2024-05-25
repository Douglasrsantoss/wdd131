// //------> COMON JS <------//

// // copyright year
document.querySelector('#year').textContent = new Date().getFullYear();
document.querySelector('#last-modification').textContent = document.lastModified;

// menubutton.addEventListener('click', () => { menuitems.classList.toggle('#open');});

// toggle menu in small view
const toggleMenu = () => {
    document.querySelector('#menu').classList.toggle('open');
}
document.querySelector('#toggleMenu').addEventListener('click', toggleMenu);





//------> TEMPLES PART<------

const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // Add more temple objects here...
    {
        templeName: "Sao Paulo Brazil",
        location: "Sao Paulo, Brazil",
        dedicated: "1978, October, 30",
        area: 55000,
        imageUrl:
        "https://douglasrsantoss.github.io/wdd131/images/sao-paulo-brazil-temple1.jpg"
        // "../images/sao-paulo-brazil-temple1.jpg",
        // "file:///C:/Users/DouglasRoberto/Documents/DOUGLAS/BYU-Id/wdd131/images/sao-paulo-brazil-temple1.jpg"
      },
      {
        templeName: "Campinas Brazil",
        location: "Campinas, Brazil",
        dedicated: "2002, May, 17",
        area: 49100,
        imageUrl:
        "https://douglasrsantoss.github.io/wdd131/images/campinas-brazil-temple1.jpg"
        // "../images/campinas-brazil-temple1.jpg"
      },
      {
        templeName: "Brasilia Brazil",
        location: "Brasilia, Brazil",
        dedicated: "2023, September, 17",
        area: "?",
        imageUrl:
        "https://douglasrsantoss.github.io/wdd131/images/brasilia-brazil-temple1.jpg"       
        // "../images/brasilia-brazil-temple1.jpeg"
      },
  ];

  
function createTempleCard(filteredTemples) {
    document.querySelector(".temple-grid").innerHTML = "";
    filteredTemples.forEach(temple => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedicated = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = temple.templeName;
        location.innerHTML = `<span class = "label"> Location: </span> ${temple.location}`;
        dedicated.innerHTML = `<span class = "label"> Dedication: </span> ${temple.dedicated}`;
        area.innerHTML = `<span class = "label"> Area: </span> ${temple.area} sq ft`;
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple`);
        img.setAttribute("loading", "lazy");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedicated);
        card.appendChild(area);
        card.appendChild(img);

        document.querySelector(".temple-grid").appendChild(card);

    })
};

//Creating the Temples card:
createTempleCard(temples)

//filtering temples and creating new temple cards:
  //HOME
const home = document.querySelector("#home");
home.addEventListener('click', () => {
  createTempleCard(temples)});
  //OLD
const oldTemple = document.querySelector("#old");
oldTemple.addEventListener('click', () => {
  createTempleCard(temples.filter(temple => !temple.dedicated.includes("20")));
});
  //NEW
const newTemple = document.querySelector("#new");
newTemple.addEventListener('click', () => {
  createTempleCard(temples.filter(temple => temple.dedicated.includes("20")));
});
  //LARGE
const largeTemple = document.querySelector("#large");
largeTemple.addEventListener('click', () => {
  createTempleCard(temples.filter(temple => temple.area > 90000));
});
  //SMALL
const smallTemple = document.querySelector("#small");
smallTemple.addEventListener('click', () => {
  createTempleCard(temples.filter(temple => temple.area < 10000));
});


