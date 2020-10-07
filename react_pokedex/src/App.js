import React from "react";
import "./css/bootstrap.min.css";
import "./App.css";
import Card from "./components/Card";
import Button from "./components/Button";

class App extends React.Component {
  state = {
    id: "",
    name: "",
    height: "",
    weight: "",
    type: "",
    source: "",
  };

  componentDidMount() { 
    this.clickPokemon('1')
  }

  clickPokemon(id) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        let myTypes = json.types
          .map(function (elem) {
            return elem.type.name;
          })
          .join(", ");

        this.setState({
          name: json.name,
          height: json.height,
          weight: json.weight,
          type: myTypes,
          source: `https://pokeres.bastionbot.org/images/pokemon/${id}.png`,
        });
      });
  }

  render() {
    return (
      <div>
        <div className="jumbotron d-flex justify-content-center" style={{ backgroundColor: "black", color: "white" }}>
          <Card
            name={this.state.name}
            height={this.state.height}
            weight={this.state.weight}
            type={this.state.type}
            source={this.state.source}/>
        </div>
        <div className="d-flex justify-content-around">
          <Button onClick={this.clickPokemon.bind(this, "1")} width='200' />  
          <Button onClick={this.clickPokemon.bind(this, "2")} />
        </div>
      </div>
    );
  }
}
export default App;
