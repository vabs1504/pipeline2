
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
 
const Insert = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    pid: '',
    pname: '',
    price: '',
  });
  const [errors, setErrors] = useState({});
 
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors={};
    try {
      if(!formData.pid)
      {
        newErrors.pid='id is null';
        if(!formData.pname)
        {
          newErrors.pname='name is null';
        }
        if(!formData.price)
        {
          newErrors.price='price is null';
        }
      }
      else 
      {
        const response2 = await axios.get(`http://localhost:8888/getcategory/${formData.pid}`);
        if(response2.data!=null)
       {
          newErrors.pid='id in use';
       }
       
       if(!formData.pname)
       {
         newErrors.pname='name is null';
       }
       if(!formData.price)
       {
         newErrors.price='price is null';
       }
       if(Object.keys(newErrors).length==0&&response2.data==null)
       {
         const response = await axios.post('http://localhost:8888/category/add-category', formData);
       navigate('/Display');
       }
      }
     
    } catch (error) {
      console.error('Error adding product:', error);
    }
    setErrors(newErrors);
  };
 
  return (
    <div>
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
      <label>
  ID:
  <input type="text" name="pid" value={formData.pid} onChange={handleInputChange} />
  <br/>{errors.pid && <span style={{ color: 'red' }}>{errors.pid}</span>}
</label>

        <label>
          Name:
          <input type="text" name="pname" value={formData.pname} onChange={handleInputChange} />
          <br/>{errors.pname && <span>{errors.pname}</span>}
        </label>
        <label>
          Price:
          <input type="text" name="price" value={formData.price} onChange={handleInputChange} />
          <br/>{errors.price && <span>{errors.price}</span>}
        </label>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};
 
export default Insert;