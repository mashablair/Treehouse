function Application(props) {
  return (
    // in {..} is a regular JS expression (something taht returns a value) but not JS statement (like 'if')
    // content below is not HTML, it's JS so we can't use class="player"
    React.createElement(
      "div",
      { className: "scoreboard" },
      React.createElement(
        "header",
        { className: "header" },
        React.createElement(
          "h1",
          null,
          props.title
        )
      ),
      React.createElement(
        "div",
        { className: "players" },
        React.createElement(
          "div",
          { className: "player" },
          React.createElement(
            "div",
            { className: "player-name" },
            "Masha Blair"
          ),
          React.createElement(
            "div",
            { className: "player-score" },
            React.createElement(
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
                " 31 "
              ),
              React.createElement(
                "button",
                { className: "counter-action increment" },
                " + "
              )
            )
          )
        ),
        React.createElement(
          "div",
          { className: "player" },
          React.createElement(
            "div",
            { className: "player-name" },
            "Sophie Blair"
          ),
          React.createElement(
            "div",
            { className: "player-score" },
            React.createElement(
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
                " 33 "
              ),
              React.createElement(
                "button",
                { className: "counter-action increment" },
                " + "
              )
            )
          )
        ),
        React.createElement(
          "div",
          { className: "player" },
          React.createElement(
            "div",
            { className: "player-name" },
            "Elijah Blair"
          ),
          React.createElement(
            "div",
            { className: "player-score" },
            React.createElement(
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
                " 37 "
              ),
              React.createElement(
                "button",
                { className: "counter-action increment" },
                " + "
              )
            )
          )
        )
      )
    )
  );
}

// In React we can specify what types our props should be
// and if they are required or not
// Highly recommended to define a type --> much easier to debug
// but not required!!
Application.propTypes = {
  // omitting title or passing {3} will produce error
  // title: React.PropTypes.string.isRequired,
  title: React.PropTypes.string
};

Application.defaultProps = {
  title: "Scoreboard"

  // here we are trying to pass number as title value and it produces error
  // ReactDOM.render(<Application title={3}/>, document.getElementById('container'));

  // props passed to a component should NOT be chanegd by that component
  // here we didn't pass a title but it's ok b/c we set up defaultProps above
};ReactDOM.render(React.createElement(Application, null), document.getElementById('container'));
