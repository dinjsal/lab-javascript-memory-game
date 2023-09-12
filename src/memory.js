class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {

    if (!this.cards) return undefined;

    else {
      for (let i = 0; i < this.cards.length; i++) {
        let j = Math.floor(Math.random() * i);
        let temp = this.cards[i];
        this.cards[i] = this.cards[j];
        this.cards[j] = temp;
      }
    }     
  }

  checkIfPair(card1, card2) {
    if (card1 === card2) {
      this.pairsGuessed ++;
      return true;
    }
    else if (card1 !== card2) {
      this.pairsClicked ++;
      return false;
    }
  }

  checkIfFinished() {
    if (this.pairsGuessed === this.cards.length/2) return true;
    else return false;
  }
}
