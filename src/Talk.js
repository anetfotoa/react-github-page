import React from 'react';
import './App.css';
import './Talk.css';
import { Link } from 'react-router-dom';

function Talk() {
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
        <div className="person">
          <h2>인원 : 4명</h2>
        </div>
        <div class="list">
          <ul>
            <li>
              <table cellpadding="0" cellspacing="0">
                <tr>
                  <td class="profile_td"></td>
                  <td class="chat_td">
                    <div class="email">사용자</div>
                    <div class="chat_preview">안녕하세요~</div>
                  </td>
                  <td class="time_td">
                    <div class="time">2021.10.05 21:50</div>
                    <div class="check">
                      <p></p>
                    </div>
                  </td>
                </tr>
              </table>
            </li>
          </ul>
        </div>
        <div class="list2">
          <ul>
            <li>
              <table cellpadding="0" cellspacing="0">
                <tr>
                  <td class="profile_td"></td>
                  <td class="chat_td">
                    <div class="email">상대방1</div>
                    <div class="chat_preview">안녕하세요~</div>
                  </td>
                  <td class="time_td">
                    <div class="time">2021.10.05 21:51</div>
                    <div class="check">
                      <p></p>
                    </div>
                  </td>
                </tr>
              </table>
            </li>
          </ul>
        </div>
        <div class="list2">
          <ul>
            <li>
              <table cellpadding="0" cellspacing="0">
                <tr>
                  <td class="profile_td"></td>
                  <td class="chat_td">
                    <div class="email">상대방1</div>
                    <div class="chat_preview">저는 A입니다.</div>
                  </td>
                  <td class="time_td">
                    <div class="time">2021.10.05 21:52</div>
                    <div class="check">
                      <p></p>
                    </div>
                  </td>
                </tr>
              </table>
            </li>
          </ul>
        </div>
        <div class="list2">
          <ul>
            <li>
              <table cellpadding="0" cellspacing="0">
                <tr>
                  <td class="profile_td"></td>
                  <td class="chat_td">
                    <div class="email">상대방2</div>
                    <div class="chat_preview">저는 B입니다.</div>
                  </td>
                  <td class="time_td">
                    <div class="time">2021.10.05 21:51</div>
                    <div class="check">
                      <p></p>
                    </div>
                  </td>
                </tr>
              </table>
            </li>
          </ul>
        </div>
        <div class="list2">
          <ul>
            <li>
              <table cellpadding="0" cellspacing="0">
                <tr>
                  <td class="profile_td"></td>
                  <td class="chat_td">
                    <div class="email">상대방3</div>
                    <div class="chat_preview">저는 C입니다</div>
                  </td>
                  <td class="time_td">
                    <div class="time">2021.10.05 21:52</div>
                    <div class="check">
                      <p></p>
                    </div>
                  </td>
                </tr>
              </table>
            </li>
          </ul>
        </div>
        <div class="list">
          <ul>
            <li>
              <table cellpadding="0" cellspacing="0">
                <tr>
                  <td class="profile_td"></td>
                  <td class="chat_td">
                    <div class="email">사용자</div>
                    <div class="chat_preview">저는 D입니다.</div>
                  </td>
                  <td class="time_td">
                    <div class="time">2021.10.05 21:53</div>
                    <div class="check">
                      <p></p>
                    </div>
                  </td>
                </tr>
              </table>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Talk;
