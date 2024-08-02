// src/HomePage.js
import React, { useEffect } from "react";
import Grid from "../components/Grid";
import { useLocation, Link, useNavigate } from "react-router-dom";

const SimpleHomePage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("sessionToken")) {
      navigate("/");
    }
  }, []);

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow container mx-auto text-center py-20">
        <h1 className="text-5xl font-bold mb-6">Welcome to Contribute!</h1>
        <p className="text-lg text-gray-700 mb-8">
          Atomize React is a UI framework that helps developers collaborate with
          designers and build consistent user interfaces effortlessly.
        </p>
        <div className="space-x-4">
          <Link to={{ pathname: "/home", hash: "#grid" }}>
            <button
              className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
              //onClick={handleClick}
            >
              Get Started Now
            </button>
          </Link>

          <button className="border border-gray-300 text-gray-700 px-6 py-2 rounded hover:bg-gray-100">
            Watch Video
          </button>
        </div>
        <Grid />
      </main>
    </div>
  );
};

export default SimpleHomePage;
