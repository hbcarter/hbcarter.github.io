// When the user scrolls the page, execute myFunction

window.onscroll = function() {mynavbar2()};



// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function mynavbar2() {
  // Get the navbar
  var navbar2 = document.getElementById("navbar2");

  // Get the offset position of the navbar
  var sticky = navbar2.offsetTop;
  if (window.pageYOffset >= sticky) {
    navbar2.classList.add("sticky")
  } else {
    navbar2.classList.remove("sticky");
  }
}
