import { useMutation } from "convex/react";
import React, { useState } from "react";
import type { FormEvent } from "react";
import { api } from "../../convex/_generated/api";

const Service = () => {
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [description, setDescription] = useState("");
  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");
  const [subservices, setSubservices] = useState([
    { name: "", description: "" },
  ]);
  const [createdAt] = useState(Date.now());

  const createService = useMutation(api.services.createService);
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    //  call your API to create the service
    await createService({
      name,
      slug,
      description,
      image1,
      image2,
      subservices,
      createdAt,
    });

    alert("Service created!");

    // Clear form
    setName("");
    setSlug("");
    setDescription("");
    setImage1("");
    setImage2("");
    setSubservices([{ name: "", description: "" }]);
  };
  return (
    <div className="createService">
      <h2>Create service</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Service Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="name">Slug:</label>
          <input
            type="text"
            id="slug"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="name">Description</label>
          <input
            type="text"
            id="desc"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <label htmlFor="image1">
          <input type="image" src="" alt="service" />
        </label>
      </form>
    </div>
  );
};

export default Service;
