import * as React from "react";
import styles from "../bookContainer/bookContainer.module.scss";
import Book from "../../components/book/book";
import { connect } from "react-redux";
import { fetchBooks, IBook } from "../../reducers/bookReducer";
import { IStore } from "../../reducers";

export interface IReduxProps {
  books: IBook[];
  fetchBooks: (authorName: string) => void;
}

export interface IReactProps {}

export interface IState {
  searchText: string;
  books: IBook;
  filteredList: IBook[];
}

class BookContainer extends React.Component<IReduxProps, IState> {
  public componentDidMount() {
    this.props.fetchBooks("Dan Brown");
  }
  //   public state = { searchText: "" };
  public render() {
    return (
      <div className={styles.books}>
        {this.props.books.map((card, index) => (
          <Book key={index} book={card} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state: IStore, props: IReactProps) => {
  return {
    books: state.books.books,
    ...props
  };
};

const mapDispatchToProps = { fetchBooks };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookContainer);
