import React, { useContext, useEffect } from "react";
import { AuthContext } from "../Auth/AuthProvider";
import { useNavigate } from "react-router-dom";

const AddServices = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const handlesubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const serviceImage = form.serviceImage.value;
    const serviceName = form.serviceName.value;
    const price = form.price.value;
    const serviceArea = form.serviceArea.value;
    const description = form.description.value;
    const provider = {
      name: user?.displayName,
      email: user?.email,
      image: user?.photoURL,
    };

    const alldata = {
      serviceImage,
      serviceName,
      price,
      serviceArea,
      description,
      provider,
    };
    console.log(alldata);

    fetch("http://localhost:5000/addservices", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(alldata),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Service added successfully!");

          form.reset();
          navigate("/services");
        }
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form className="card-body" onSubmit={handlesubmit}>
          <h1 className="text-5xl font-bold text-center mb-4">Add Service</h1>

          {/* Image URL */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Image URL</span>
            </label>
            <input
              type="text"
              name="serviceImage"
              placeholder="Image URL"
              className="input input-bordered"
              required
            />
          </div>

          {/* Service Name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Service Name</span>
            </label>
            <input
              type="text"
              name="serviceName"
              placeholder="Service Name"
              className="input input-bordered"
              required
            />
          </div>

          {/* Price */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="number"
              name="price"
              placeholder="Price"
              className="input input-bordered"
              required
            />
          </div>

          {/* Service Area */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Service Area</span>
            </label>
            <input
              type="text"
              name="serviceArea"
              placeholder="Service Area"
              className="input input-bordered"
              required
            />
          </div>

          {/* Description */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
              name="description"
              placeholder="Description"
              className="textarea textarea-bordered h-24"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary">
              Add Service
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddServices;
