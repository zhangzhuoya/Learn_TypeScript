type Deck = NormalCard[]
type NormalCard = {
    color: "♥"|"♠"|"♦"|"♣",
    mark: number
}

function createDeck(): Deck {
    let DeckList: Deck = [];
    for (let i = 0; i <= 13; i++) {
        DeckList.push(
            {
                mark: i,
                color: '♥'
            },
            {
                mark: i,
                color: '♠'
            },
            {
                mark: i,
                color: '♦'
            },
            {
                mark: i,
                color: '♣'
            }
        )
    }
    return DeckList
}
const deck = createDeck();

function printDeck(deck: Deck) {
    let str = '';
    deck.forEach((item)=>{
        if (item.mark<=10) {
            str+=item.mark
        }else if(item.mark==11){
            str+="J";
        }else if(item.mark==12){
            str+="Q";
        }else if(item.mark==13){
            str+="K";
        }
    })
    console.log(str);
    
}
printDeck(deck)