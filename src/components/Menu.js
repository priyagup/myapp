import React, { Component } from "react";

class Menu extends Component {
  render() {
    return (
      <nav class="menu">
        <h1 class="menu__logo">Lamar University</h1>
        <div class="menu__right">
          <ul class="menu__list">
            <li class="menu__list-item">
              <a
                class="menu__link menu__link--active"
                href="./components/Home.js"
              >
                Home
              </a>
            </li>
            <li class="menu__list-item">
              <a class="menu__link" href="#">
                User
              </a>
            </li>
            <li class="menu__list-item">
              <a class="menu__link" href="#">
                Group
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Menu;
