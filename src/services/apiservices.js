export const fetchData = async (api) => {
  const response = await fetch(api);
  if (!response.ok) {
    throw new Error("Data coud not be fetched!");
  } else {
    return response.json();
  }
};
