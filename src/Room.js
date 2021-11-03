import React from 'react';
import { Link } from 'react-router-dom';
import './Room.css';

function Room() {
  return (
    <div>
      <div className="A">
        <nav className="navbar navbar-expand navbar-light">
          <ul className="navbar-nav">
            <Link to="/Match">
              <li className="nav-item ">
                <i className="nav-link fas fa-retweet fa-lg"></i>
              </li>
            </Link>
            <Link to="/Room">
              <li className="nav-item active">
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
        <div className="Roomcheck2">
          <Link to="/choose">
            <h1>새로운 대화방이 열렸습니다</h1>
          </Link>
        </div>
        <div className="Roomcheck">
          <Link to="/Talk">
            <h1>가까운 사람과의 대화방2</h1>
          </Link>
        </div>
        <div className="Roomcheck">
          <Link to="/Talk">
            <h1>큐브이스케이프 대화방</h1>
          </Link>
        </div>

        <div className="Roomcheck">
          <Link to="/Talk">
            <h1>둠이스케이프 대화방</h1>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Room;
