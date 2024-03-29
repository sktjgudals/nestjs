import React, { useState, useEffect } from "react";

function App() {
  useEffect(() => {
    handleTokenFromQueryParams();
  }, []);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const createGoogleAuthLink = async () => {
    try {
      const request = await fetch("http://localhost:4000/createAuthLink", {
        method: "POST",
      });
      const response = await request.json();
      window.location.href = response.url;
    } catch (error: any) {
      console.log("App.js 12 | error", error);
      throw new Error("Issue with Login", error.message);
    }
  };

  const handleTokenFromQueryParams = () => {
    const query = new URLSearchParams(window.location.search);
    const accessToken = query.get("accessToken");
    const refreshToken = query.get("refreshToken");
    const expirationDate = newExpirationDate();
    console.log("App.js 30 | expiration Date", expirationDate);
    if (accessToken && refreshToken) {
      storeTokenData(accessToken, refreshToken, expirationDate);
      setIsLoggedIn(true);
    }
  };

  const newExpirationDate = () => {
    var expiration = new Date();
    expiration.setHours(expiration.getHours() + 1);
    return expiration;
  };

  const storeTokenData = async (
    token: any,
    refreshToken: any,
    expirationDate: any
  ) => {
    sessionStorage.setItem("accessToken", token);
    sessionStorage.setItem("refreshToken", refreshToken);
    sessionStorage.setItem("expirationDate", expirationDate);
  };

  const signOut = () => {
    setIsLoggedIn(false);
    sessionStorage.clear();
  };

  return (
    <div className="App">
      <h1>Google</h1>
      {!isLoggedIn ? (
        <button onClick={createGoogleAuthLink}>Login</button>
      ) : (
        <>
          <button onClick={signOut}>Sign Out</button>
        </>
      )}
    </div>
  );
}

export default App;
