const mockData = [
  {
    id: 1,
    name: 'hammer',
  },
  {
    id: 2,
    name: 'screwdriver',
  },
  {
    id: 3,
    name: 'wrench',
  },
];

export const fetchAllProducts = async () => {
  return mockData;
};

export const fetchProduct = async () => {
  return mockData.filter((item) => item.id === 1);
};
