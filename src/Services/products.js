export const postOrder = async (requestOrder) => {
  const token = localStorage.getItem('token');
  return await fetch('https://lab-api-bq.herokuapp.com/orders', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      'Authorization': `${token}`,
    },
    body: JSON.stringify(requestOrder)
  })
}