import React from "react";

const GameCard = () => (
    <div  className="ui card">
        <div className="image">
            <span className="ui green ribbon label">$49.50</span>
            <img src="https://www.mmoga.com/images/games/_ext/1134215/swtor-gamecard-prepaid-90-days_large.png" 
            alt="Game cover"/>
    </div>
    <div className="content">
        <a href="#" className="header">Old Republic</a>
        <div className="metal"> 
        <i className="icon user" />2-4&nbsp;
        <i className="icon wait" />60 min
        </div>
        </div>
    </div>
);

export default GameCard;