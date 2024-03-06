import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Update = () => {
  const [product, setProduct] = useState({
    pid: '',
    pname: '',
    price: '',
  });
  const [productId, setProductId] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:8888/getcategory/${productId}`);
      setProduct(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8888/category/${productId}`, product);
      navigate('/display'); // Navigate to display page after updating
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  const handleProductIdChange = (e) => {
    setProductId(e.target.value);
  };

  return (
    <div>
      <h2>Update Product</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Enter Product ID:
          <input type="text" value={product.pid} onChange={handleProductIdChange} />
        </label>
        <br />
        <label>
          Product Name:
          <input type="text" name="pname" value={product.pname} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Price:
          <input type="text" name="price" value={product.price} onChange={handleInputChange} />
        </label>
        <br />
        <button type="submit">Update Product</button>
      </form>
    </div>
  );
};

export default Update;
