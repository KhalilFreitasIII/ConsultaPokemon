var input  = document.getElementById("Input")

function title(str) {
    str = str.toLowerCase();
    str = str.split(" ");
    for (var i = 0; i < str.length; i++) 
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);   
    var str = str.join(" ");
    return str;
  }
  
async function dadosPokemon(nome) {
    const urlPokemon = `https://pokeapi.co/api/v2/pokemon/${nome}/`;
    let ans = ['null',0,'null']
    try {
      const response = await fetch(urlPokemon);
      const data = await response.json();
      ans[0] = data.name
      ans[1] = data.id
      ans[2] = data.sprites.front_default
      return ans;
    } catch (error) {
      console.log("Erro de requerimento", error);
      return ans;
    }
  }

input.addEventListener("keydown",async function(event){
    if(event.key=="Enter"){
        event.preventDefault()
        const pokemon = await dadosPokemon(input.value.toLowerCase().trim())
        let name = document.getElementById("nome")
        let id  = document.getElementById('id')
        if(document.getElementsByTagName(Image))
            document.getElementsByTagName(Image).src=pokemon[2]
        let front = document.createElement('img')
        let white = document.getElementById("white")
        front.src = pokemon[2]
        name.classList.remove("hidden")
        id.classList.remove("hidden")
        white.appendChild(front);
        id.innerHTML = "Pokedex: "+pokemon[1] 
        name.innerHTML = title(pokemon[0])
        input.value=''
    }
})

