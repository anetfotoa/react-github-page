import React from 'react';
import { Link } from 'react-router-dom';
import './Attention.css';

function Attention2() {
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
        <div className="Header">
          <h2>사용자의 관심있는 방탈출 목록</h2>
        </div>
        <div className="Check">
          <Link to="/">
            <h2>큐브이스케이프 인천점</h2>
          </Link>
          <div className="Check6"></div>
        </div>
        <div className="Check">
          <Link to="/">
            <h2>둠이스케이프 2호점</h2>
          </Link>
          <div className="Check6"></div>
        </div>
      </div>
    </div>
  );
}

export default Attention2;
