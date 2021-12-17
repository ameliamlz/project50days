const boxs = document.querySelectorAll('.box');
window.addEventListener('scroll', scrollAction);

scrollAction();

function scrollAction(){
  // innerHeight 和 innerWidth 都是window 的属性，表示文档显示区域的宽高，不包括工具栏等
  // Q:后面的计算是为了只取百分之八十的高度？这样可以看到元素隐藏的过程。
  const bottomHeight = window.innerHeight / 5 * 4;
  boxs.forEach((box)=>{
    // getBoundingClientRect()获取元素相对于视窗的位置
    let currentHeight = box.getBoundingClientRect().top;
    if(currentHeight<bottomHeight){
      box.classList.add('show');
    } else{
      box.classList.remove('show');
    }
  })
}
