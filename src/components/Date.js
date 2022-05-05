import React from "react";

const Today = () => {
  const getToday = new Date().toLocaleDateString("en-gb", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return <h2 className="date">Today is {getToday}, let's plan your day.</h2>;
};

export default Today;
