const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

export const fetchData = async () => {
  const response = await fetch(`${API_BASE_URL}/api/data`);
  return response.json();
};
