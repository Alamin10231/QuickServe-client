import React, { useEffect, useState } from "react";
import Minimain from "./Minimain";

const Main = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/fakedata.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div>
      <h2 className="text-3xl font-bold  mb-8 text-center "> 
        Popular Services 
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((service) => (
          <Minimain key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Main;
