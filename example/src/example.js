var React = require('react');
var ReactDOM = require('react-dom');
var MessengerComponents = require('react-messenger-components');

var App = React.createClass({
	render () {
		return (
			<div>
				<MessengerComponents />
			</div>
		);
	}
});

ReactDOM.render(<App />, document.getElementById('app'));
