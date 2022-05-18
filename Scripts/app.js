class Deck {
  constructor() {
    this.deck = [];
    const suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
    const values = ['Ace', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];   for (let suit in suits) {
      for (let val in values) {
        this.deck.push(`${values[val]} of ${suits[suit]}`);
      }
    }
  }
  splitDeck() {
    const deck = this.deck;
    let hand1 = deck.slice(deck.length / 2);
    let hand2 = deck.slice(deck.length / 2);
    return [hand1, hand2];
  }
  
  shuffle() {
    let [hand1, hand2] = this.splitDeck()
    hand1.sort(() => 0.5 - Math.random())
    hand2.sort(() => 0.5 - Math.random())
    return [hand1, hand2]
  }

  //pops a value off of the array and returns it to the user
  deal() {
    return this.deck.pop();
  }
  
  //Resets deck for fair reshuffling
  reset() {
    this.deck = [];
  }
}
