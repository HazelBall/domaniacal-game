import Domino from "./Domino.js";

const PIPS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

class Deck {
    constructor(maxPips) {
        /*this.cards = PIPS.flatMap((sideOne) => {
            return PIPS.map((sideTwo) => {
                return new Domino(sideOne, sideTwo);
            })
        })*/
        var cards = []
        for(let i = 0; i <= maxPips; i++) {
            for(let j = i; j <= maxPips; j++) {
                cards.push(new Domino(i, j))
            }
        }
        this.cards = cards;
        
    }


    shuffle = () => {
        for(let i = this.cards.length - 1; i > 0; i--) {
            const newIndex = Math.floor(Math.random() * (i + 1));
            const swappedDomino = this.cards[newIndex];
            this.cards[newIndex] = this.cards[i];
            this.cards[i] = swappedDomino;
        }
    }

    removeTopCard = () => {
        return this.cards.pop();
    }
}

export default Deck;