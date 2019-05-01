import React, { Component } from 'react';
import styles from './nav.module.scss';
import { connect } from 'react-redux';
import { IStore } from '../reducers';
import { fetchBooks } from '../reducers/bookReducer';

interface IProps {}

interface IReduxProps {}
interface IReduxDispatch {
	fetchBooks: (searchText: string) => void;
}
interface IState {}

class Nav extends Component<IProps & IReduxProps & IReduxDispatch, IState> {
	render() {
		return (
			<nav className={styles.nav}>
				<span>Booklist</span>
				<div>
					<input onChange={e => this.props.fetchBooks(e.target.value)} placeholder="Author Search" />
				</div>
			</nav>
		);
	}
}

const mapStateToProps = ({ books }: IStore) => ({
	books,
});

const mapDispatchToProps = { fetchBooks };

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Nav);
