let mydatas = []
fetch("json/info.json")
.then(res => res.json())
.then(data => {
    data.forEach(element => {
        mydatas.push(element)
    });
    // Crée le nbr de bloc produit nécessaire en fonction de la taille du json
    // TODO

    // Pour chaque produit => insérer les éléments requis
    document.body.onload = addElements;
    function addElements () {
        var products = document.querySelectorAll(".product")
        var imgs = document.querySelectorAll(".p-img")
        var titles = document.querySelectorAll(".p-title")
        var prices = document.querySelectorAll(".p-price")
        var descs = document.querySelectorAll(".p-desc")
        var stocks = document.querySelectorAll(".p-stock")
        let c = 0
        products.forEach(e => {
            imgs[c].src= mydatas[c]["img_src"]
            titles[c].innerHTML= mydatas[c]["name"]
            prices[c].innerHTML= mydatas[c]["unit_price"] + "€"
            descs[c].innerHTML= mydatas[c]["description"]
            if(mydatas[c]["quantity"] > 0) {
                mydatas[c]["available"] == true
                stocks[c].innerHTML= "En stock"
                stocks[c].style.color = "green"
            }
            else {
                mydatas[c]["available"] == false
                stocks[c].innerHTML= "En rupture de stock"
                stocks[c].style.color = "red"
            }
            stocks[c].style.fontWeight = "bold"
            c++
        })
    }
})

