// loop over arrays to produce lists of elements. 
// loops in JSX and React are different than other templating languages

// add this array of players
// to avoid the warning in console, also add unique id (key) to each object child
// later we reference this 'id' as 'key' in Application
var PLAYERS = [{
	name: "Masha Blair",
	score: 30,
	id: 1
}, {
	name: "Sophie Blair",
	score: 33,
	id: 2
}, {
	name: "Elijah Blair",
	score: 37,
	id: 3
}];

function Header(props) {
	return React.createElement(
		"header",
		{ className: "header" },
		React.createElement(
			"h1",
			null,
			props.title
		)
	);
}

Header.propTypes = {
	title: React.PropTypes.string.isRequired
};

function Counter(props) {
	return React.createElement(
		"div",
		{ className: "counter" },
		React.createElement(
			"button",
			{ className: "counter-action decrement" },
			" - "
		),
		React.createElement(
			"div",
			{ className: "counter-score" },
			" ",
			props.score,
			" "
		),
		React.createElement(
			"button",
			{ className: "counter-action increment" },
			" + "
		)
	);
}

Player.propTypes = {
	name: React.PropTypes.string.isRequired,
	score: React.PropTypes.number.isRequired
};

function Player(props) {
	return React.createElement(
		"div",
		{ className: "player" },
		React.createElement(
			"div",
			{ className: "player-name" },
			props.name
		),
		React.createElement(
			"div",
			{ className: "player-score" },
			React.createElement(Counter, { score: props.score })
		)
	);
}

Player.propTypes = {
	name: React.PropTypes.string.isRequired,
	score: React.PropTypes.number.isRequired
};

function Application(props) {
	// to loop through players array, use .map() and remove hard-coded players
	return React.createElement(
		"div",
		{ className: "scoreboard" },
		React.createElement(Header, { title: props.title }),
		React.createElement(
			"div",
			{ className: "players" },
			props.players.map(function (player) {
				// here we add each player with the 'key' to make it easier for React to loop -- key is required
				return React.createElement(Player, { name: player.name, score: player.score, key: player.id });
			})
		)
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
		score: React.PropTypes.number.isRequired
	})).isRequired
};

Application.defaultProps = {
	title: "Scoreboard"

	// and pass players prop here: (otherwise error in console)
};ReactDOM.render(React.createElement(Application, { players: PLAYERS }), document.getElementById('container'));
