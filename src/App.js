import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      fruitName: "",
      fruits: ["Papaya", "Pera", "Manzana"],
      newApple: false,
      fruitForm: false
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
        <input type="text" value={this.state.fruitName} disabled= {this.state.fruitForm} onChange={this.updateName.bind(this)}></input>
        <button onClick={this.addOne.bind(this)}>add a new {this.state.fruitName}</button>
        <button onClick={this.modOne.bind(this)}>edit {this.state.fruitName} for Sandia</button>
        <button onClick={this.delOne.bind(this)}>delete {this.state.fruitName}</button>
      <div>
        <label>
          <input type="checkbox" checked={this.state.newApple} onClick = {this.checkNewApple.bind(this)} />Add Apple
        </label>
      </div>
        <p>Esta es mi primera aplicación en React, está padrísimo!</p>
      </div>
    );
  }

  checkNewApple(event){
    var fruitForm
    var fruitName
    this.state.newApple ? fruitForm = false : fruitForm = true;
    this.state.newApple ? fruitName = "" : fruitName = "Manzana";
    this.setState({
      newApple: event.target.checked,
      fruitName: fruitName,
      fruitForm: fruitForm
    })
  }

  updateName(event){
    this.setState({
      fruitName: event.target.value
    })
  }

  addOne (){
    this.setState({
      fruits: this.state.fruits.concat(this.state.fruitName)
    })
  }
  
  modOne (){
    const index = this.state.fruits.findIndex(fruit =>
      fruit === this.state.fruitName
      );
    this.setState({
      fruits: this.state.fruits.map((fruit, i) =>
        index === i ? "Sandia" : fruit
      )
    });
  }

  delOne (){
    const index = this.state.fruits.findIndex(task =>
      task === this.state.fruitName
      );
    this.setState({
      fruits: this.state.fruits.filter((fruit, i) =>
        index !== i
      )
    })
  }
  
}

export default App;
