import React, { Component } from "react";
const API_URL = "https://deckofcardsapi.com/api/deck/new/shuffle";

class Deck extends Component {
  state = {
    deck: null
  };

  async componentDidMount() {
    let deck = await axios.get(API_URL);
    this.setState({ deck: deck.data });
  }

  render() {
    return (
      <div>
        <h1>Lucky Cards</h1>
      </div>
    );
  }
}

export default Deck;
