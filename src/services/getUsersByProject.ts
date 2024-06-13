import UsersByProject from "../types/usersByProject";

const getUsersByProject = async (id: string): Promise<UsersByProject[] | null> => {
  try {
    const response = await fetch(`http://localhost:3001/usuario/projeto/${id}`)

    if (!response.ok) {
      console.log(await response.text());
      throw new Error(await response.text());
    } else {
      const usersResponse = await response.json();
      const users: UsersByProject[] = usersResponse;
      console.log(users);
      return users;
    }
  } catch (error) {
    console.error(error);
  }
  return null
}

export default getUsersByProject;