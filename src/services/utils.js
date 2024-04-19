

export const formatPrice = (price) => {
  const priceFormatted = price?.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD'
  });
  return priceFormatted
}