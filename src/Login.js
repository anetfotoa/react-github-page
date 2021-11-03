import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

function Login(props) {
  return (
    <div class="login-wrap">
      <div class="login-html">
        <input
          id="tab-1"
          type="radio"
          name="tab"
          class="sign-in"
          checked
        ></input>
        <label for="tab-1" class="tab">
          로그인
        </label>
        <input id="tab-2" type="radio" name="tab" class="sign-up"></input>
        <label for="tab-2" class="tab">
          회원가입
        </label>
        <div class="login-form">
          <div class="sign-in-htm">
            <div class="group">
              <label for="user" class="label">
                아이디
              </label>
              <input id="user" type="text" class="input"></input>
            </div>
            <div class="group">
              <label for="pass" class="label">
                비밀번호
              </label>
              <input
                id="pass"
                type="password"
                class="input"
                data-type="password"
              ></input>
            </div>
            <div class="group">
              <input id="check" type="checkbox" class="check" checked></input>
              <label for="check">
                <span class="icon"></span> 로그인 저장
              </label>
            </div>
            <div class="group">
              <Link to="/Match">
                <input
                  type="class"
                  class="button"
                  value="로그인"
                  onclick="location.href='index3.html'"
                ></input>
              </Link>
            </div>
            <div class="hr"></div>
            <div class="foot-lnk">
              <a>비밀번호를 잊어버렸습니까?</a>
            </div>
          </div>
          <div class="sign-up-htm">
            <div class="group">
              <label for="user" class="label">
                아이디
              </label>
              <input id="user" type="text" class="input"></input>
            </div>
            <div class="group">
              <label for="pass" class="label">
                비밀번호
              </label>
              <input
                id="pass"
                type="password"
                class="input"
                data-type="password"
              ></input>
            </div>

            <div class="group">
              <label for="pass" class="label">
                이름
              </label>
              <input id="pass" type="text" class="input"></input>
            </div>
            <div class="group">
              <Link to="/Match">
                <input
                  type="submit"
                  class="button"
                  value="회원가입"
                  onclick="location.href='index.html'"
                ></input>
              </Link>
            </div>
            <div class="hr"></div>
            <div class="foot-lnk">
              <label for="tab-1">이미 아이디가 있나요?</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
