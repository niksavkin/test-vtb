import React, { Component } from 'react';
import { Image } from './components/image';
import { Button } from './components/button';
import { Counter } from './components/counter';
import styles from "./App.module.scss";

class App extends Component {
  state = {
    imageQuantity: 1,
    imageSrc: 'http://via.placeholder.com/150x150'
  };
  
  renderImages() {
    let result = [];
    for (let i=1; i<= this.state.imageQuantity; i++) {
      result.push((<Image src={this.state.imageSrc} key={i}/>))
    }
    return result;
  }
  
  render() {
    return (
      <div className="App">
        <div className={styles.Center}>
        {this.renderImages()}
        </div>
        <div className={styles.Center}>
          <Counter text={this.state.imageQuantity}/>
        </div>
        <div className={styles.Center}>
          <Button text="-" className = {styles.Button} onClick={this.minusClickHandler.bind(this)} disabled={this.state.imageQuantity === 1}/>
          <Button text="+" className = {styles.Button} onClick={this.plusClickHandler.bind(this)}/>
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
