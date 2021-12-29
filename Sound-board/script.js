// 在监听元素时，一定要注意元素名字，排查问题时，大胆猜想，小心求证
const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

sounds.forEach(sound=>{
  const btn = document.createElement('button');
  btn.classList.add('btn');
  btn.innerText = sound;
  
  btn.addEventListener('click',()=>{
    stopPlay();

    document.getElementById(sound).play();
  })

  document.getElementById('container').appendChild(btn);
})

function stopPlay(){
  sounds.forEach(sound=>{
    const song = document.getElementById(sound);
    song.pause()
    song.currentTime = 0;
  })
}
