import Domino from "./Domino.js";

class Hand {
    constructor() {
        this.cards = [];
    }
    addDomino(domino) {
        if(!(domino instanceof Domino)) throw "Domino being added to hand is not of Domino class";
        this.cards.push(domino);
    }

    removeDomino(domino) {
        let newCards = [];
        let removedCard = null;
        this.cards.forEach((card) => {
            if(!card.equals(domino)) 
                newCards.push(card);
            else 
                removedCard = card;
        });
        this.cards = newCards;
        return removedCard;
    }
}

export default Hand;