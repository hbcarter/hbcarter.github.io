
// When the user scrolls the page, execute myFunction

window.onscroll = function() {mynavbar()};



// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function mynavbar() {
  // Get the navbar
  var navbar = document.getElementById("navbar");

  // Get the offset position of the navbar
  var sticky = navbar.offsetTop;
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }

// Pause and play the video, and change the button text
function myvideo() {
  // Get the video
var video = document.getElementById("time01.mp4");

// Get the button
var btn = document.getElementById("myBtn");

    if (video.paused) {
        video.play();
        btn.innerHTML = "Pause";
    } else {
        video.pause();
        btn.innerHTML = "Play";
    }
  }
}
