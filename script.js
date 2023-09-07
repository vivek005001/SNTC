var checkbox = document.getElementById('hamb');
var myDiv = document.getElementById('Leftsidebar');

// Add an event listener to the checkbox
hamb.addEventListener('click', function() {
  // If the checkbox is checked, show the div; otherwise, hide it
  if(myDiv.style.opacity==1){
    myDiv.style.opacity = 0;
  }
  else{
  myDiv.style.opacity = 1;
  }
});
// function toggleSlide() {
//     var slidingDiv = document.getElementById('slidingDiv');
//     slidingDiv.classList.toggle('slide-in');
//     slidingDiv.classList.toggle('slide-out');
//   }