let currentIndex = 0;
  const items = document.querySelectorAll('.carrossel');
  const totalItems = items.length;

  function slideprox() {
    items[currentIndex].style.display = 'none';
    currentIndex = (currentIndex + 1) % totalItems;
    items[currentIndex].style.display = 'block';
  }

  function Slidevolta() {
    items[currentIndex].style.display = 'none';
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    items[currentIndex].style.display = 'block';
  }
  for (let i = 1; i < totalItems; i++) {
    items[i].style.display = 'none';
  }