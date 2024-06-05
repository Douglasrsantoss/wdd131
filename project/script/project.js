// toggle menu in small view
const toggleMenu = () => {
    document.querySelector('#menu').classList.toggle('open');
}

document.querySelector('#toggleMenu').addEventListener('click', toggleMenu);



//Footer part
document.querySelector('#year').textContent = new Date().getFullYear();
document.querySelector('#last-modification').textContent = document.lastModified;


// COLECTIONS PART

const services = [
    {
      cardName: "Simple Business Card",
      imageUrl: "images/cartao-visita1.jpg",
      price: "R$ 150,00",
      quantity: "1000"
    },
    {
        cardName: "Double Business Card",
        imageUrl: "images/cartao-visita2.jpg",
        price: "R$ 250,00",
        quantity: "1000"
    },
    {
        cardName: "Varnished Card",
        imageUrl: "images/cartao-visita1.jpg",
        price: "R$ 250,00",
        quantity: "1000"
    },
    {
        cardName: "Double-varnished card",
        imageUrl: "images/cartao-visita2.jpg",
        price: "R$ 300,00",
        quantity: "1000"
    },
    {
        cardName: "Business Card + Art",
        imageUrl: "images/cartao-visita1.jpg",
        price: "R$ 250,00",
        quantity: "1000"
    },
    {
        cardName: "Double Card + Art",
        imageUrl: "images/cartao-visita2.jpg",
        price: "R$ 350,00",
        quantity: "1000"
    }]

const banners = [
    {  
      cardName: "Simple Banner",
      imageUrl: "images/banner1.jpg",
      price: "R$ 150,00",
      quantity: "1"
    },
    {  
        cardName: "Stand Banner",
        imageUrl: "images/banner2.jpg",
        price: "R$ 250,00",
        quantity: "1"
    },
    {  
        cardName: "Simple Banner in Canvas",
        imageUrl: "images/banner3.jpg",
        price: "R$ 200,00",
        quantity: "1"  
    },
    {  
        cardName: "Stand Banner in Canvas",
        imageUrl: "images/banner4.jpg",
        price: "R$ 300,00",
        quantity: "1"  
    }]

//BUILDING THE SERVICES CARD

function createCard(colection,sectionID) {
    // document.querySelector("#firs-row").innerHTML = "";
        colection.forEach(services => {
        let link = document.createElement("a")
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let img = document.createElement("img");
        let price = document.createElement("p");
        let quantity = document.createElement("p");
       
        card.setAttribute("class", "card")
        name.textContent = services.cardName;
        img.setAttribute("src", services.imageUrl);
        img.setAttribute("alt", `${services.cardName}`);
        img.setAttribute("loading", "lazy");
        price.setAttribute("class", "price")
        price.innerHTML = `<span> Only: </span> ${services.price}`;
        quantity.setAttribute("class", "quantity")
        quantity.innerHTML = `${services.quantity} <span class = "quantity"> un. </span>`;

        card.appendChild(name);
        card.appendChild(img);
        card.appendChild(price);
        card.appendChild(quantity);

        link.appendChild(card)
        link.setAttribute("href", "https://wa.me/+5567981364464")

        document.querySelector(sectionID).appendChild(link);

    })
};

//Creating the Temples card:
createCard(services, "#first-row")
createCard(banners, "#second-row")