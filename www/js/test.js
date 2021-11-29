// const elements = Array.from(document.querySelectorAll('.fill'));

// function fill(item, index) {
  
//   const bgColor = getComputedStyle(item).backgroundColor,
//   fillLayer = document.createElement('div');
//   fillLayer.classList.add('fill-layer');
//   item.style.backgroundColor = 'transparent';
//   item.style.position = 'relative';
//   item.style.overflow = 'hidden';
//   setTimeout(function() {
//     fillLayer.style.backgroundColor = bgColor;  
//     item.appendChild(fillLayer);
//   }, index * 1000);
  
// }

// elements.forEach(fill);


let all = 0;
for (let g = 0; g <= 255; g++) {
  for (let r = 0; r < g; r++) {
    for (let b = 0; b < g; b++) {
      all = all + 1;
    }
  }
  console.log(all)
}
