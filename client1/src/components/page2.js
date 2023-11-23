import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Page2 = () => {
  const [elements, setElements] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8001/signs/page2');
      setElements(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const editProduct = (id) => {
    const selectedProduct = elements.find(element => element._id === id);
    const queryParams = new URLSearchParams();
    queryParams.append('id', id);
    queryParams.append('name', selectedProduct.name);
    queryParams.append('price', selectedProduct.price);
    queryParams.append('description', selectedProduct.description);
    queryParams.append('image', selectedProduct.image);
    navigate(`/page3?${queryParams.toString()}`);
  };

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`http://localhost:8001/signs/page2/${id}`);
      setElements(prevElements => prevElements.filter(element => element._id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="list-page">
      <div className="list-container">
        {elements.map((element) => (
          <div key={element._id} className="list-item">
            <h3>{element.name}</h3>
            {element.image && (
              <img src={element.image} alt="Element" style={{ height: "200px", width: "300px" }} />
            )}
            <p>₹ {element.price}</p>
            <p>{element.description}</p>
            <button className="button6" onClick={() => editProduct(element._id)}>Edit</button>
            <button className="button6" onClick={() => deleteProduct(element._id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page2;
