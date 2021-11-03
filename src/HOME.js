import './HOME.css';
import { useEffect, useState } from 'react';
import Profile from './Profile.js';
import axios from 'axios';
import { Link } from 'react-router-dom';

function HOME() {
  let [step, setStep] = useState(0);
  let [현재카드번호, set현재카드번호] = useState(-1);
  let [뭐눌렀냐, set뭐눌렀냐] = useState('like');
  let [고른거, 고른거변경] = useState([]);
  let [데이터, 데이터변경] = useState([]);

  useEffect(() => {
    //데이터 가져와서 state로 넣기
    axios.get('https://anetfotoa.github.io/shop/initialData.json').then((a) => {
      데이터변경([...a.data]);
      console.log(데이터);
    });
  }, []);

  useEffect(() => {
    if (현재카드번호 != -1 && 뭐눌렀냐 == 'like') {
      좋아요();
    } else if (현재카드번호 != -1 && 뭐눌렀냐 == 'dislike') {
      싫어요();
    }
  }, [현재카드번호, 뭐눌렀냐]);

  function 좋아요() {
    let copy = [...데이터];
    copy[현재카드번호].passed = true;
    copy[현재카드번호].liked = 'right';
    데이터변경(copy);
    //고른리스트에 추가
    고른거변경([...고른거, 현재카드번호]);
    console.log(고른거);
  }

  function 싫어요() {
    let copy = [...데이터];
    copy[현재카드번호].passed = true;
    copy[현재카드번호].liked = 'left';
    데이터변경(copy);
  }

  return (
    <div className="HOME">
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

      {
        //첫로드시 카드, 버튼 보여주기

        데이터[0] && (
          <div className="p-1 p-container">
            {데이터.map((a, i) => (
              <Profile
                className="profile"
                a={a}
                key={i}
                현재카드번호={현재카드번호}
                step={step}
                고른거={고른거}
                고른거변경={고른거변경}
                데이터={데이터}
              ></Profile>
            ))}
            <div className="bottom-buttons">
              <button
                onClick={() => {
                  if (데이터.length > 현재카드번호 + 1) {
                    set현재카드번호(현재카드번호 + 1);
                    set뭐눌렀냐('dislike');
                  } else {
                    alert('더이상 목록이 없습니다');
                  }
                }}
                className="btn black"
              >
                <i className="fas fa-times-circle fa-3x"></i>
              </button>
              <button
                onClick={() => {
                  if (데이터.length > 현재카드번호 + 1) {
                    set현재카드번호(현재카드번호 + 1);
                    set뭐눌렀냐('like');
                  } else {
                    alert('더이상 목록이 없습니다');
                  }
                }}
                className="btn red"
              >
                <i className="fab fa-gratipay fa-3x"></i>
              </button>
            </div>
          </div>
        )
      }

      {
        //고르는거 끝났을 때
        데이터.length < 현재카드번호 + 2 ? (
          <h2 className="result">
            사용자님이 선택한 사람들 :
            {고른거.map((data, i) => {
              return <p className="m-1">{데이터[data].name}</p>;
            })}
            <Link to="/MATCHING">
              <button
                onClick={() => {
                  if (데이터.length > 현재카드번호 + 1) {
                    set현재카드번호(현재카드번호 + 1);
                    set뭐눌렀냐('dislike');
                  } else {
                    alert('매칭중입니다 잠시만 기다려 주세요');
                  }
                }}
                className="btn blue"
              >
                <i className=" fas fa-hands-helping fa-5x"></i>
              </button>
            </Link>
          </h2>
        ) : null
      }
    </div>
  );
}

export default HOME;
