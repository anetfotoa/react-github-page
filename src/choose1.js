import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './choose.css';

function choose1() {
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
        <div className="Button6">
          <input id="check" type="checkbox" class="check" checked></input>
          <label for="check">
            <h2>
              <span class="icon"></span> B상대방의 의한 대화방
            </h2>
          </label>
          <div className="Check6">
            <Link to="/Room">
              <h2>삭제하기</h2>
            </Link>
          </div>
        </div>
        <div className="Button6">
          <input id="check" type="checkbox" class="check" checked></input>
          <label for="check">
            <h2>
              <span class="icon"></span> C상대방의 의한 대화방
            </h2>
          </label>
          <div className="Check6">
            <Link to="/Room">
              <h2>삭제하기</h2>
            </Link>
          </div>
        </div>
        <div className="Check7">
          <Link to="/choose2">
            <h2>대화하기</h2>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default choose1;
