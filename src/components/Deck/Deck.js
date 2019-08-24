import React, { Component } from "react";
import Card from "../Card/Card";
import axios from "axios";
const API_BASE_URL = "https://deckofcardsapi.com/api/deck";

class Deck extends Component {
  state = {
    deck: null,
    drawn: []
  };

  async componentDidMount() {
    let deck = await axios.get(`${API_BASE_URL}/new/shuffle/`);
    this.setState({ deck: deck.data });
  }

  getCard = async () => {
    let deck_id = this.state.deck.deck_id;
    try {
      let cardUrl = `${API_BASE_URL}/${deck_id}/draw/`;
      let cardResults = await axios.get(cardUrl);
      if (!cardResults.data.success) {
        throw new Error("No card remaining");
      }
      console.log(cardResults.data);
      let card = cardResults.data.cards[0];
      this.setState(st => ({
        drawn: [
          ...st.drawn,
          {
            id: card.code,
            image: card.image,
            name: `${card.value} of ${card.suit}`
          }
        ]
      }));
    } catch (err) {
      alert(err);
    }
  };

  render() {
    const cards = this.state.drawn.map(card => (
      <Card key={card.id} name={card.name} image={card.image} />
    ));
    return (
      <div>
        <h1>Lucky Cards</h1>
        <button onClick={this.getCard}>Deal A Card!</button>
        <div className="CardArea">{cards}</div>
      </div>
    );
  }
}

export default Deck;
