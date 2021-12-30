const joke = document.getElementById('joke');
const btn = document.querySelector('.btn');

btn.addEventListener('click', getJoke);

getJoke()

async function getJoke(){
  console.log('again')
  const config = {
    headers: {
      Accept: "application/json",
    },
  }

  const res = await fetch('https://icanhazdadjoke.com', config);
  const data = await res.json();
  
  // the difference between innerHTML and innerText
  joke.innerText = data.joke;
}