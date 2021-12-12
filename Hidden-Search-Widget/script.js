const button = document.querySelector('.btn');
const input = document.querySelector('.input');
const search = document.querySelector('.search');

button.addEventListener('click',()=>{
  // toggle函数的妙用，有则删除，无则添加
  search.classList.toggle('active');
  // 聚焦输入框
  input.focus();
});
