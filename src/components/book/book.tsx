import * as React from "react";
import styles from "../book/book.module.scss";

export interface IProps {}

export interface IState {}

class Book extends React.Component<IProps, IState> {
  // state = { :  }
  public render() {
    return (
      <React.Fragment>
        <div className={styles.scene}>
          <span className={styles.card}>
            <div className={styles.header}>
              <h1>Still Me</h1>
            </div>
            <h2>Author: Jojo Moyes</h2>
            <p>
              THE NO. 1 SUNDAY TIMES BESTSELLER & SHORTLISTED FOR A NATIONAL
              BOOK AWARD 'A triumph' Heat __________ Lou Clark knows too many
              things . . . She knows how many miles lie between her new home in
              New York and her new boyfriend Sam in London.
            </p>
          </span>
        </div>{" "}
        <div className={styles.scene}>
          <span className={styles.card}>
            <div className={styles.header}>
              <h1>Still Me</h1>
            </div>
            <h2>Author: Jojo Moyes</h2>
            <p>
              THE NO. 1 SUNDAY TIMES BESTSELLER & SHORTLISTED FOR A NATIONAL
              BOOK AWARD 'A triumph' Heat __________ Lou Clark knows too many
              things . . . She knows how many miles lie between her new home in
              New York and her new boyfriend Sam in London.
            </p>
          </span>
        </div>
      </React.Fragment>
    );
  }
}

export default Book;
