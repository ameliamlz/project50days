// Q：progress的样式还不太明白？

const progress = document.getElementById('progress');
// getElementById和getElementsByClassName的区别：返回类型不同
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentActive = 1;
next.addEventListener('click', ()=>{
  if(currentActive>circles.length) currentActive = circles.length;
  currentActive++;
  update();  
})

prev.addEventListener('click', ()=>{
  if(currentActive!==1) currentActive--;
  update();
})

//分块处理逻辑 progress、button和circle
function update(){
  circles.forEach((cur,idx)=>{
    if(idx<currentActive){
      cur.classList.add('active'); 
    }else{
      cur.classList.remove('active')
    }
  })

  const actives = document.querySelectorAll('.active');
  // 百分比处理
  progress.style.width = (actives.length-1)/(circles.length-1)*100+'%';

  if(currentActive === 1) prev.disabled = true;
  else if(currentActive === circles.length) next.disabled = true;
  else{
    prev.disabled = false;
    next.disabled = false;
  }
}
