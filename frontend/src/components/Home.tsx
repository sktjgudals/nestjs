import React, { useEffect } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { FiAlignLeft } from "react-icons/fi";
import Header from "./Header";
import { useSession } from "../Hook/SessionProvider";

const linkApiCall = async (url: string): Promise<any> => {
  try {
    const urlOptions = {
      method: "GET",
    };
    const res = await fetch(url, urlOptions);
    const result = await res.json();
    console.log(result);
    if (result) return result.url;
    throw new Error("error");
  } catch (e) {
    if (e) throw new Error("error");
  }
};

const Home: React.FC = () => {
  const { session, loading } = useSession();

  if (loading) return <></>;

  const googleLinkapi = `http://localhost:4000/auth/google/link`;
  // const googleLinkapi = "https://1764-39-112-152-140.jp.ngrok.io/";

  const handleClick = async (e: any) => {
    const linkUrl = await linkApiCall(googleLinkapi);
    window.location.href = linkUrl;
  };

  const logoutHandler = () => {
    localStorage.removeItem("access_token");
    window.location.href = "/";
  };

  const apiHandler = async () => {
    const data = await fetch("http://localhost:4000/user/email/check", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: "test@naver.com" }),
    }).then((res) => {
      return res.json();
    });
    console.log(data);
  };

  return (
    <>
      <Header path={"/"} title={`All ToDoList`} />
      <Link to="/daylist" className="icon_heading">
        <FiAlignLeft />
      </Link>
      <button
        onClick={() => {
          apiHandler();
        }}
      >
        중복확인
      </button>
      {session ? (
        <div>
          <div className={`toDos__single`}>안녕하세요 {session.email} 님 </div>
          <button className={`toDos__single`} onClick={logoutHandler}>
            로그아웃
          </button>
        </div>
      ) : (
        <button onClick={handleClick}> 구글 로그인 </button>
      )}
    </>
  );
};

export default Home;
