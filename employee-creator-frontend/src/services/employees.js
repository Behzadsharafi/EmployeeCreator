export const getAllEmployees = async () => {
  const response = await fetch("http://localhost:8080/employee");
  return await response.json();
};
