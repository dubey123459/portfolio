// menuicon navbar
let menuicon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuicon.onclick = () => {
    menuicon.classList.toggle('bx-x');
    navbar.classList.toggle('active');

}


// scrolls section active link
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    // scrollto top
    // if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    //     mybutton.style.display = "block";
    //   } else {
    //     mybutton.style.display = "none";
    //   }
    //   till
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150 ;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if(top >= offset && top < offset + height){
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    })
    // sticky navbar
let header = document.querySelector('.header');

header.classList.toggle('sticky', window.scrollY > 100);

// remove menu icon navbar when click navbar link (scroll)

    menuicon.classList.remove('bx-x');
    navbar.classList.remove('active');


};
// dark light mode
let darkmodeicon = document.querySelector('#darkMode-icon');
darkmodeicon.onclick = () => {
    darkmodeicon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode')
};
ScrollReveal({
     reset: true,
     distance:'80px',
     duration:2000,
     delay:100
     });
     ScrollReveal().reveal('.home-content,.heading', { origin: 'top' });
     ScrollReveal().reveal('.home-img img , .education-container, .portfolio-box,.contact-container', { origin: 'bottom' });
     ScrollReveal().reveal('.home-content h1, .about-img img', { origin: 'left' });
     ScrollReveal().reveal('.home-content h3,.home-content p, .about-content', { origin: 'right' });

    //  scroll to top 
    // Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
 
// }

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
// sending email
function SendEmail(){
    Email.send({
        SecureToken : "53d5b644-acb9-4d1c-b1d2-1b898c1f1f38",
        To : 'gopaldubey963@gmail.com',
        From : "gopaldubey963@gmail.com",
        Subject : "Enquiry details",
        Body : "Name: "+ document.getElementById('name').value + "<br> Email: " + document.getElementById('email').value + "<br> Phone no: "+document.getElementById('phone').value + "<br> Message: " + document.getElementById('message').value
    }).then(
      message => alert("Message sent successfully")
    );
}
