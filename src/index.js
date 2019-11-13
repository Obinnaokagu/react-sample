import React from "react";
import { render } from "react-dom";
import GameCard from "./components/GameCard"
import "semantic-ui-css/semantic.min.css";

const games = [
    {
        name: "Old Republic",
        price: "59.99",
        thumbnail: "https://www.mmoga.com/images/games/_ext/1134215/swtor-gamecard-prepaid-90-days_large.png" ,
        players: "2-4",
        duration: "60",
    },
    {
        name: "ROBLOX",
        price: "50.32",
        thumbnail: "https://images.costco-static.com/ImageDelivery/imageService?profileId=12026540&itemId=1273299-847&recipeName=680",
        players: "2-6",
        duration: "80",
    },
    {
        name: "LEAGUE Of LEGENDS",
        price: "50.25",
        thumbnail: "https://media.gamestop.com/i/gamestop/10116415/League-of-Legends-$50-Game-Card?$zoom$",
        players: "2-6",
        duration: "85",
    },
    {
        name: "WORLD /n WARCRAFT",
        price: "1999.00",
        thumbnail: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5823/5823035_sd.jpg",
        players: "2-8",
        duration: "95",
    }
]
render(<GameCard game={games[1]} />, document.getElementById("root"));
