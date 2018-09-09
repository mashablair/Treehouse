// here we'll 'decompose' == break down our large component into several components that  can be reused and built independently.
// Composing components is a core design philosophy in React
// Advantage: eliminate repeated code

function Header(props) {
	return (
		<header className="header">
        	<h1>{props.title}</h1>
      	</header>
	);
}

Header.propTypes = {
	title: React.PropTypes.string.isRequired,
};

function Counter(props) {
	return (
		<div className="counter">
		  <button className="counter-action decrement"> - </button>
		  <div className="counter-score"> {props.score} </div>
		  <button className="counter-action increment"> + </button>
		</div>
	);
}

Player.propTypes = {
	score: React.PropTypes.number.isRequired,
};

function Player(props) {
	return (
		<div className="player">
		  <div className="player-name">
			{props.name}
		  </div>
		  <div className="player-score">
			<Counter score={props.score} />
		  </div>
		</div>
	);
}

Player.propTypes = {
	name: React.PropTypes.string.isRequired,
	score: React.PropTypes.number.isRequired,
};

function Application(props) {
  return (
    <div className="scoreboard">
      <Header title={props.title} />
    
      <div className="players">
        <Player name="Masha Blair" score={31} />
    	<Player name="Sophie Blair" score={33} />
		<Player name="Elijah Blair" score={37} />
      </div>
    
    </div>
  );
}

Application.propTypes = {
	title: React.PropTypes.string,
};

Application.defaultProps = {
	title: "Scoreboard",
}

ReactDOM.render(<Application />, document.getElementById('container'));




