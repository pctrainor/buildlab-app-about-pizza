import axios from 'axios';

const API_BASE_URL = 'https://api.pizzaapp.com';

export const fetchToppings = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/toppings`);
    return response.data;
  } catch (error) {
    console.error('Error fetching toppings:', error);
    throw error;
  }
};

export const fetchOrders = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/orders`);
    return response.data;
  } catch (error) {
    console.error('Error fetching orders:', error);
    throw error;
  }
};

export const fetchRewards = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/rewards`);
    return response.data;
  } catch (error) {
    console.error('Error fetching rewards:', error);
    throw error;
  }
};

export const placeOrder = async (orderDetails: any) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/orders`, orderDetails);
    return response.data;
  } catch (error) {
    console.error('Error placing order:', error);
    throw error;
  }
};