// 不用tagname 因为返回的是HTML标签的集合
// const textarea = document.getElementsByTagName("textarea");
const textarea = document.getElementById('textarea');
const tagCtn = document.getElementById('tags');

// 打开网页即聚焦到文本框
textarea.focus();

// keyup:监听时能获取到当前的值
// keydown:监听时能获取上一次的值
textarea.addEventListener('keyup', (e)=>{
  // 创建相关字符对应的元素
  createTags(e.target.value);
  
  // 回车键的key为Enter 注意大小写
  if(e.key ==='Enter'){
    setTimeout(() => {
      e.target.value = ''
    }, 10);

    randomSelect();
  }
  
})

function createTags(input){
  // 按，分割，消除空格，返回非空字段
  const tags = input.split(',').filter(tag=>tag.trim()!=='').map(tag=>tag.trim());

  tagCtn.innerHTML = '';
  tags.forEach(tag => {
    const tagEl = document.createElement('span');
    tagEl.classList.add('tag');
    tagEl.innerText = tag;
    tagCtn.appendChild(tagEl);
  });
}
// 首先随机选择需要高亮的tag，当指定时间段后选择一个高亮结束这一函数
function randomSelect(){
  const times =30;

  const interval = setInterval(() => {
    const randomTag = pickRandomTag();

    if(randomTag !== undefined){
      highLightTag(randomTag);

      setTimeout(() => {
        unhighLightTag(randomTag)
      }, 100);
    }
  }, 100);

  setTimeout(() => {
    clearInterval(interval);

    setTimeout(() => {
      const randomTag = pickRandomTag();
      highLightTag(randomTag)
    }, 100);

  }, times*100);

}

function pickRandomTag(){
  const tags = document.querySelectorAll('.tag');
  return tags[Math.floor(Math.random()*tags.length)];
}

function highLightTag(tag){
  tag.classList.add('highlight')
}

function unhighLightTag(tag){
  tag.classList.remove('highlight')
}