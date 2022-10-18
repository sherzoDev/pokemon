var elList = document.querySelector(".list");

for (const pokemon of pokemons) {

  var newPokeItem = document.createElement("li");

  var newPokeTitle = document.createElement("h3");

  var newPokeNumBadge = document.createElement("span");

  var newPokeImg = document.createElement("img");

  var newPokeType = document.createElement("p");

  var newPokeTime = document.createElement("time");

  newPokeTitle.textContent = pokemon.name;
  newPokeNumBadge.textContent = pokemon.num;
  newPokeImg.src = pokemon.img;
  newPokeImg.width = "200";
  newPokeImg.height = "200";
  newPokeImg.alt = pokemon.name;

  // Style</>

  newPokeNumBadge.classList.add("badge");
  newPokeItem.classList.add("list-item");

  newPokeType.textContent = pokemon.type;
  newPokeTime.textContent = pokemon.spawn_time;

  newPokeItem.appendChild(newPokeTitle);
  newPokeItem.appendChild(newPokeNumBadge);
  newPokeItem.appendChild(newPokeImg);
  newPokeItem.appendChild(newPokeType);
  newPokeItem.appendChild(newPokeTime);

  elList.appendChild(newPokeItem);

};