import React, { useEffect, useState } from "react";

function GitHub() {
  const[(data, setData)] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/dhananjayjagale")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  }, []);
  return (
    <div className="text-center m-4 bg-gray-600 p-4 text-3xl">
      Github followers:
    </div>
  );
}

export default GitHub;
