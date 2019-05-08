import * as React from "react";
import styles from "../header/header.module.scss";
// import logo from

export interface IProps {}

export interface IState {}

class Header extends React.Component<IProps, IState> {
  // state = { :  }
  public render() {
    return (
      <div className={styles.nav}>
        <p>BookWorm</p>
        <input type="text" placeholder="Search..." />
      </div>
    );
  }
}

export default Header;
