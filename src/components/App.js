import React from "react";
import GamesList from "./GamesList";


const games = [
    {
        _id: 1,
        name: "Old Republic",
        price: "59.99",
        thumbnail: "https://www.mmoga.com/images/games/_ext/1134215/swtor-gamecard-prepaid-90-days_large.png" ,
        players: "2-4",
        duration: "60",
    },
    {
        _id:  2,
        name: "FINAL FANTASY",
        price: "50.32",
        thumbnail: "https://www.mmoga.com/images/games/_ext/1022843/final-fantasy-xiv-a-realm-reborn-gamecard-60-tage_large.png",
        players: "2-6",
        duration: "80",
    },
    {
        _id: 3,
        name: "LEAGUE Of LEGENDS",
        price: "50.25",
        thumbnail: "https://media.gamestop.com/i/gamestop/10116415/League-of-Legends-$50-Game-Card?$zoom$",
        players: "2-6",
        duration: "85",
    },
    {
        _id: 4,
        name: "WORLD WARCRAFT",
        price: "1999.00",
        thumbnail: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5823/5823035_sd.jpg",
        players: "2-8",
        duration: "95",
    }
]
const App = () => (
    <div className="ui container">
        <GamesList games={games} />
    </div>
);



export default App;