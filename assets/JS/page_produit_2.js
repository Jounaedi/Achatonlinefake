var bag = []
let allarticle = 0
function append(id) {
    if (mydatas[id]["quantity"] > 0) {
        bag.push(mydatas[id])
        mydatas[id]["quantity"]--
        alert(mydatas[id]["name"]+" a été ajouter à votre panier")
        if (mydatas[id]["quantity"] == 0) {
            let products_stock = document.querySelectorAll(".p-stock")
            products_stock[id].innerHTML = "En rupture de stock"
        }
    }
    else {
        alert("Le produit que vous voulez est en rupture de stock !")
    }
    bag.sort(function (a, b) {
        return a.id - b.id  //Tri en fonction du product id
    })
    allarticle++
    document.querySelector(".allarticle").innerHTML = allarticle
    console.log(bag)
}



function Compte(){
    var comptediv = document.getElementById("compte-container")
    var btn = document.getElementById("btn-compte")
    var close = document.getElementsByClassName("close")[0]
    btn.onclick = function() {
        comptediv.style.display = "block"
    }
    close.onclick = function() {
        comptediv.style.display = "none"
    }
    window.onclick = function(e) {
        if (e.target == comptediv) {
            comptediv.style.display = "none"
        }
    }
}

function Panier(){
    for (let i = 0; i < bag.length; i++) {
        bag[i]["bag_quantity"]++
        if (bag[i] == bag[i+1]) {
            bag[i]["bag_quantity"]++
            bag.splice(i+1,1)
        }
    }
    console.log(bag)

    // Stocker des données
    var toJSON = JSON.stringify(bag)
    localStorage.setItem("bagJSON", toJSON)
}
