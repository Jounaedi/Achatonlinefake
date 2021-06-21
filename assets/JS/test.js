// Recevoir des données
var fromJSON = localStorage.getItem("bagJSON")
var article = JSON.parse(fromJSON)

var articlelist = document.querySelector(".articles")
var mybag = []


// Création d'une structure HTML en fonction des articles ajouter au panier
let i = 0
article.forEach(e => {
    // TODO les articles venus dans le panier et stocké dans article doivent être stocké dans mybag afin de travailler avec ce dernier
    // ainsi chaque fois qu'on quitte le panier et qu'on y reviens les anciens articles seront dans une autre var (ici mybag)
    mybag.push(article[i])
    AddaBlock(i)
    i++
})

// Nouvel article
function AddaBlock(i) {
    var newarticle = document.createElement("ul")
    newarticle.classList.add("myarticle")
    articlelist.appendChild(newarticle)
    Addinfos(i,newarticle)
}

// Data d'un article
function Addinfos(id,newarticle) {
    var elements = document.querySelectorAll(".myarticle")
    var info = document.createElement("img")
    info.src = mybag[id]["img_src"]
    info.classList.add("image")
    newarticle.appendChild(info)

    var info = document.createElement("li")
    info.innerHTML = mybag[id]["name"]
    info.classList.add("name")
    newarticle.appendChild(info)

    var info = document.createElement("li")
    var infos = document.createElement("span")
    infos.classList.add("unit_price")
    infos.innerHTML = mybag[id]["unit_price"]
    info.appendChild(infos)
    info.append("€")
    newarticle.appendChild(info)

    var info = document.createElement("li")
    info.innerHTML = mybag[id]["bag_quantity"]
    info.classList.add("quantity")
    newarticle.appendChild(info)

    var remove = document.createElement("img")
    remove.src = "img/cancel.svg"
    remove.classList.add("remove")
    remove.onclick = function() {
        let minus = mybag[id]["unit_price"] * mybag[id]["bag_quantity"]
        mybag[id]["bag_quantity"] = 0
        elements[id].style.display = "none"
        // Actualisation du total
        total(minus)
    }
    newarticle.appendChild(remove)
}


function total(minus) {
    var articles_datas = document.querySelectorAll(".myarticle")
    var prices = document.querySelectorAll(".unit_price")
    var quantitites = document.querySelectorAll(".quantity")


    let stot = 0
    for(let c=0; c<articles_datas.length; c++) {
        stot += Number(prices[c].innerHTML) * Number(quantitites[c].innerHTML)
    }

    let stotal = document.querySelector(".s_total")
    let livraisons = document.querySelector(".livraison")
    let total = document.querySelector(".total")
    total.style.fontWeight = "bold"

    stotal.innerHTML = (stot - minus).toFixed(2)
    livraisons.innerHTML = "0.00" 
    total.innerHTML = stotal.innerHTML + Number(livraisons.innerHTML)
}
total(0)
