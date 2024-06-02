/*import { useState, useEffect } from 'react';

const useFetch = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch('http://localhost:3000/api/products');
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, ['http://localhost:3000/api/products']);

  return { data, loading, error };
};

export default useFetch;*/
import { useState, useEffect } from 'react';

const useFetch = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const token = localStorage.getItem('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NjQ4NjZjMDM3Mzg0YzlhM2I3Yjg5MjQiLCJlbWFpbCI6InRlc3RAZXhhbXBsZS5jb20iLCJpYXQiOjE3MTY5MTg0Nzd9.m4P3Hd8mMwehgKE19AFR0HRKCMjtpeMRZpfuPqv24F0'); // Adjust according to how you store the token
        const response = await fetch('http://localhost:3000/api/products/', {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        });
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, ['http://localhost:3000/api/products/']);

  return { data, loading, error };
};

export default useFetch;

