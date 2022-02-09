import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

class Square extends React.Component {
// State
  constructor(props){
    super(props);
    this.state = {
      value: null,
    }
  }

  render() {
    return (
      <button className="square" onClick={() => console.log('click')}>
        {this.props.value}
      </button>
    );
  }
}

class Board extends React.Component {
  renderSquare(i) {
    return <Square />;
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Lins extends React.Component {
  render() {
    return(
      <div>
        <p>Lins is { this.props.value }</p>
      </div>
    )
  }
}



class Game extends React.Component {
  linsFunction(i){
    return <Lins value = {i} />
  }

  render() {
    return (
      <div className="game">
        { this.linsFunction("variable")}
        <div className="game-board">
          <Board />
        </div>
        
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
