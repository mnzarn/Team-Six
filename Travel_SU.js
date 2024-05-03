let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 4000); // Change image every 4 seconds
}

function underConstruction() {
  location.href="Under_Construction.html";
}

function mouseOver(element)
{
  element.style.color='white';
}

function mouseOut(element)
{
  element.style.color = 'black';
}
