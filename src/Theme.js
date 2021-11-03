import React from 'react';
import { Link } from 'react-router-dom';
import './Theme.css';

function Theme() {
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
              <li className="nav-item active">
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
        <div className="Tm">
          <h1>테마1</h1>
        </div>
        <div className="Tm2">
          <h1>테마2</h1>
        </div>
        <div className="Tm">
          <h1>테마3</h1>
        </div>
        <div className="Tm2">
          <h1>테마4</h1>
        </div>
        <div className="Tm">
          <h1>테마5</h1>
        </div>
        <div className="Tm2">
          <h1>테마6</h1>
        </div>
        <div className="Tm">
          <h1>테마7</h1>
        </div>
        <div className="Tm2">
          <h1>테마8</h1>
        </div>
        <div className="Tm3">
          <Link to="/Info">
            <h1>뒤로 돌아가기</h1>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Theme;
