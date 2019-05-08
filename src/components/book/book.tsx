import * as React from "react";
import styles from "../book/book.module.scss";

export interface IProps {}

export interface IState {}

class Book extends React.Component<IProps, IState> {
  // state = { :  }
  public render() {
    return (
      <div className={styles.scene}>
        <span className={styles.card}>
          <header>Still Me</header>
          <p>Author: Jojo Moyes</p>
          <p>
            THE NO. 1 SUNDAY TIMES BESTSELLER & SHORTLISTED FOR A NATIONAL BOOK
            AWARD 'A triumph' Heat __________ Lou Clark knows too many things .
            . . She knows how many miles lie between her new home in New York
            and her new boyfriend Sam in London. She knows her employer is a
            good man and she knows his wife is keeping a secret from him. What
            Lou doesn't know is she's about to meet someone who's going to turn
            her whole life upside down. Because Josh will remind her so much of
            a man she used to know that it'll hurt.
          </p>
        </span>
      </div>
    );
  }
}

export default Book;
