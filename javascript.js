var suco = ["lemonade juice","orange juice","cranberry juice","strawberry juice",
"grapefruit juice","lime juice","coconut water","papaya juice","watermelon juice","lemonade juice","orange juice","cranberry juice","strawberry juice",
"pamegranate juice","peach juice","prune juice","clam juice","lemon juice","orange ",
"papaya juice","tamato juice","aloe vera juice","pog juice","cucumber juice","melon juice",
"carrot and apple juice","carrot juice","wheatggrass juice","beet juice","limão" , "tangerina" ,
"laranja" , "groselha" , "abacaxi" , "maracuja" , "guarana" , "maçã" , "abacaxi com hortelã" ,
"caju" , "uva" , "kiwi" , "morango" , "PUTS AMIGÃO!!! você deu azar, vai ficar sem suco 😪"]
          
function gigabyte () {
  var divGiga = document.querySelector ('.gigabyte') 
  var botão = document.querySelector('button')
  botão.innerHTML = "Mais um suco, por favor!"

  var output = document.querySelector('p')
  var sucoDaVez = suco[Math.floor(Math.random() * suco.length)]

  output.innerHTML = sucoDaVez 

  if(output.innerHTML === suco[suco.length-1]){ 
    botão.setAttribute("disabled", true)
    botão.innerHTML = "Acabou o suco vai pra casa"
    divGiga.style.backgroundImage = "url(https://scontent.fsdu13-1.fna.fbcdn.net/v/t1.0-9/10613163_732160980237289_2006041161402559946_n.jpg?_nc_cat=107&_nc_sid=9267fe&_nc_ohc=aUyCQhUjOFQAX8AX51S&_nc_ht=scontent.fsdu13-1.fna&oh=87fe3c5a21ab4b57790a0d2acbac3f49&oe=5EA32E8B)"
    
  }
  
}

 
console.log((Math.random() * suco.length))