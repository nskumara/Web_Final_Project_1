 /*function for search operation*/
 const searchInput = document.getElementById('searchInput');
  const videoItems = document.querySelectorAll('.col-lg-4');

  searchInput.addEventListener('input', function () {
    const searchTerm = searchInput.value.toLowerCase();
    videoItems.forEach(item => {
      const videoTitle = item.querySelector('h2').textContent.toLowerCase();
      const videoDescription = item.querySelector('p').textContent.toLowerCase();

      if (videoTitle.includes(searchTerm) || videoDescription.includes(searchTerm)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });

