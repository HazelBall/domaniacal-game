import Domino from "./Domino.js";
import Stack from "./Stack.js";
import Deck from "./Deck.js";
import Player from "./Player.js";

const deck = new Deck(0, 8);
const players = [
                    new Player(true, "Player 1"), 
                    new Player(false, "Player 2"),
                    new Player(false, "Player 3")
                ];

deck.shuffle();
console.log("SHUFFLED CARDS:");
console.log(deck.cards);

//Deal Cards to players
for(let i = 0; i < 4; i ++) {
    players.forEach((player) => {
        player.drawCard(deck.draw());
    });
}

players.forEach((player) => {
    console.log("PLAYER: " + player.name);
    console.log("Stack:");
    console.log(player.stack.peek())
    console.log("Hand:");
    let hand = "";
    player.hand.forEach((card) => {hand += card.toString() + ", "});
    console.log(hand);
});

// Game Model
class GameModel {
    constructor() {
        this.gameStarted = false;
        this.players = []; // array of all players
    }

    addPlayer = () => {

    }

    startGame = () => {
        if(this.players.length < 2) throw "Player"
    }
}