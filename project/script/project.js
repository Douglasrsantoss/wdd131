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
        cardName: "Simple Business Card",
        imageUrl: "images/cartao-visita1.jpg",
        price: "R$ 150,00",
        quantity: "1000"
    },
    {
        cardName: "Simple Business Card",
        imageUrl: "images/cartao-visita1.jpg",
        price: "R$ 150,00",
        quantity: "1000"
    },
    {
        cardName: "Simple Business Card",
        imageUrl: "images/cartao-visita1.jpg",
        price: "R$ 150,00",
        quantity: "1000"
    },
    {
        cardName: "Simple Business Card",
        imageUrl: "images/cartao-visita1.jpg",
        price: "R$ 150,00",
        quantity: "1000"
    },
    {
        cardName: "Simple Business Card",
        imageUrl: "images/cartao-visita1.jpg",
        price: "R$ 150,00",
        quantity: "1000"
    }]

const banners = [
    {  
      cardName: "Simple Business Card",
      imageUrl: "images/banner1.jpg",
      price: "R$ 150,00",
      quantity: "1"
    },
    {  
        cardName: "Simple Business Card",
        imageUrl: "images/banner1.jpg",
        price: "R$ 150,00",
        quantity: "1"
    },
    {  
        cardName: "Simple Business Card",
        imageUrl: "images/banner1.jpg",
        price: "R$ 150,00",
        quantity: "1"  
    }]

//BUILDING THE SERVICES CARD

function createCard(colection,sectionID) {
    // document.querySelector("#firs-row").innerHTML = "";
        colection.forEach(services => {
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

        document.querySelector(sectionID).appendChild(card);

    })
};

//Creating the Temples card:
createCard(services, "#first-row")
createCard(banners, "#second-row")