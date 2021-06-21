/* ---- Panier et Formulaire ---- */
const shoppingCart =() =>{

    const pages = document.querySelectorAll(".page")
    const header = document.querySelector("header")
    const nbPages = pages.length;
    let pageActive = 1;


    window.onload = () => {
        // 1ère page du formulaire
        document.querySelector(".page").style.display = "initial"

        // Afficher et parcourir les pages
        pages.forEach((page, index) => {
            // On crée l'élément "numéro de page"
            let element = document.createElement("div")
            element.classList.add("page-num")
            element.id = "num" + (index + 1)
            if(pageActive === index + 1){
                element.classList.add("active")
            }
            element.innerHTML = index + 1
            header.appendChild(element)
        })

        // bouton suivant
        let boutons = document.querySelectorAll(".next")

        for(let bouton of boutons){
            bouton.addEventListener("click", pageSuivante)
        }

        //boutons précédent
        boutons = document.querySelectorAll(".prev")

        for(let bouton of boutons){
            bouton.addEventListener("click", pagePrecedente)
        }
    }

    // Passer à la page suivante
    function pageSuivante(){
        // Pages masquées
        for(let page of pages){
            page.style.display = "none"
        }

        // Page suivante affichée
        this.parentElement.nextElementSibling.style.display = "initial"

        // Page active désactivée
        document.querySelector(".active").classList.remove("active")

        // Incrémentation de pageActive
        pageActive++

        // Nouveau numéro activé
        document.querySelector("#num"+pageActive).classList.add("active")
    }

    // Passer à la page précédente
    function pagePrecedente(){
        // Pages masquées
        for(let page of pages){
            page.style.display = "none"
        }

        // Page suivante affichée
        this.parentElement.previousElementSibling.style.display = "initial"

        // Page active désactivée
        document.querySelector(".active").classList.remove("active")

        // Incrémentation de pageActive
        pageActive--

        // Nouveau numéro activé
        document.querySelector("#num"+pageActive).classList.add("active")
    }
}

shoppingCart()