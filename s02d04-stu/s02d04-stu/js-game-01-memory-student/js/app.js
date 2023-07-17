document.addEventListener('DOMContentLoaded' , ()=>{
    const cardArray =[
        {
            name:'bread',
            img: 'img/bread.png'
        },
        {
            name:'bread',
            img: 'img/bread.png'
        },
        {
            name:'chicken',
            img: 'img/chicken.png'
        },
        {
            name:'chicken',
            img: 'img/chicken.png'
        },
        {
            name:'milkshake',
            img: 'img/milkshake.png'
        },
        {
            name:'milkshake',
            img: 'img/milkshake.png'
        },
        {
            name:'muffins',
            img: 'img/muffins.png'
        },
        {
            name:'muffins',
            img: 'img/muffins.png'
        },
        {
            name:'salmon',
            img: 'img/salmon.png'
        },
        {
            name:'salmon',
            img: 'img/salmon.png'
        },
        {
            name:'soup',
            img: 'img/soup.png'
        },
        {
            name:'soup',
            img: 'img/soup.png'
        }
        
    ]
    
    cardArray.sort(()=>0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')

    let cardsChosen = []
    let cardsChosenId = []
    let cardsWon = []

    function createBoard(){
        for(let i = 0; i < cardArray.length; i++){
            let card = document.createElement('img')
            card.setAttribute('src','img/leaves.png')
            card.setAttribute('date-id', i)
           card.addEventListener('click',flipCard)
            grid.appendChild(card)
        }
    }

    function flipCard(){
        let cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if(cardsChosen.length === 2){
            setTimeout(checkForMatch, 500)
        }
    }

    function checkForMatch(){
        let cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optiontwoId = cardsChosenId[1]
        if (optionOneId === optiontwoId){
            cards[optionOneId].setAttribute('src','img/leaves.png')
            cards[optiontwoId].setAttribute('src','img/leaves.png')
            alert('pasirinkai ta pacia korta')
        }else if(cardsChosen[0]=== cardsChosen[1]){
            alert('teisingai')
            cards[optionOneId].setAttribute('src','img/blank.png')
            cards[optiontwoId].setAttribute('src','img/blank.png')
            cards[optionOneId].style.pointerEvents = "none"
            cards[optiontwoId].style.pointerEvents = "none"
            cardsWon.push(cardsChosen)
        }else {
            cards[optionOneId].setAttribute('src','img/leaves.png')
            cards[optiontwoId].setAttribute('src','img/leaves.png')
            alert('neatspejai bandyk dar karta')
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if(cardsWon.length === cardArray.length/2){
            resultDisplay.textContent = 'sveikiname atspejai visas kortas'
            if(confirm('ar zaisi dar karta')){
                document.location.href = ''
            }else{
                resultDisplay.textContent = 'iki kito karto'
            }
        }
    }

    createBoard()

})