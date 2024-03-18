
const resultContainer = document.querySelector('.result-container')
const pokemonCard = document.querySelector('.pokemon-card')
const generatePokemon = document.querySelector('.generate-pokemon')
const closeBtn = document.querySelector('.close-btn')
const findPokemon = async() =>{
 
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/`)
    if(!res.ok){
      throw new Error("Couldn't fetch!")
    }
    const data = await res.json()
  const pokemons = data.results
  

  const randomCardIndex = Math.trunc(Math.random() * 20)
  const pokemonStats = pokemons[randomCardIndex].url
  

  
    fetchURL(pokemonStats)
   
 }
  catch(error){
    console.error(error)
  }
}


const fetchURL = (url) => {
  fetch(url)
  .then(res => res.json())
  .then(data=> {
 drawPokemonCard(data)

}
  )
}



const drawPokemonCard = (data) => {
  const height = data.height
  const weight = data.weight
  const frontImgSrc = data.sprites['front_default']
  const specialAttack = data.stats[3].base_stat
  const specialDefense = data.stats[4].base_stat
  const name = data.name
  const hp = data.stats[0].base_stat
const attack = data.stats[1].base_stat
const defense = data.stats[2].base_stat
const speed = data.stats[5].base_stat
 resultContainer.innerHTML += `
    <div class='pokemon-card'>
    <div class = 'front'>
    <p class='hp'>HP ${hp}</p>

    <img src = '${frontImgSrc}'>
    <h3>${name}</h3>
    <p class='type'>${data.types[0].type.name}</p>
    <div class='stats'>
    <p>Attack ${attack}</p>
    <p>Defense ${defense}</p>
    <p>Speed ${speed}</p>
    </div>
    </div>
    <div class='back'>
    <p>Height  ${height}</p>
    <p>Weight  ${weight}</p>
    <p>Special Attack  ${specialAttack}</p>
    <p>Special Defense  ${specialDefense}</p>
    <p>Base experience  ${data['base_experience']}</p>
  </div>
   `
}



generatePokemon.addEventListener('click', () => {
  findPokemon()
  resultContainer.innerHTML = ''
}
  )

  closeBtn.addEventListener('click', () => {
    resultContainer.innerHTML = ''
  })
  





