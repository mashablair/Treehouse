// so far we have an app made out of "functional components" -- these components are just functions accepting inputs (props). We can't update any data, add or remove players.  It's static == stateless functional components

// Stateless functional component - component defined as a function.  It takes only props as arguments and returns a virtual DOM

// Component Class - component definition that can include state, helper methods and other advanced hooks into the page's DOM

// State allows React components to change their output over time in response to user actions, network responses, etc.

// This doesn't violate React's main rule: "All React components must act like pure functions with respect to their props" (they can't modify their props -- props are read-only)!

// State is similar to props, but it's private and fully controlled by the component -- feature available only to classes. Because state changes, we need to work with state.  Flux - a pattern for organizing your state in application.  Redux -- popular library for managing app state and state changes. 

// Always start writing components as functions, not classes b/c it's easier.  B/c with power of classes comes complexity.

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

// Counter as React class
var Counter = React.createClass({
	displayName: "Counter",

	propTypes: {
		score: React.PropTypes.number.isRequired
	},

	// state is data in our app that can change (score)
	// here we still use 'props', but we add 'this.props.score'
	// it will change once we start managing the state
	render: function () {
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
				this.props.score,
				" "
			),
			React.createElement(
				"button",
				{ className: "counter-action increment" },
				" + "
			)
		);
	}
});

// Counter as ES6 class
// here we add state
//class Counter extends React.Component {
//	constructor(props) {
//		super(props);
//		this.state = { score: 0 }
//	}
//	
//	// this has special meaning in React component class
//	// don't forget to add 'this.props.score'
//	render() {
//		return (
//			<div className="counter">
//			  <button className="counter-action decrement"> - </button>
//			  <div className="counter-score"> {this.state.score} </div>
//			  <button className="counter-action increment"> + </button>
//			</div>
//		);
//	}
//}

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
	players: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
	players: React.PropTypes.arrayOf(React.PropTypes.shape({
		name: React.PropTypes.string.isRequired,
		score: React.PropTypes.number.isRequired
	})).isRequired
};

Application.defaultProps = {
	title: "Scoreboard"
};

ReactDOM.render(React.createElement(Application, { players: PLAYERS }), document.getElementById('container'));
