"use client";

// import { useEffect, useState } from 'react';
import Home from "./pages/Home/Home";
// import Loading from './pages/Loading/Loading';

const HomePage = () => {
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => setIsLoading(false), 2000);
  // }, []);
  return (
    <div className="bg-[#121B42]">
      {" "}
      <Home />
    </div>
  );
};

export default HomePage;
