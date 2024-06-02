import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './CartItem.module.css';
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const CartItem = ({ product }) => {
  const [open, setOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const handleOpen = (message) => {
    setModalMessage(message);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const addToCart = async () => {
    const token = localStorage.getItem('token'); 

    if (!token) {
      handleOpen('You need to log in first.');
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/api/shopping-cart/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          productId: product._id,
          quantity: 1 
        })
      });

      const data = await response.json();

      if (response.ok) {
        handleOpen('Product added to cart!');
      } else {
        handleOpen(data.message || 'Failed to add product to cart.');
      }
    } catch (error) {
      console.error('Error adding product to cart:', error);
      handleOpen('An error occurred. Please try again.');
    }
  };

  return (
    <div className={styles.cartItem}>
      <img src={`http://localhost:3000${product.image}`} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <button onClick={addToCart}>Add to Cart</button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {modalMessage}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

CartItem.propTypes = {
  product: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default CartItem;



