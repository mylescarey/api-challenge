import React, { Component } from 'react';
import { IBook } from '../reducers/bookReducer';
import styles from './card.module.scss';
import CroppedImage from './croppedImage';
import missingBook from '../assets/missingbook.png';
import Parser from 'html-react-parser';

interface IProps {
	book: IBook;
}

interface IState {}

class Card extends Component<IProps, IState> {
	public render() {
		const { book } = this.props;
		const publishedDate = new Date(book.volumeInfo.publishedDate).getFullYear();
		return (
			<div className={styles.card}>
				<div className={styles.image}>
					{book.volumeInfo.imageLinks ? (
						<CroppedImage src={book.volumeInfo.imageLinks.thumbnail} />
					) : (
						<CroppedImage src={missingBook} position="center" />
					)}
				</div>
				<div className={styles.content}>
					<header>
						{book.volumeInfo.title} ({publishedDate})
					</header>
					<p>
						{book.volumeInfo.authors && book.volumeInfo.authors.join(', ')}
						{book.volumeInfo.pageCount && ' - ' + book.volumeInfo.pageCount + ' pages'}
					</p>
					<p>{book.searchInfo && Parser(book.searchInfo.textSnippet)}</p>
				</div>
			</div>
		);
	}
}
export default Card;
