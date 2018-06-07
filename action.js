function showPokemon(query) {
  var result = "";
  
  if(query == null){
    console.log("Voy a mostrar todos");
    for(var i=0; i<pokemones.length; i++){
        result += buildPokemon(i);
    }
    document.getElementById("result").innerHTML = result;
  } else {
    console.log(query);
    for(var i=0; i<pokemones.length; i++){
      if(pokemones[i].name.toLowerCase().search(query) >= 0){
        result += buildPokemon(i);
      }
    }
    document.getElementById("result").innerHTML = result;
  }
}

function searchPokemon() {
  var query = document.getElementById("query").value;
  
  showPokemon(query);
}

function buildPokemon(id) {
    var pokemon = "";
    var type = pokemones[id].type;
    
    console.log(type)
    
    pokemon += "<div class='pokemon'>";
    pokemon += "<img src='" + pokemones[id].ThumbnailImage + "'>"
    pokemon += "<h2>" + pokemones[id].name + "</h2>";
    pokemon += "<div class='details'>" +
            "<div class='id'>"+ pokemones[id].id + "</div>" +
    "<div class='types'>";
    
    for(var i=0; i<type.length; i++){
        pokemon += "<span class='type type-"+ type[i] + "'>" + type[i] + "</span>"
    }
    
    pokemon += "</div>" + "</div>";
    pokemon += "</div>";
    
    return pokemon;
}
