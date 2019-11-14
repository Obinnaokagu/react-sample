import React from "react";
import propTypes from "prop-types";
import GameCard from "./GameCard";

const GamesList = ({ games }) => (
  <div className="ui four cards">
    {games.length === 0 ? (
      <div className="ui icon message">
        <i className="icon info"></i>
        <div className="content">
          <div className="header">There is no game in your store!</div>
          <p>You should add some, don't u think?</p>
        </div>
      </div>
    ) : (
      games.map(game => <GameCard game={game} key={game._id} />)
    )}
  </div>
);
GamesList.propTypes = {
  game: propTypes.arrayOf(propTypes.object).isRequired
};

GamesList.defaultProps = {
    games: []

};

export default GamesList;
