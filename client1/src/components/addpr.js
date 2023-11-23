import React, { useState } from 'react';


class Product {
  constructor(name, price, description) {
    this.name = name;
    this.price = price;
    this.description = description;
  }
}

const ProductList = () => {
  const [products, setProducts] = useState([
    new Product('Product 1', 10.99, 'This is product 1'),
    new Product('Product 2', 12.99, 'This is product 2'),
    new Product('Product 3', 15.99, 'This is product 3')
  ]);

  const addProduct = () => {
    fetch('http://localhost:8001/add')
      .then(res => res.json())
      .then(newProduct => {
        setProducts(prevProducts => [...prevProducts, new Product(newProduct.name, newProduct.price, newProduct.description)]);
      })
      .catch(err => console.error(err));
  };
  

  const addAdmin = () => {
    fetch('http://localhost:8001/mondb')
      .then(res => res.json())
      .then(newProduct => {
        setProducts(prevProducts => [...prevProducts, new Product(newProduct.name, newProduct.price, newProduct.description)]);
      })
      .catch(err => console.error(err));
  };

  //   useEffect(() => {
  //     axios.get('/api/products')
  //       .then(response => setProducts(response.data))
  //       .catch(error => console.log(error));
  //   }, []);



  const editProduct = (index, updatedProduct) => {

    fetch(`http://localhost:8001/add/${index}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedProduct),
    })
      .then(response => response.json())
      .then(data => {

        setProducts(prevProducts => {
          const newProducts = [...prevProducts];
          newProducts[index] = data;
          return newProducts;
        });
      })
      .catch(error => console.error(error));
  };


  const deleteProduct = (index) => {
    setProducts(prevProducts => {
      const newProducts = [...prevProducts];
      newProducts.splice(index, 1);
      return newProducts;
    });
  };

  return (
    <div>
      {products.map((product, index) => (
        <div key={index}>
          <h2>{product.name}</h2>
          <p>Price: ${product.price}</p>
          <p>{product.description}</p>
          <button onClick={() => editProduct(index, new Product('Updated Product', 25.99, 'This is an updated product'))}>Edit</button>
          <button onClick={() => deleteProduct(index)}>Delete</button>
        </div>
      ))}
      <button onClick={addProduct}>Add Product</button>
      <button onClick={addAdmin}>Add Admin</button>
    </div>
  );
};

export default ProductList;
