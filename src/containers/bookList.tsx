import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBooks, IBook, setCategoryFilter } from '../reducers/bookReducer';
import { IStore } from '../reducers';
import Card from '../components/card';
import styles from './bookList.module.scss';
import GenreList from '../components/genreList';

interface IProps {}
interface IState {}

interface IReduxProps {
	books: { books: IBook[]; loading: boolean; categoryFilter: string; filteredBooks: IBook[] };
}

interface IReduxDispatchProps {
	fetchBooks: (authorName: string) => void;
	setCategoryFilter: (category: string) => void;
}

class BookList extends Component<IProps & IReduxProps & IReduxDispatchProps, IState> {
	public componentDidMount() {
		// this.props.fetchBooks('Douglas Adams');
	}

	public getCategories() {
		const categories = new Set();
		this.props.books.books &&
			this.props.books.books.forEach(book => {
				book.volumeInfo.categories &&
					book.volumeInfo.categories.forEach(category => {
						categories.add(category);
					});
			});
		return Array.from(categories).sort();
	}

	public render() {
		const { filteredBooks } = this.props.books;

		return (
			<div className={styles.bookList}>
				{filteredBooks ? (
					<div>
						<GenreList
							categories={this.getCategories()}
							value={this.props.books.categoryFilter}
							onChange={category => this.props.setCategoryFilter(category)}
						/>

						<div className={styles.books}>
							{this.props.books.loading ? (
								<i className="fa fa-spinner" />
							) : (
								filteredBooks.map(book => <Card key={book.id} book={book} />)
							)}
						</div>
					</div>
				) : (
					<p className={styles.center}>No books to show</p>
				)}
			</div>
		);
	}
}
const mapStateToProps = ({ books }: IStore, ownProps: IProps) => ({ books, ...ownProps });

const mapDispatchToProps = {
	fetchBooks,
	setCategoryFilter,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(BookList);
