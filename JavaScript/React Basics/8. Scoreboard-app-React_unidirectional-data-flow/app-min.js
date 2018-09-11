// Unidirectional data flow -- when state changes flow in 1 direction = much easier to manage and keep track. Data should flow from the top to bottom of our app. 

// We usually concentrate our application state high in our virtual DOM tree. 

// Application state -- core functionality (model and data manipulated by UI)

// Local Component state - state for component to work. 

// We pass data around by using properties. Data flows from parent to child via properties. 

// Application component doesn't create instances of players. It never create them, just described that they should exist and should have those props.  So it can't call some methods on children to update data.  Component doesn't know about its parent, just about passed props.  

// communication b/w child and parent happens via callback functions. We communicate events up through the DOM tree by providing callback functions as properties to components.

// In this version, we'll restructure our app to concentrate our state in a single location. We'll turn our stateful Counter component into a simple functional component and turn Application component into a stateful one.  

// This restructuring allows us to build more components (Stats) and use that same data

//
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

var nextId = 4;

var Stopwatch = React.createClass({
	displayName: "Stopwatch",

	getInitialState: function () {
		return {
			running: false,
			elapsedTime: 0,
			previousTime: 0
		};
	},

	// it's React hook 
	// as soon as our stopwatch is set on a page
	componentDidMount: function () {
		this.interval = setInterval(this.onTick, 1000);
	},

	componentWillUnmount: function () {
		clearInterval(this.interval);
	},

	onTick: function () {
		console.log('onTick');
		if (this.state.running) {
			var now = Date.now();
			this.setState({
				previousTime: now,
				elapsedTime: this.state.elapsedTime + (now - this.state.previousTime)
			});
		}
	},

	onStart: function () {
		this.setState({
			running: true,
			previousTime: Date.now()
		});
	},

	onStop: function () {
		this.setState({ running: false });
	},

	onReset: function () {
		this.setState({
			elapsedTime: 0,
			previousTime: Date.now()
		});
	},

	// it's ok to modify your state info in render() to make it acceptable for display
	render: function () {
		var seconds = Math.floor(this.state.elapsedTime / 1000);

		var startStop;
		if (this.state.running) {
			startStop = React.createElement(
				"button",
				{ onClick: this.onStop },
				"Stop"
			);
		} else {
			startStop = React.createElement(
				"button",
				{ onClick: this.onStart },
				"Start"
			);
		}

		// or we can do 1-liner using ternary operator
		// var startStop = this.state.running ? <button>Stop</button> : <button>Start</button>

		return React.createElement(
			"div",
			{ className: "stopwatch" },
			React.createElement(
				"h2",
				null,
				"Stopwatch"
			),
			React.createElement(
				"div",
				{ className: "stopwatch-time" },
				seconds
			),
			startStop,
			React.createElement(
				"button",
				{ onClick: this.onReset },
				"Reset"
			)
		);
	}
});

// forms in React are handled a bit differntly
// we can't just indicate value b/c it will always render 
// we have to treat value as state
// this component now hold state
var AddPlayerForm = React.createClass({
	displayName: "AddPlayerForm",

	propTypes: {
		onAdd: React.PropTypes.func.isRequired
	},

	getInitialState: function () {
		return {
			name: ""
		};
	},

	onNameChange: function (e) {
		this.setState({ name: e.target.value });
	},

	onSubmit: function (e) {
		e.preventDefault();
		this.props.onAdd(this.state.name);
		this.setState({ name: "" });
	},

	render: function () {
		return React.createElement(
			"div",
			{ className: "add-player-form" },
			React.createElement(
				"form",
				{ onSubmit: this.onSubmit },
				React.createElement("input", { type: "text", value: this.state.name, onChange: this.onNameChange }),
				React.createElement("input", { type: "submit", value: "Add Player" })
			)
		);
	}
});

// Here we'll add the stats to the top row of our app
function Stats(props) {
	var totalPlayers = props.players.length;
	// in .reduce() 1st arg is total what we are computing and second is the item in array 
	var totalPoints = props.players.reduce(function (total, player) {
		return total + player.score;
	}, 0);
	return React.createElement(
		"table",
		{ className: "stats" },
		React.createElement(
			"tbody",
			null,
			React.createElement(
				"tr",
				null,
				React.createElement(
					"td",
					null,
					"Players:"
				),
				React.createElement(
					"td",
					null,
					totalPlayers
				)
			),
			React.createElement(
				"tr",
				null,
				React.createElement(
					"td",
					null,
					"Total Points:"
				),
				React.createElement(
					"td",
					null,
					totalPoints
				)
			)
		)
	);
}

Stats.propTypes = {
	players: React.PropTypes.array.isRequired
};

function Header(props) {
	return React.createElement(
		"header",
		{ className: "header" },
		React.createElement(Stats, { players: props.players }),
		React.createElement(
			"h1",
			null,
			props.title
		),
		React.createElement(Stopwatch, null)
	);
}

Header.propTypes = {
	title: React.PropTypes.string.isRequired,
	players: React.PropTypes.array.isRequired
};

// here we change Counter back into a funtional (stateless) component
// and then move our state back to Application component
// add event handlers to buttons as anonimous function
function Counter(props) {
	return React.createElement(
		"div",
		{ className: "counter" },
		React.createElement(
			"button",
			{ className: "counter-action decrement", onClick: function () {
					props.onChange(-1);
				} },
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
			{ className: "counter-action increment", onClick: function () {
					props.onChange(1);
				} },
			" + "
		)
	);
}

Counter.propTypes = {
	score: React.PropTypes.number.isRequired,
	// add a new prop type -- function b/c our event handler is a function:
	onChange: React.PropTypes.func.isRequired

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

	// When Player gets score change from Counter -- what should it do? 
	// it doesn't have a state, but it can relay this info up to Application
	// so we add another event handler: onChange on the Counter
};function Player(props) {
	return React.createElement(
		"div",
		{ className: "player" },
		React.createElement(
			"div",
			{ className: "player-name" },
			React.createElement(
				"a",
				{ className: "remove-player", onClick: props.onRemove },
				"x"
			),
			props.name
		),
		React.createElement(
			"div",
			{ className: "player-score" },
			React.createElement(Counter, { score: props.score, onChange: props.onScoreChange })
		)
	);
}

Player.propTypes = {
	name: React.PropTypes.string.isRequired,
	score: React.PropTypes.number.isRequired,
	// and add this event handler prop type here 
	onScoreChange: React.PropTypes.func.isRequired,
	onRemove: React.PropTypes.func.isRequired
};

// it makes sense to manage state in Application as a highest component:
// Players shold be state b/c they change
// players are substantiated here, so let's implement onScoreChange here, handle it here
var Application = React.createClass({
	displayName: "Application",


	propTypes: {
		title: React.PropTypes.string,
		//players: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
		initialPlayers: React.PropTypes.arrayOf(React.PropTypes.shape({
			name: React.PropTypes.string.isRequired,
			score: React.PropTypes.number.isRequired
		})).isRequired
	},

	getDefaultProps: function () {
		return {
			title: "Scoreboard"
		};
	},

	// ad this method for a score difference ('delta')
	// to know which player, we need index
	onScoreChange: function (index, delta) {
		console.log('onScoreChange', delta); // '1' or '-1'
		this.state.players[index].score += delta; // if delta is negative, it will subtract
		// but now we have to let React know that state has change and it should re-render
		this.setState(this.state);
	},

	getInitialState: function () {
		return {
			players: this.props.initialPlayers
		};
	},

	onPlayerAdd: function (name) {
		this.state.players.push({
			name: name,
			score: 0,
			id: nextId
		});
		this.setState(this.state);
		nextId += 1;
	},

	onRemovePlayer: function (index) {
		this.state.players.splice(index, 1);
		this.setState(this.state);
	},

	// add onScoreChange here as Player prop
	// don't forget to add .bind(this) b/c we are inside the map function
	// index for players is provided already by the .map
	// then we pass delta from onScoreChange
	render: function () {
		return React.createElement(
			"div",
			{ className: "scoreboard" },
			React.createElement(Header, { title: this.props.title, players: this.state.players }),
			React.createElement(
				"div",
				{ className: "players" },
				this.state.players.map(function (player, index) {
					return React.createElement(Player, {
						onScoreChange: function (delta) {
							this.onScoreChange(index, delta);
						}.bind(this),
						onRemove: function () {
							this.onRemovePlayer(index);
						}.bind(this),
						name: player.name,
						score: player.score,
						key: player.id
					});
				}.bind(this))
			),
			React.createElement(AddPlayerForm, { onAdd: this.onPlayerAdd })
		);
	}
});

ReactDOM.render(React.createElement(Application, { initialPlayers: PLAYERS }), document.getElementById('container'));
