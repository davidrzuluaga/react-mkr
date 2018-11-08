import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      fruits: ["Papaya", "Pera", "Manzana"]
    }
  }
  render() {
    const Shop = (props) => <p>Le tengo la {props.fru} a {props.price}</p>
    return (
      <div>
        <h1>Mi primera aplicación</h1>
          {this.state.fruits.map(fruit =>
            //<p>Le tengo la {fruit}</p>
            <Shop fru = {fruit} price = "2" />
            )}
        <button onClick={this.addOne.bind(this)}>add a new Mango</button>
        <button onClick={this.modOne.bind(this)}>edit Mango for Sandia</button>
        <button onClick={this.delOne.bind(this)}>delete Mango</button>
        <p>Esta es mi primera aplicación en React, está padrísimo!</p>
      </div>
    );
  }
  addOne (){
    this.setState({
      fruits: this.state.fruits.concat("Mango")
    })
  }
  
  modOne (){
    const index = this.state.fruits.findIndex(task =>
      task === "Mango"
      );
    this.setState({
      fruits: this.state.fruits.map((fruit, i) =>
        index === i ? "Sandia" : fruit
      )
    });
  }

  delOne (){
    const index = this.state.fruits.findIndex(task =>
      task === "Mango"
      );
    this.setState({
      fruits: this.state.fruits.filter((fruit, i) =>
        index !== i
      )
    })
  }
  
}

export default App;
