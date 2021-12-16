const loadingText = document.querySelector('#process');
const bg = document.querySelector('.bg');

let value = 0;

// 每30ms运行一下函数
let interval = setInterval(loading, 30);

function loading(){
  value++;
  if(value>99){
    // 清除指定动作
    clearInterval(interval);
  }

  // innerHTML获取对应标签的值
  loadingText.innerHTML = `${value}%`;
  // 设计转换函数进行opacity和blur数值的换算
  loadingText.style.opacity = scale(value, 0, 100, 1, 0);
  bg.style.filter = `blur(${scale(value, 0, 100, 30, 0)}px)`;
}

// 犯了一个错误， 将+outmin写成+1，则背景的blur函数不起作用
function scale(num, in_min, in_max, out_min, out_max){
  return (num-in_min)/(in_max-in_min)*(out_max-out_min) + out_min;
}