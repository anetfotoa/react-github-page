import React from 'react';
import { Link } from 'react-router-dom';
import './Match.css';

function Match() {
  return (
    <div>
      <div className="A">
        <nav className="navbar navbar-expand navbar-light">
          <ul className="navbar-nav">
            <Link to="/Match">
              <li className="nav-item active">
                <i className="nav-link fas fa-retweet fa-lg"></i>
              </li>
            </Link>
            <Link to="Room">
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
              <li className="nav-item ">
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
        <div className="Button">
          <Link to="/Near">
            <h1>나와 가까운 사람 찾기</h1>
          </Link>
        </div>
        <div className="Button2">
          <Link to="Attention">
            <h2>관심있는 방탈출 사람 찾기</h2>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Match;
