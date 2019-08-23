import React, { Component } from "react";
import axios from "axios";
const API_BASE_URL = "https://deckofcardsapi.com/api/deck";

class Deck extends Component {
  state = {
    deck: null
  };

  async componentDidMount() {
    let deck = await axios.get(`${API_BASE_URL}/new/shuffle/`);
    this.setState({ deck: deck.data });
  }

  getCard = async () => {
    let deck_id = this.state.deck.deck_id;
    let cardUrl = `${API_BASE_URL}/${deck_id}/draw/`;
    let cardResults = await axios.get(cardUrl);
    console.log(cardResults.data);
  };

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
