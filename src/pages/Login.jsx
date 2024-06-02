
import React, { useState } from 'react';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [cartItems, setCartItems] = useState([]);
  

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('token', data.token);
        setMessage(data.message);

        const cartResponse = await fetch('http://localhost:3000/api/shopping-cart/items', {
          method: 'GET',
          
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${data.token}`
          }
         
        });

        const cartData = await cartResponse.json();
        if (cartResponse.ok) {
          setCartItems(cartData);
          setMessage('Shopping cart fetched successfully');
        } else {
          setMessage(cartData.message || 'Failed to fetch shopping cart');
        }
      } else {
        setMessage(data.message || 'Login failed');
      }
    } catch (error) {
      setMessage('Login failed');
    }
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <h2>Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
      {message && <p>{message}</p>}

{cartItems.length > 0 && (
  <div>
    <h3>Shopping Cart</h3>
    <ul>
      {cartItems.map((item) => (
        <li key={item.product._id}>
          <p>id:{item.product}</p>
          <p>Quantity: {item.quantity}</p>
        </li>
      ))}
    </ul>
  </div>
)}
</div>
  );
};

export default Login;
