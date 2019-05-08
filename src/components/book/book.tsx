import * as React from "react";
import styles from "../book/book.module.scss";
import { IBook } from "../../reducers/bookReducer";

export interface IProps {
  book: IBook;
}

export interface IState {}

class Book extends React.Component<IProps, IState> {
  // state = { :  }
  public render() {
    return (
      <React.Fragment>
        <div className={styles.scene}>
          <span className={styles.card}>
            <div className={styles.header}>
              <h1>{this.props.book.volumeInfo.title}</h1>
            </div>
            <h2>Author: {this.props.book.volumeInfo.authors}</h2>
            <p>
              THE NO. 1 SUNDAY TIMES BESTSELLER & SHORTLISTED FOR A NATIONAL
              BOOK AWARD 'A triumph' Heat __________ Lou Clark knows too many
              things . . . She knows how many miles lie between her new home in
              New York and her new boyfriend Sam in London.
            </p>
            <p>Publish Date: 2018-01-25</p>
            <p>Page Count: {this.props.book.pageCount}</p>
          </span>
        </div>
      </React.Fragment>
    );
  }
}

export default Book;
