import React, { useState } from "react";
import axios from "axios";

const Page1 = () => {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [imagePreview, setImagePreview] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onloadend = async () => {
      const base64Image = reader.result;

      const formData = {
        name1: productName,
        price1: price,
        description1: description,
        image1: base64Image,
      };

      try {
        const response = await axios.post(
          "http://localhost:8001/signs/page1",
          formData
        );
        console.log(response);
        // Handle success or any other logic here
        window.location.href = "/page1";
      } catch (error) {
        console.error(error);
        // Handle error or show error message
      }
    };
  };

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
    setImagePreview(URL.createObjectURL(selectedImage));
  };


  return (
    <div className="login-page" style={{ height: "800px" }}>
      <div className="login-box" style={{ height: "700px" }}>
        <h2>Add Product</h2>
        <form className="form5" onSubmit={handleSubmit}>
          <div className="form5-group">
            <label className="label5" htmlFor="productName">
              Name:
            </label>
            <input
              className="input5"
              type="text"
              id="productName"
              name="productName"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              required
            />
          </div>
          <div className="form5-group">
            <label className="label5" htmlFor="price">
              Price:
            </label>
            <input
              className="input5"
              type="text"
              id="price"
              name="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>
          <div className="form5-group">
            <label className="label5" htmlFor="description">
              Description:
            </label>
            <textarea
              className="input5"
              id="description"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="form5-group">
            <label className="label5" htmlFor="image">
              Upload Image:
            </label>
            <input
              className="input5"
              type="file"
              id="image"
              name="image"
              accept="image/*"
              onChange={handleImageChange}
              required
            />
          </div>
          <div className="image-preview">
            {imagePreview && (
              <img
                src={imagePreview}
                alt="Preview"
                style={{
                  paddingLeft: "60px",
                  width: "200px",
                  height: "100px",
                }}
              />
            )}
          </div>
          <br />
          <button className="button5" type="submit">
            Add Product
          </button><br/>
          <button className="button5" type="submit" >
           <a href="/page2">List Product</a> 
          </button>
        </form>
            </div>
        </div>
    );
};

export default Page1;
