import React from "react";

class Header extends React.Component {
  render() {
    return (
      <header className="block block-header">
        <h1 className="header__brand">Todoey!</h1>
        <button className="btn btn--primary">Clear All</button>
      </header>
    );
  }
}

export default Header;
