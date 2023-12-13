/**
 * 
 */

class Domino {
    constructor(side1, side2) {
        this.side1 = side1;
        this.side2 = side2;
    }

    static createDeck = (minPips, maxPips) => {
        
    }

    /**
     * Checks to see if another domino matches one side with this domino.
     * @param {*} domino 
     * @returns boolean true if they do match, and false if the other object 
     * is not a domino or doesn't match.
     */
    matches = (domino) => {
        if(
            domino instanceof Domino
            && (this.side1 === domino.side1
            || this.side1 === domino.side2
            || this.side2 === domino.side1
            || this.side2 === domino.side2)
        ) return true;
        return false;
    }

    /**
     * Checks to see if two dominos are the same domino.
     * @param {*} domino 
     * @returns true if the domino is a 
     */
    equals = (domino) => {
        if(
            (typeof domino === "string" && this.toString() === domino)
            || (typeof domino === Domino && this.toString() === domino.toString())
        ) return true;
        return false;
    }

    /**
     * Returns string of the domino for easy comparison, printing, and for use
     * with domino images;
     * @returns string containing the two sides of the domino, split by a hyphen
     */
    toString = () => {
        return this.side1 + "-" + this.side2;
    }
}

export default Domino