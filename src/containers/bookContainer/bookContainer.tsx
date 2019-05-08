import * as React from "react";
import styles from "../bookContainer/bookContainer.module.scss";
import Book from "../../components/book/book";

export interface IProps {}

export interface IState {}

class BookContainer extends React.Component<IProps, IState> {
  // state = { :  }
  public render() {
    return (
      <div className={styles.books}>
        <Book />
      </div>
    );
  }
}

export default BookContainer;
