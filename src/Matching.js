import React from 'react';
import { Link } from 'react-router-dom';
import './Matching.css';

function Matching() {
  return (
    <div className="A">
      <div>
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
              <li className="nav-item">
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
        <div className="Button4">
          <Link to="/Room">
            <h1>매칭이 완료되었습니다.</h1>
            <h3>선택된 사람들과 대화방이 만들어집니다.</h3>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Matching;
