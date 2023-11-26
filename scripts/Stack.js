import Domino from "./Domino.js";

class Stack {
    constructor() {
        this.last = null;
    }

    /**
     * Adds a new domino to the top of the stack
     * @param {*} domino Domino object
     * @returns 0 if domino is added successfully, or -1 if there was an error.
     */
    addDomino = (domino) => {
        if(!(domino instanceof Domino)) throw "Stack Input is not of Domino Class!";

        if(this.last === null) {
            this.last = domino;
        } else {
            this.last.next = domino;
            domino.prev = this.last;
            this.last = domino;
        }
    }

    /**
     * Removes the top domino in the stack, returning it for use in someone else's stack;
     * @returns the last domino in the stack;
     * @throws error if 
     */
    removeDomino = () => {
        if(this.last === null) throw "Stack is Empty!";


        let prev = this.last.prev;
        if(prev !== null) this.last.prev.next = null;

        let removed = this.last;
        this.last = this.last.prev;
        return removed;
    }
}

export default Stack;