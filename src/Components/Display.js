import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Display = () => {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({
    pid: '',
    pname: '',
    price: '',
  });

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

  return (
    <div>
      <h2>Product List</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            {/* Add more table headers as needed */}
          </tr>
        </thead>
        <tbody>
          {data.map(product => (
            <tr key={product.pid}>
              <td>{product.pid}</td>
              <td>{product.pname}</td>
              <td>{product.price}</td>
              {/* Render more columns if there are more fields in the data */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Display;
