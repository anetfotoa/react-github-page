import React from 'react';
import { Link } from 'react-router-dom';
import './Like.css';

function Like() {
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
        <div className="Button5">
          <Link to="/Select">
            <h1>평점이 높은 테마</h1>
          </Link>
        </div>
        <div className="Button5">
          <Link to="/Select">
            <h1>방탈출 횟수에 따른 테마</h1>
          </Link>
        </div>
        <div className="Button5">
          <Link to="/Select">
            <h1>난이도 단계에 따른 테마</h1>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Like;
