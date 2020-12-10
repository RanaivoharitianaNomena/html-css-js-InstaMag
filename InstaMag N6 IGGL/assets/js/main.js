const reply = (rep) => {
    var res = document.getElementById(rep);
    if (res.className == "replies") {
        res.className = "hide";
        res.style.WebkitTransition = 'all 0.3s ease';
    } else if (res.className == 'hide') {
        console.log('hide');
        res.className = "replies";
    }
}
 updateButton() {
                if (this.value === 'Like') {
                this.value = '✓ Liked';
                 } else {
            this.value = "Like";
  }
}
var button = document.getElementsByClassName("like_buton");
for(var i = 0; i<button.length;i++){
    button[i].onclick = updateButton;
} 

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
} 