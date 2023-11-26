import Domino from "./Domino.js";
import Hand from "./Hand.js";
import Stack from "./Stack.js";
import Deck from "./Deck.js";

const deck = new Deck(8);
deck.shuffle();
console.log(deck.cards);
const stackPlayer1 = new Stack();
stackPlayer1.addDomino(deck.removeTopCard());
stackPlayer1.addDomino(deck.removeTopCard());
stackPlayer1.addDomino(deck.removeTopCard());
stackPlayer1.addDomino(deck.removeTopCard());
console.log(stackPlayer1.last.toString());

