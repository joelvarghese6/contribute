import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useOkto } from "okto-sdk-react";
import { GoogleLogin,  } from "@react-oauth/google";
import axios from "axios";

function LoginPage() {
  console.log("LoginPage component rendered");
  const navigate = useNavigate();
  const { authenticate } = useOkto();
  const [authToken, setAuthToken] = useState();
  const BASE_URL = "https://sandbox-api.okto.tech";
  const OKTO_CLIENT_API = "536721e5-a464-427e-8ca6-5e7b5b7582f0";

  const apiService = axios.create({
    baseURL: BASE_URL,
    headers: {
      "x-api-key": OKTO_CLIENT_API,
      "Content-Type": "application/json",
    },
  });

  const setPin = (idToken, token, reloginPin) => {
    return apiService.post("/api/v1/set_pin", {
      id_token: idToken,
      token: token,
      relogin_pin: reloginPin,
      purpose: "set_pin",
    });
  };

  const handleGoogleLogin = async (credentialResponse) => {
    console.log("Google login response:", credentialResponse);
    const idToken = credentialResponse.credential;
    console.log("google idtoken: ", idToken);
    localStorage.setItem('sessionToken', idToken);
    authenticate(idToken, async (authResponse, error) => {
      if (authResponse) {
        console.log("Authentication check: ", authResponse);
        setAuthToken(authResponse.auth_token);
        if (!authToken && authResponse.action === "signup") {
          console.log("User Signup");
          const pinToken = authResponse.token;
          await setPin(idToken, pinToken, "0000");
          await authenticate(idToken, async (res, err) => {
            if (res) {
              setAuthToken(res.auth_token);
            }
          });
        }
        console.log("auth token received", authToken);
        navigate("/home");
      }
      if (error) {
        console.error("Authentication error:", error);
      }
    });
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6 md:p-24 ">
      <div className="flex flex-col w-full h-fit relative items-center justify-items-center">
        <div className="container p-4 flex flex-col lg:flex-row justify-between items-center relative w-full h-full">
          <div className="flex flex-col items-center justify-center lg:items-start z-10 min-w-[50%] md:mt-8">
            <p className="text-4xl lg:text-5xl xl:text-6xl font-semibold text-center lg:text-left max-w-[350px] lg:max-w-[600px] leading-tight">
              Fund Projects you like
            </p>
            <p className="text-center lg:text-left mt-2 opacity-80 max-w-[500px] lg:max-w-[450px]">
              Login and coonect your Okto wallet to support your favourite initiatives.
            </p>
            <div className="flex flex-row pt-4">
              {!authToken ? (
                <GoogleLogin
                  onSuccess={handleGoogleLogin}
                  onError={(error) => {
                    console.log("Login Failed", error);
                  }}
                  useOneTap
                  promptMomentNotification={(notification) =>
                    console.log("Prompt moment notification:", notification)
                  }
                />
              ) : (
                <> Authenticated </>
              )}
            </div>
          </div>
          <div className="md:ml-16 mt-8 lg:mt-0 w-full">
            <img src="/crowdfunding.png" width={500} height={500} alt="eth logo" />
          </div>
        </div>
      </div>
    </main>
  );
}

export default LoginPage;
