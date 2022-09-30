import React from "react";
import { useState, useEffect } from "react";

const Customer = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/heroes")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      {data &&
        data.map((heroes) => {
          return (
            <>
              <div className="card m-4 p-1 bg-success text-white">
                <p className="card-text">id: {heroes.id}</p>
                <h5 className="card-title">name: {heroes.name}</h5>
                <h5 className="card-title"> abilities: {heroes.abilities}</h5>
              </div>
            </>
          );
        })}
    </div>
  );
};

export default Customer;
