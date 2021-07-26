import getEnvVars from "../../environment";

const { apiUrl } = getEnvVars();

export const fetchAgents = async () => {
  const endpoint = `${apiUrl}agents`;
  const response = await fetch(endpoint);
  const data = await response.json();
  return data;
};

export const fetchWeapons = async () => {
  try {
    const endpoint = `${apiUrl}weapons`;
    const response = await fetch(endpoint);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchSprays = async () => {
  try {
    const endpoint = `${apiUrl}sprays`;
    const response = await fetch(endpoint);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchCards = async () => {
  try {
    const endpoint = `${apiUrl}playercards`;
    const response = await fetch(endpoint);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
