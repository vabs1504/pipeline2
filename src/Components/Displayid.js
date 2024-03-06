import React, { useState } from 'react';
import axios from 'axios';

const Displayid = () => {
  const [data, setData] = useState([]);
  const [productId, setProductId] = useState('');

  const fetchDataById = async () => {
    try {
      const response = await axios.get(`http://localhost:8888/getcategory/${productId}`);
      setData([response.data]); // Wrap the response data in an array to match the data structure expected by map
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleInputChange = (e) => {
    setProductId(e.target.value);
  };

  return (
    <div>
      <h2>Product List</h2>
      <label>
        Enter Product ID:
        <input type="text" value={productId} onChange={handleInputChange} />
      </label>
      <button onClick={fetchDataById}>Fetch Data</button>
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

export default Displayid;
