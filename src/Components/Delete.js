import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Delete = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8888/getcategory');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const deleteAllCategories = async () => {
    try {
      await axios.delete('http://localhost:8888/delete');
      setData([]); // Clear the data array after deletion
    } catch (error) {
      console.error('Error deleting all categories:', error);
    }
  };

  return (
    <div>
      <h2>Product List</h2>
      <button onClick={deleteAllCategories}>Delete All Categories</button>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {data.map(product => (
            <tr key={product.pid}>
              <td>{product.pid}</td>
              <td>{product.pname}</td>
              <td>{product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Delete;
