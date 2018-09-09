function Application(props) {
  return (
	  // in {..} is a regular JS expression (something taht returns a value) but not JS statement (like 'if')
	  // content below is not HTML, it's JS so we can't use class="player"
    <div className="scoreboard">
      <header className="header">
        <h1>{props.title}</h1>
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

// In React we can specify what types our props should be
// and if they are required or not
// Highly recommended to define a type --> much easier to debug
// but not required!!
Application.propTypes = {
	// omitting title or passing {3} will produce error
	// title: React.PropTypes.string.isRequired,
	title: React.PropTypes.string,
};

Application.defaultProps = {
	title: "Scoreboard",
}

// here we are trying to pass number as title value and it produces error
// ReactDOM.render(<Application title={3}/>, document.getElementById('container'));

// props passed to a component should NOT be chanegd by that component
// here we didn't pass a title but it's ok b/c we set up defaultProps above
ReactDOM.render(<Application />, document.getElementById('container'));




