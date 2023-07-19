// Lista de cartas 
const ListOfCards = [
  {
    nome: 'card01',
    img: '../../memory-page/assets/Cards/acai01.png'
  },
  {
    nome: 'card02',
    img: '../../memory-page/assets/Cards/tartaruga.png',
  },
  {
    nome: 'card03',
    img: '../../memory-page/assets/Cards/iara.png' 
  },
  {
    nome: 'card04',
    img: '../../memory-page/assets/Cards/pai.png'
  },
  {
    nome: 'card05',
    img: '../../memory-page/assets/Cards/menina3.png',
  },
  {
    nome: 'card06',
    img: '../../memory-page/assets/Cards/radio.png',
  },
  {
    nome: 'card07',
    img: '../../memory-page/assets/Cards/televisor.png',
  },
  {
    nome: 'card08',
    img: '../../memory-page/assets/Cards/vaso-flor.png',
  },
  {
    nome: 'card09',
    img: '../../memory-page/assets/Cards/cesta.png',
  },
  {
    nome: 'card10',
    img: '../../memory-page/assets/Cards/barco.png',
  },
  {
    nome: 'card01',
    img: '../../memory-page/assets/Cards/acai01.png'
  },
  {
    nome: 'card02',
    img: '../../memory-page/assets/Cards/tartaruga.png',
  },
  {
    nome: 'card03',
    img: '../../memory-page/assets/Cards/iara.png' 
  },
  {
    nome: 'card04',
    img: '../../memory-page/assets/Cards/pai.png'
  },
  {
    nome: 'card05',
    img: '../../memory-page/assets/Cards/menina3.png',
  },
  {
    nome: 'card06',
    img: '../../memory-page/assets/Cards/radio.png',
  },
  {
    nome: 'card07',
    img: '../../memory-page/assets/Cards/televisor.png',
  },
  {
    nome: 'card08',
    img: '../../memory-page/assets/Cards/vaso-flor.png',
  },
  {
    nome: 'card09',
    img: '../../memory-page/assets/Cards/cesta.png',
  },
  {
    nome: 'card10',
    img: '../../memory-page/assets/Cards/barco.png',
  }
]
// duplicação de cards
// const duplicateListOfCards = ListOfCards.concat(listOfCards)
// Posicionando cartas de forma aleatória
ListOfCards.sort(() => 0.5 - Math.random())
// Mostrar cartas 
const showCards = document.getElementById('grid-cards')
// Variáveis para verificar cartas escolhidas
let choiceCard = []
let choiceCardID = []

// Verificação de acertos 
let correctChoices = []

// Função para exibir cartas na página
function ShowCardsInPage(){
  //Laço de repetição para percorrer lista de cards
  for(let i = 0; i < ListOfCards.length ; i++){

    //crianda fundo das imagens invertidas 
    const card = document.createElement('img')

    // Estilização dos Cards 
    card.style.width = '90px'
    card.style.backgroundImage = "url('../../memory-page/assets/Cards/bg-cards.png')"
    card.style.backgroundSize = 'contain'
    card.style.backgroundPosition = 'center'
    card.style.transformStyle = 'preserve-3d'

    
    card.setAttribute('className', 'card-img')
    card.setAttribute('card-id', i)
    card.setAttribute('src', ListOfCards[i].img)
    card.addEventListener('click', TurnCard)  
    showCards.appendChild(card)

    setTimeout(() => {
      card.setAttribute('src', '../../memory-page/assets/Cards/bg-cards.png')
    }, 500)

  }
  
}
// Mostrar cards
ShowCardsInPage()

// função virar cards
function TurnCard (){ 
  const cardId = this.getAttribute('card-id')
  choiceCard.push(ListOfCards[cardId].nome)
  choiceCardID.push(cardId)
  this.setAttribute('src', ListOfCards[cardId].img)
  console.log(choiceCard)
  console.log(choiceCardID)

  if (choiceCard.length > 2){
    ReturnCard()
  }

  if (choiceCard.length === 2){
    setTimeout(EqualCards, 500)
  }

}

// função desvirar cards se tiver mais de 2 escolhas 
function ReturnCard (){
  alert("É permitido virar somente 2 cartas por vez")
  const listOfCards = document.querySelectorAll('section > img')
  const extraCard = choiceCardID[choiceCardID.length - 1]
  listOfCards[extraCard].setAttribute('src', '../../memory-page/assets/Cards/bg-cards.png')
  choiceCard.indexOf(choiceCard.length - 1)
}

// Função verificar Cards
function EqualCards () {
  const choice01 = choiceCardID[0] // primeiro elemento do vetor choiceCardID 
  const choice02 = choiceCardID[1] // segundo elemento do vetor choiceCardID
  const listOfCards = document.querySelectorAll('section > img')
  
  console.log(choice01)
  console.log(choice02)
  console.log(listOfCards[choice01])
  console.log(listOfCards[choice02])

  if(choiceCard[0] !== choiceCard[1]) {
    console.log("você errou")
    listOfCards[choice01].setAttribute('src', '../../memory-page/assets/Cards/bg-cards.png')
    listOfCards[choice02].setAttribute('src', '../../memory-page/assets/Cards/bg-cards.png') 
    choiceCard.length = 0
    choiceCardID.length = 0
  } else if (choice01 === choice02 && choiceCard[0] === choiceCard[1]){
    alert("você clicou na mesma carta, tente outra vez!") 
    listOfCards[choice01].setAttribute('src', '../../memory-page/assets/Cards/bg-cards.png')
    listOfCards[choice02].setAttribute('src', '../../memory-page/assets/Cards/bg-cards.png') 
    choiceCard.length = 0
    choiceCardID.length = 0
    console.log(choiceCard)
  } else{
    console.log("você acertou")
    listOfCards[choice01].removeEventListener('click', TurnCard)
    listOfCards[choice02].removeEventListener('click', TurnCard)
    choiceCard.length = 0
    choiceCardID.length = 0

    //verificação dos acertos para exibição da mensagem de fim de jogo
    correctChoices.push(choiceCard)
    console.log(correctChoices)

    if (correctChoices.length == ListOfCards.length/2 ){
      alert("Parabéns! Você conseguiu achar todos os cards")
      Reset()
      //zerar verificação de acertos
      correctChoices.length = 0
    }
  }
}

// Função para reiniciar o Jogo
function Reset () {
  const listOfCards = document.querySelectorAll('section > img')
  listOfCards.forEach(element => {
    element.remove()
  })
  // Posicionando cartas de forma aleatória
  ListOfCards.sort(() => 0.5 - Math.random())
  setTimeout(ShowCardsInPage, 100)
}

// Função Novo Jogo 
function NewGameReset () {
  let newGame = confirm('Você deseja realmente iniciar um novo jogo?') 
  if (newGame === true){
    const listOfCards = document.querySelectorAll('section > img')
    listOfCards.forEach(element => {
      element.remove()
    })
    // Posicionando cartas de forma aleatória
    ListOfCards.sort(() => 0.5 - Math.random())
    setTimeout(ShowCardsInPage, 100)
  }
}

