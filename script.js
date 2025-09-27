const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.next-bttn')];
const preBtn = [...document.querySelectorAll('.prev-bttn')];

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const navbarRight = document.querySelector('.navbar-right');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navbarRight.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.navbar-right a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navbarRight.classList.remove('active');
            menuToggle.classList.remove('active');
        });
    });
    
    const productContainer = document.querySelector('.product-container');
    const prevButton = document.querySelector('.prev-bttn');
    const nextButton = document.querySelector('.next-bttn');
    
    if (prevButton && nextButton && productContainer) {
        prevButton.addEventListener('click', () => {
            productContainer.scrollLeft -= 300;
        });
        
        nextButton.addEventListener('click', () => {
            productContainer.scrollLeft += 300;
        });
    }
});

document.getElementById('subscriptionForm').addEventListener('submit', function(event){
    event.preventDefault();
    validateData();
});

function validateData(){
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const dob = document.getElementById("dob").value;
    const gender = document.getElementById("gender").value;
    const agree = document.getElementById("agree").checked;
    const plan = document.querySelector('input[name="plans"]:checked');

    if(!plan){
        alert("Please select plan.");
        return
    }

    if(name == ''){
        alert("Please enter your name.");
        return
    }

    if(email == '') {
        alert("Please enter your email.");
        return
    }
    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return
    }

    if(dob == ''){
        alert("Please choose your date of birth.");
        return
    }

    if(gender == ''){
        alert("Please select your gender.");
        return
    }

    if(!agree){
        alert("You must agree to the terms and condition.");
        return
    }

    alert("Form Submitted Successfully!");
    return;

}

function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
}