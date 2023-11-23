import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { useLocation, useNavigate } from 'react-router-dom';

const Page3 = () => {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [imagePreview, setImagePreview] = useState("");
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const searchParams = useMemo(() => new URLSearchParams(location.search), [location.search]);
  const id = searchParams.get('id');

  useEffect(() => {
    const name = searchParams.get('name');
    const price = searchParams.get('price');
    const description = searchParams.get('description');
    const image = searchParams.get('image');
    
    if (name) setProductName(name);
    if (price) setPrice(price);
    if (description) setDescription(description);
    if (image) {
      setImage(image);
      setImagePreview(image);
    }
  }, [searchParams]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onloadend = async () => {
      const base64Image = reader.result;

    if (!productName || !price || !description || !image) {
      // Handle validation error, show error message, or prevent form submission
      return;
    }

    setLoading(true);
     var formData = {
        name:productName,
        price:price,
        description: description,
        image: base64Image,
    
 }
    // const formData = new FormData();
    // formData.append("name", productName);
    // formData.append("price", price);
    // formData.append("description", description);
    //formData.append("image", image);
    console.log(productName);
    try {
        //const form = new FormData();
        //form.append(item.name, fs.createReadStream(pathToFile));
        
        // const response = await axios({
        //     method: 'post',
        //     url: `http://localhost:8001/signs/page3/${id}`,
        //     data: formData,
        //     //headers: formData.getHeaders(),
        // });
         const response = await axios.post(
         `http://localhost:8001/signs/page3/${id}`,
         formData
      );
      console.log(response);
      // Handle success or any other logic here
      navigate("/page2");
    } catch (error) {
      console.error(error);
      // Handle error or show error message
    } finally {
      setLoading(false);
    }
    };
  };


  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
    setImagePreview(URL.createObjectURL(selectedImage));
  };

  const handleCancel = () => {
    navigate("/page2");
  };

  return (
    <div className="login-page" style={{ height: "800px" }}>
      <div className="login-box" style={{ height: "700px" }}>
        <h2>Edit Product</h2>
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
          <div>
            <button className="button5" type="submit" disabled={loading}>
              {loading ? "Updating..." : "Edit Product"}
            </button><br/><br/>
            <button className="button5" type="button" onClick={handleCancel} disabled={loading}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page3;
