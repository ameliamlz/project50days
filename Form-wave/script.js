const labels = document.querySelectorAll('.form-control label');

labels.forEach( label=>{
  label.innerHTML = label.innerText
  .split('')
  .map((letter, idx)=>`<span style="transition-delay:${idx*50}ms">${letter}</span>`)//这个地方犯了一个错误，return时加了{}则样式就无了
  .join('')
})