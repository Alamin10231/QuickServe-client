import React, { useEffect, useState } from "react";

const ManageService = () => {
  const [manager, setmanage] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000")
      .then((res) => res.json())
      .then((data) => setmanage(data));
  }, []);

  const handledelete = (id) => {
    fetch(`http://localhost:5000/manage/${id}`,{
      method:"DELETE",
    })
    .then(res => res.json())
    .then(data =>{ console.log(data)
      if(data.deletedCount >0){
        alert('Service deleted successfully');
        const conform = manager.filter(service => service._id !== id)
          setmanage(conform)

      }
    })
    console.log("deleteeeee");
  };
  return (
    <div>
      <h1>this is manage service mam{manager.length}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {manager.map((p) => (
          <div key={p._id} className="bg-white p-4 rounded-lg shadow">
            <img
              src={p.serviceImage}
              alt={p.serviceName}
              className="w-full h-48 object-cover mb-2"
            />
            <h3 className="text-xl font-semibold">{p.serviceName}</h3>
            <p>Price: ${p.price}</p>
            <p>Area: {p.serviceArea}</p>
            <button
              onClick={() => handledelete(p._id)}
              className="mt-2 bg-red-500 text-white px-4 py-2 rounded"
            >
              Delete Service
            </button>
            <button className="mt-2 bg-red-500 text-white px-4 py-2 rounded">
              Update Service
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageService;
