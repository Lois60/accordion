const items = document.querySelectorAll('.accordion-section');

items.forEach(item => {
    const heading = item.querySelector('.accordion-heading');
  const content = item.querySelector('.accordion-content');
  const button = item.querySelector('.accordion');
  button.addEventListener('click', function (){
    if (content.style.display==='none') {
      content.style.display= 'block';
    } else {
      content.style.display= 'none';
    }
   
});

});




