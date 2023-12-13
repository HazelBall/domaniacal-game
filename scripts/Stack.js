import Domino from "./Domino.js";

class Node {
    constructor(card) {
        this.card = card;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.topCard = null;
    }

    /**
     * 
     * @param {*} newCard 
     */
    push = (newCard) => {
        if(this.topCard = null) this.top = new Node(newCard);
        else {
            let newNode = new Node(newCard)
            newNode.next = this.topCard;
            this.topCard = newNode;
        }
    }

    /**
     * 
     * @returns 
     */
    pop = () => {
        if(this.topCard === null) throw "Stack is Empty!";

        const poppedCard = this.top.card;
        this.top = this.top.next;
        return poppedCard;
    }

    /**
     * 
     * @returns 
     */
    peek = () => {
        if(this.topCard != null)
            return this.topCard.card;
        else return null;
    }
}

export default Stack;