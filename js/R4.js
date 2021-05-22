function listar(){
fetch('https://pokeapi.co/api/v2/pokemon?limit=1&offset=200')
  .then(response => response.json())
  .then(data =>{
    let pokemon = data;
 
    
    pokemon.forEach(function(item, index){
        document.getElementById("exe").innerHTML += "<tr><td>" + index.results[index].name + "</td><td>"+ index.results[index].url + "</td></tr>";
    });
     

    
  });
}