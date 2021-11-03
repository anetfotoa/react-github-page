import React from 'react';
import { Link } from 'react-router-dom';
import './Attention.css';

function Attention() {
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
          <h1>인천 방탈출 카페 정보</h1>
        </div>
        <div className="Check">
          <h2>큐브이스케이프 인천점</h2>

          <div className="Check6">
            <h2>삭제하기</h2>
          </div>
        </div>
        <div className="Check">
          <h2>셜록홈즈 인천점</h2>

          <div className="Check6">
            <Link to="/Attention1">
              <h2>삭제하기</h2>
            </Link>
          </div>
        </div>
        <div className="Check">
          <h2>둠이스케이프 2호점</h2>

          <div className="Check6">
            <h2>삭제하기</h2>
          </div>
        </div>
        <div className="Check5">
          <Link to="/Attention2">
            <h2>관심 있는 방탈출 등록</h2>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Attention;
