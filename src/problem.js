import React from 'react';
import { Link } from 'react-router-dom';
import './problem.css';

function Problem() {
  return (
    <div className="A">
      <div>
        <nav className="navbar navbar-expand navbar-light">
          <ul className="navbar-nav">
            <Link to="/Match">
              <li className="nav-item ">
                <i className="nav-link fas fa-retweet fa-lg"></i>
              </li>
            </Link>
            <Link to="/Room">
              <li className="nav-item">
                <i className="nav-link fab fa-weixin fa-lg"></i>
              </li>
            </Link>
            <Link to="/Info">
              <li className="nav-item">
                <i className="nav-link fab fa-readme fa-lg"></i>
              </li>
            </Link>
            <Link to="/Like">
              <li className="nav-item active">
                <i className="nav-link fas fa-thumbs-up fa-lg"></i>
              </li>
            </Link>
            <Link to="/Login">
              <li className="nav-item">
                <i className="nav-link fas  fa-angle-left  fa-lg"></i>
              </li>
            </Link>
          </ul>
        </nav>
        <div className="limage">
          <img className="photo5" alt="문제" src="img/방탈출 문제.jpg" />
        </div>
        <div class="group">
          <h1>
            <input id="user" type="text" class="Answer2"></input>
          </h1>
          <label for="user" class="Answer">
            <Link to="/Select">
              <h1>정답</h1>
            </Link>
          </label>
        </div>
      </div>
    </div>
  );
}

export default Problem;
