import React from "react";
import "./App.css";

class App extends React.Component {
	state = {
		message: "Hello Dogs!",
		dogImg: {},
		load: true,
	};

	componentDidMount() {
		this.generateRandomPicture();
	}

	generateRandomPicture = () => {
		this.setState({ load: true });
		fetch("https://dog.ceo/api/breeds/image/random")
			.then((data) => data.json())
			.then((data) => {
				console.log(data);
				this.setState({ dogImg: data, load: false });
			});
	};

	render() {
		return (
			<div className='App'>
				<h1>{this.state.message}</h1>
				{this.state.load ? (
					"loading..."
				) : (
					<img src={this.state.dogImg.message} alt='random dog' />
				)}
				<br />
				<button onClick={this.generateRandomPicture}>Random!</button>
			</div>
		);
	}
}

export default App;
