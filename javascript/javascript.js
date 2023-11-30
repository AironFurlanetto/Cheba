let Index = 0; // declaraçao de variaveis
  const item = document.querySelectorAll('.carrossel');
  const total = item.length;

  function slideprox() { // mexe os slides do carrossel pra frente
    item[Index].style.display = 'none';
    Index = (Index + 1) % total;
    item[Index].style.display = 'block';
  }

  function Slidevolta() { // mexe os slides do carrossel pra tras
    item[Index].style.display = 'none';
    Index = (Index - 1 + total) % total;
    item[Index].style.display = 'block';
  }

  for (let i = 1; i < total; i++) { // faz com que o site inicie apenas com a primeira image do carrossel
    item[i].style.display = 'none';
  }