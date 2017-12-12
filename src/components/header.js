import React, {Component} from 'react'

class Header extends Component {
  render(){
    return (
      <header className = 'App-header'>
        <h1 className = 'App-title Large'>{this.props.text}</h1>
        <h1 className='App-counter'>Score: {this.props.score}</h1>
      </header>
    )
  }
}

export default Header;
