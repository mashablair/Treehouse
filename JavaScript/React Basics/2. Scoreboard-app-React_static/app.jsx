function Application() {
  return (
    <div className="scoreboard">
      <header className="header">
        <h1>Scoreboard</h1>
      </header>
    
      <div className="players">
        
        <div className="player">
          <div className="player-name">
            Masha Blair
          </div>
          <div className="player-score">
            <div className="counter">
              <button className="counter-action decrement"> - </button>
              <div className="counter-score"> 31 </div>
              <button className="counter-action increment"> + </button>
            </div>
          </div>
        </div>
    
        <div className="player">
          <div className="player-name">
            Sophie Blair
          </div>
          <div className="player-score">
            <div className="counter">
              <button className="counter-action decrement"> - </button>
              <div className="counter-score"> 33 </div>
              <button className="counter-action increment"> + </button>
            </div>
          </div>
        </div>

    
        <div className="player">
          <div className="player-name">
            Elijah Blair
          </div>
          <div className="player-score">
            <div className="counter">
              <button className="counter-action decrement"> - </button>
              <div className="counter-score"> 37 </div>
              <button className="counter-action increment"> + </button>
            </div>
          </div>
        </div>
      
      </div>
    
    </div>
  );
}

ReactDOM.render(<Application />, document.getElementById('container'));