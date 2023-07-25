/*function for search operation*/
const searchInput = document.getElementById('searchInput');
const imageItems = document.querySelectorAll('.card');

searchInput.addEventListener('input', function () {
  const searchTerm = searchInput.value.toLowerCase();
  imageItems.forEach(item => {
    const imageInfo = item.querySelector('.container');
    const imageTitle = imageInfo.querySelector('h2').textContent.toLowerCase();
    const imageDescription = imageInfo.querySelector('p').textContent.toLowerCase();

    if (imageTitle.includes(searchTerm) || imageDescription.includes(searchTerm)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
});


/*function for read more and read less*/
function toggleDescription(button) {
  const container = button.parentNode;
  const description = container.querySelector('.description');
  const dots = container.querySelector('.dots');
  const moreText = container.querySelector('.more');
  const btnText = button;

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    moreText.style.display = "none";
    btnText.innerHTML = "Read more";
  } else {
    dots.style.display = "none";
    moreText.style.display = "inline";
    btnText.innerHTML = "Read Less";
  }
}

