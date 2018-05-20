import React, { Component } from 'react';
import { Image } from './components/image';
import { Button } from './components/button';
import { Counter } from './components/counter';

class App extends Component {
  state = {
    imageQuantity: 1,
    imageSrc: 'http://via.placeholder.com/150x150'
  };
  
  renderImages() {
    let result = [];
    for (let i=1; i<= this.state.imageQuantity; i++) {
      result.push((<Image src={this.state.imageSrc}/>))
    }
    return result;
  }
  
  render() {
    return (
      <div className="App">
        <div>
        {this.renderImages()}
        </div>
        <div>
          <Counter text={this.state.imageQuantity}/>
        </div>
        <div>
          <Button text="-" onClick={this.minusClickHandler.bind(this)}/>
          <Button text="+" onClick={this.plusClickHandler.bind(this)}/>
        </div>
      </div>
    );
  }
  
  minusClickHandler() {
    this.setState({imageQuantity: this.state.imageQuantity - 1});
  }
  
  plusClickHandler() {
    this.setState({imageQuantity: this.state.imageQuantity + 1});
  }
}

export default App;
