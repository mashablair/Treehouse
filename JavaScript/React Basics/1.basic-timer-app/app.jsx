function Application() {
  return (
    <div>
      <h1>Hello from React!</h1>
      <p>I was rendered from the Application component.</p>
    </div>
  );
}

// ReactDOM.render(<h1>Hello!</h1>, document.getElementById('container'));
ReactDOM.render(<Application />, document.getElementById('container'));