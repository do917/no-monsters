// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.css';

type Props = {};

export default class Home extends Component<Props> {
  props: Props;

  render() {
    return (
      <div>
        <div className={styles.container} data-tid="container">
          <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
            <header className="mdl-layout__header">
              <div className="mdl-layout__header-row">
                <span className="mdl-layout-title">Home</span>

                <div className="mdl-layout-spacer" />

                <nav className="mdl-navigation mdl-layout--large-screen-only">
                  <a className="mdl-navigation__link" href="">Link</a>
                  <a className="mdl-navigation__link" href="">Link</a>
                  <a className="mdl-navigation__link" href="">Link</a>
                  <a className="mdl-navigation__link" href="">Link</a>
                </nav>
              </div>
            </header>
            <div className="mdl-layout__drawer">
              <span className="mdl-layout-title">Title</span>
              <nav className="mdl-navigation">
                <a className="mdl-navigation__link" href="">Link</a>
                <a className="mdl-navigation__link" href="">Link</a>
                <a className="mdl-navigation__link" href="">Link</a>
                <a className="mdl-navigation__link" href="">Link</a>
              </nav>
            </div>

            <main className="mdl-layout__content">
              <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect">
                Login
              </button>
            </main>
          </div>
        </div>
      </div>
    );
  }
}
