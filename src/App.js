// create your App component here
import React, { component, Component } from 'react';
import { render } from 'enzyme';

class App extends Component {
	state = { spacePeople: [] };
	componentDidMount() {
		fetch('http://api.open-notify.org/astros.json')
			.then((response) => JSON.parse(response))
			.then((data) => this.setState({ spacePeople: data }));
	}
	render() {
		return <div />;
	}
}

export default App;
