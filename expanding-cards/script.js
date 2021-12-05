// Q：为什么只能显示部分图片？效果有点奇妙
const panels = document.querySelectorAll('.panel');

panels.forEach(panel =>{
    panel.addEventListener('click', ()=>{
        removeActiveClasses();
        // console.log(panel.classList);
        panel.classList.add('active');
    })
})

//只考虑了添加，并未考虑过active only one， 所以需要移除
function removeActiveClasses(){
    panels.forEach(panel =>{
        panel.classList.remove('active')
    })
}