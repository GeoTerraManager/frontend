import ProjectById from "../types/projectById";

const getProjectById = async (id: string): Promise<ProjectById | undefined> => {
  try {
    const response = await fetch(`http://localhost:3001/project/${id}`, {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error(await response.text());
    } else {
      const projectData = await response.json();
      return projectData as ProjectById;
    }
  } catch (error) {
    console.error(error);
  }
};

export default getProjectById;
