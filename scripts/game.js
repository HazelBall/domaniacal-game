import Domino from "./Domino.js";
import Stack from "./Stack.js";
import Deck from "./Deck.js";
import Player from "./Player.js"

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
    player.hand.forEach((card) => {console.log("\t" + card.toString())});
});