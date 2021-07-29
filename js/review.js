let reviews=0;
reSlides();

function reSlides() {
  let d;
  let onslides = document.getElementsByClassName("re-main");
  for (d = 0; d < onslides.length; d++) {
    onslides[d].style.display = "none";  
  }
  reviews++;
  if (reviews > onslides.length) {reviews = 1}    
  onslides[reviews-1].style.display = "block";  
  setTimeout(reSlides, 3000); // Change image every 3 seconds
}