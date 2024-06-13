import { UserById } from "../types/userById";

const getUserById = async (id: string): Promise<UserById | undefined> => {
  try {
    const response = await fetch(`http://localhost:3001/usuario/${id}`, {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error(await response.text());
    } else {
      const userData = await response.json();
      return userData as UserById;
    }
  } catch (error) {
    console.error(error);
  }
};

export default getUserById;
