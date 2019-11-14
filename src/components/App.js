import React from "react";
import GamesList from "./GamesList";

// const games = undefined;

const games = [
    {
        _id: 1,
        name: "Old Republic",
        price: 5999,
        thumbnail: "https://www.mmoga.com/images/games/_ext/1134215/swtor-gamecard-prepaid-90-days_large.png" ,
        players: "2-4",
        duration: 60,
    },
    {
        _id:  2,
        name: "FINAL FANTASY",
        price: 5032,
        thumbnail: "https://www.mmoga.com/images/games/_ext/1022843/final-fantasy-xiv-a-realm-reborn-gamecard-60-tage_large.png",
        players: "2-6",
        duration: 80,
    },
    {
        _id: 3,
        name: "BATTLEGROUNDS",
        price: 5025,
        thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpbPAL0edrN22lffrixO2oxT2AsbPcD-LAGWegwz3sNx9hzSL7&s",
        players: "2-6",
        duration: 85,
    },
    {
        _id: 4,
        name: "WORLD WARCRAFT",
        price: 199900,
        thumbnail: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5823/5823035_sd.jpg",
        players: "2-8",
        duration: 95,
    }
]

class App extends React.Component {
    state = {
        games: []
    };

    componentDidMount() {
        this.setState({ games });
    }

    render() {
        
        return(
            <div className="ui container">
            <GamesList games={this.state.games} />
        </div>
        );
    }
    
}




export default App;