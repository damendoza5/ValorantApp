import getEnvVars from "../../environment";

const { apiUrl } = getEnvVars();

export const fetchAgents = async () => {
<<<<<<< HEAD
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
=======
  const endpoint = `${apiUrl}agents`;
  const response = await fetch(endpoint);
  const data = await response.json();
  console.log(data);
  return data;
};

export const fetchWeapons = async () => {
  try {
    const endpoint = `${apiUrl}weapons`;
    const response = await fetch(endpoint);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
>>>>>>> 9a28f98c61ef4ee207f2e489c7c616c9b9ddaa71
};
