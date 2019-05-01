import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';
import Nav from './components/nav';
import BookList from './containers/bookList';

class App extends Component {
	public render() {
		return (
			<Provider store={store}>
				<div className="App">
					<header className="App-header">
						<Nav />
						<BookList />
					</header>
				</div>
			</Provider>
		);
	}
}

export default App;
