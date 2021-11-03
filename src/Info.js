import React from 'react';
import { Link } from 'react-router-dom';
import './Info.css';

function Info() {
  return (
    <div class="A">
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
      <div className="limage">
        <img className="Info" alt="Info" src="img/Info.jpg" />
      </div>
      <div className="Check">
        <Link to="/Theme">
          <h2>검색</h2>
        </Link>
      </div>
    </div>
  );
}

export default Info;
