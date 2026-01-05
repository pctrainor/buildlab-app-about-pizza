export const calculateTotal = (items: { quantity: number, price: number }[]): number => {
  return items.reduce((total, item) => total + item.quantity * item.price, 0);
};

export const formatCurrency = (amount: number, currency: string = 'USD'): string => {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(amount);
};

export const applyDiscount = (total: number, discountPercent: number): number => {
  const discountAmount = total * (discountPercent / 100);
  return total - discountAmount;
};

export const validateEmail = (email: string): boolean => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

export const formatOrderDate = (date: string): string => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};