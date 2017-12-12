import React from 'react';
import ImageButton from './image-button'
import Header from './header'
import Footer from './footer'
import AudioSample from './audio'
import animals from './../data/animals.json'


class Gameboard extends React.Component {
  state = {
    pig: false,
    horse: false,
    goose: false,
    dog: true,
    cow: false,
    donkey: false,
    cat: false,
    bird: false,
    sheep: false,
    goat: false,
    animalToFind: animals.animals[3].find,
    sound: animals.animals[3].sound,
    score: 0
  }

  resetBoard = () => {
    for(let x in this.state){
      let obj = {};
      obj[x] = false;
      this.setState(obj);
    }
  }


  addPoint = () => {
    let newScore = this.state.score + 1;
    this.setState({score: newScore});
  }

  changeTargetAnimal = () => {
    this.resetBoard();
    let randNum = Math.floor(Math.random() * 10);
    let animal = animals.animals[randNum];
    let obj = {};
    obj[animal.name] = true;
    this.addPoint();
    this.setState(obj);
    this.setState({animalToFind: animal.find});
    this.setState({sound: animal.sound});
  }

  resetGame = () => {
    this.changeTargetAnimal();
    this.setState({score: 0});
  }

  handleClick = (animal) => {
    if(this.state[animal] === true){
      this.changeTargetAnimal();
    }
    else {
      this.resetGame();
    }
  }

  render(){
    return (
      <div>
        <Header text={"Animal Parade"} score={this.state.score}/>
        <div className="App-buttons">
          <ImageButton source={process.env.PUBLIC_URL + animals.animals[0].source} name={animals.animals[0].name} handleClick={this.handleClick}/>
          <ImageButton source={process.env.PUBLIC_URL + animals.animals[1].source} name={animals.animals[1].name} handleClick={this.handleClick}/>
          <ImageButton source={process.env.PUBLIC_URL + animals.animals[2].source} name={animals.animals[2].name} handleClick={this.handleClick}/>
          <ImageButton source={process.env.PUBLIC_URL + animals.animals[3].source} name={animals.animals[3].name} handleClick={this.handleClick}/>
          <ImageButton source={process.env.PUBLIC_URL + animals.animals[4].source} name={animals.animals[4].name} handleClick={this.handleClick}/>
          <ImageButton source={process.env.PUBLIC_URL + animals.animals[5].source} name={animals.animals[5].name} handleClick={this.handleClick}/>
          <ImageButton source={process.env.PUBLIC_URL + animals.animals[6].source} name={animals.animals[6].name} handleClick={this.handleClick}/>
          <ImageButton source={process.env.PUBLIC_URL + animals.animals[7].source} name={animals.animals[7].name} handleClick={this.handleClick}/>
          <ImageButton source={process.env.PUBLIC_URL + animals.animals[8].source} name={animals.animals[8].name} handleClick={this.handleClick}/>
          <ImageButton source={process.env.PUBLIC_URL + animals.animals[9].source} name={animals.animals[9].name} handleClick={this.handleClick}/>
        </div>
        <Footer text={this.state.animalToFind} />
        <AudioSample source={process.env.PUBLIC_URL + this.state.sound} />
      </div>
    )
  }
}

export default Gameboard;
