import Stack from "./Stack.js";

class Player {
    constructor(isHuman, name) {
        this.isHuman = isHuman;
        this.name = name;
        this.hand = [];
        this.stack = new Stack();
    }
    drawCard = (card) => {
        this.hand.push(card);
    }
    playCardFromHand = (card) => {
        this.playCard(card);
        let newCards = [];
        this.cards.forEach((handCard) => {
            if(!handCard.equals(card)) 
                newCards.push(handCard);
        });
        this.cards = newCards;
    }

    playCard = (card) => {
        this.stack.push(card);
    }
    stealFromPlayer = () => {
        return this.stack.pop();
    }
}

export default Player;