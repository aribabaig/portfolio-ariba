const header = document.getElementById('header');

// Listen to the scroll event
window.addEventListener('scroll', () => {
    // Check if the scroll position is beyond a certain threshold (e.g., 100px)
    if (window.scrollY > 200) {
        header.classList.add('active'); // Add 'active' class to navbar
    } else {
        header.classList.remove('active'); // Remove 'active' class if scrolled back up
    }
});
// scroll animation
ScrollReveal({
  reset : true,
  distance : '10px',
  duration : 1500,
  delay : 300,
});
ScrollReveal().reveal('.animate-right', {delay : 200, origin: 'right'});
ScrollReveal().reveal('.animate-left', { delay: 200 , origin: 'left'});
ScrollReveal().reveal('.animate-bottom',{ delay: 200 , origin: 'bottom'});
ScrollReveal().reveal('.animate-top',{ delay: 200 , origin: 'top'});
ScrollReveal().reveal('.animate-top-1',{ delay: 200 , origin: 'bottom'});
ScrollReveal().reveal('.animate-top-2',{ delay: 300 , origin: 'bottom'});
ScrollReveal().reveal('.animate-top-3',{ delay: 400 , origin: 'bottom'});
ScrollReveal().reveal('.animate-top-4',{ delay: 500 , origin: 'bottom'});
// ScrollReveal().reveal('.', { delay: 700 , origin: 'right'});
// ScrollReveal().reveal('', { delay: 700 , origin: 'left'});
// ScrollReveal().reveal('', { delay: 500 , origin: 'bottom' });


// contact section animation using gsap 

var tl = gsap.timeline({scrollTrigger:{
  trigger:"#main",
//  markers:true,
  start:"50% 50%",
  end:"150% 50%",
  scrub:2,
  pin:true
}});
tl
.to("#center",{
 height: "100vh",
},'a')
.to("#top",{
  top: "-50%",
},'a')
.to("#bottom",{
  bottom: "-50%",
},'a')
.to("#top-h1",{
  top: "60%"
},'a')
.to("#bottom-h1",{
  bottom: "-30%"
},'a')
.to("#center-h1",{
 top: "-30%"
},'a')
.to(".content",{
 delay: -0.2,
 marginTop: "0%"
})
 
// Navbar active function 

 document.addEventListener('DOMContentLoaded', function () {
  // Get the checkbox and navigation links
  const menuIcon = document.getElementById('menu-icon');
  const navLinks = document.querySelectorAll('.pt-5 li a');

  // Add click event listener to each navigation link
  navLinks.forEach(link => {
      link.addEventListener('click', function () {
          // Uncheck the checkbox to close the menu
          menuIcon.checked = false;
      });
  });
});

// end 