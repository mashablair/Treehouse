// here we'll 'decompose' == break down our large component into several components that  can be reused and built independently.
// Composing components is a core design philosophy in React
// Advantage: eliminate repeated code

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
			React.createElement(Player, { name: "Masha Blair", score: 31 }),
			React.createElement(Player, { name: "Sophie Blair", score: 33 }),
			React.createElement(Player, { name: "Elijah Blair", score: 37 })
		)
	);
}

Application.propTypes = {
	title: React.PropTypes.string
};

Application.defaultProps = {
	title: "Scoreboard"
};

ReactDOM.render(React.createElement(Application, null), document.getElementById('container'));
