/* ---- Nav Bar ---- */

// Burger Menu 
const navSlide = () => {
    const burger = document.querySelector(".burger_menu")
    const nav = document.querySelector(".nav_links")
    const navLinks = document.querySelectorAll(".nav_links li")

    burger.addEventListener("click", () => {
        //Ouvrir-Fermer Navbar
        nav.classList.toggle("nav-active")

        //Animation Burger menu
        burger.classList.toggle("toggle")

        //Animation des liens
        navLinks.forEach((link, index) =>{
            if (link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navLinksAnimation 0.5s ease forwards ${index / 12 }s`
            }
        })
    })

}

// Catégorie 1 et 2
const openMenu1 = () => {   
    document.getElementById("dropdown_menu").addEventListener("click", openMenu1)
        
        function openMenu1() {
            document.getElementById("list").classList.toggle("active")
        }    
}

const openMenu2 = () => {   
    document.getElementById("dropdown_menu2").addEventListener("click", openMenu2)
        
        function openMenu2() {
            document.getElementById("list_hidden").classList.toggle("active")
        }    
}

navSlide()
openMenu1()
openMenu2()
