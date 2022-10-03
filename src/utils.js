const paginate = (data) => {
  const itemPerPage = 10;
  const pages = Math.ceil(data.length / itemPerPage);
  const newItems = Array.from({ length: pages }, (_, index) => {
    const start = index * itemPerPage;
    const tempItems = data.slice(start, start + itemPerPage);
    return tempItems;
  });
  return newItems;
};

export default paginate;
