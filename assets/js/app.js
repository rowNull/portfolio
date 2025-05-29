// Scroll Up to top function
const scrollUp = document.querySelector("#scroll-up");
scrollUp.addEventListener("click", ()=>{
    window.scrollTo({top: 0,left:0, behavior: "smooth"});
});


// menu toggle for mobile and tablets
const menu = document.querySelector("#menu-toggle");
const ul = document.querySelector("nav ul");

menu.addEventListener("click", () => {
    ul.classList.toggle("show");
});

const navLink = document.querySelectorAll(".nav-link");
navLink.forEach((link) =>
    link.addEventListener("click", () => {
        ul.classList.remove("show");
    })
);


// form submission
const form = document.querySelector("form");
form.addEventListener("submit", function (e) {
    e.preventDefault(); 
    fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: {
          "Accept": "application/json"
        }
    }).then(response => {
        if (response.ok) {
            form.reset();
            alert("Thanks! Your message has been sent.");
        } else {
            alert("Oops! Something went wrong.");
        }
        });
});
