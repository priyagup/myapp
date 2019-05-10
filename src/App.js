import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div class="container center">
          <nav class="menu">
            <h1 class="menu__logo">Lamar University</h1>
            <div class="menu__right">
              <ul class="menu__list">
                <li class="menu__list-item">
                  <a class="menu__link menu__link--active" href="#">
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
        </div>
      </header>
    </div>
  );
}

export default App;
