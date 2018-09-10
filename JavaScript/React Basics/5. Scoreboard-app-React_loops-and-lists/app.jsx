// loop over arrays to produce lists of elements. 
// loops in JSX and React are different than other templating languages

// add this array of players
// to avoid the warning in console, also add unique id (key) to each object child
// later we reference this 'id' as 'key' in Application
var PLAYERS = [
	{
		name: "Masha Blair",
		score: 30,
		id: 1
	},
	{
		name: "Sophie Blair",
		score: 33,
		id: 2
	},
	{
		name: "Elijah Blair",
		score: 37,
		id: 3
	}
]

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
	name: React.PropTypes.string.isRequired,
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
	// to loop through players array, use .map() and remove hard-coded players
  return (
    <div className="scoreboard">
      <Header title={props.title} />
    
      <div className="players">
		  {props.players.map(function(player) {
			  // here we add each player with the 'key' to make it easier for React to loop -- key is required
			  return <Player name={player.name} score={player.score} key={player.id} />
		  })}
      </div>
    </div>
  );
}

Application.propTypes = {
	title: React.PropTypes.string,
	// update with players:
	// this means it only accepts an array of objects
	players: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
	// or improve it even further:
	players: React.PropTypes.arrayOf(React.PropTypes.shape({
		name: React.PropTypes.string.isRequired,
		score: React.PropTypes.number.isRequired,
	})).isRequired,
};

Application.defaultProps = {
	title: "Scoreboard",
}

// and pass players prop here: (otherwise error in console)
ReactDOM.render(<Application players={PLAYERS} />, document.getElementById('container'));



