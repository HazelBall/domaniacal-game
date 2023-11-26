/**
 * 
 */

class Domino {
    constructor(sideOne, sideTwo) {
        this.sideOne = sideOne;
        this.sideTwo = sideTwo;
        this.next = null;
        this.prev = null;
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
            && (this.sideOne === domino.sideOne
            || this.sideOne === domino.sideTwo
            || this.sideTwo === domino.sideOne
            || this.sideTwo === domino.sideTwo)
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
        return this.sideOne + "-" + this.sideTwo;
    }
}

export default Domino