  // JavaScript to toggle the checkbox state and show/hide the additional content
  const button = document.querySelector('.buttonex');
  const checkbox = document.querySelector('#expand-checkbox');
  const contentAdd = document.querySelector('.content1');

  button.addEventListener('click', () => {
    if (checkbox.checked) {
      checkbox.checked = false;
      contentAdd.style.display = 'none';
      document.getElementById('button-text').textContent = 'READ MORE';
    } else {
      checkbox.checked = true;
      contentAdd.style.display = 'block';
      document.getElementById('button-text').textContent = 'READ LESS';
    }
  });