import React, { Component } from "react";
import axios from "axios";
const API_URL = "https://deckofcardsapi.com/api/deck/new/shuffle/";

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
        <button onClick={this.getCard}>Deal A Card!</button>
      </div>
    );
  }
}

export default Deck;
