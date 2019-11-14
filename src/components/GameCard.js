import React from "react";
import propTypes from "prop-types"

const GameCard = ({ game }) => (
    <div  className="ui card">
        <div className="image">
<span className="ui green ribbon label">${game.price} {game.price < 5050 && "!"}</span>
            <img src={game.thumbnail}
            alt="Game cover"/>
    </div>
    <div className="content">
<a href="#" className="header">{game.name}</a>
        <div className="metal"> 
        <i className="icon users" />{game.players}&nbsp;
        <i className="icon wait" />{game.durations}min.
        </div>
        </div>
    </div>
);

GameCard.propTypes = {
    game: propTypes.shape({
        name: propTypes.string.isRequired,
        thumbnail: propTypes.string.isRequired,
        players: propTypes.string.isRequired,
        price: propTypes.number.isRequired,
        duration: propTypes.number.isRequired,

    }).isRequired
}

export default GameCard;