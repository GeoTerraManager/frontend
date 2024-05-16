import ProjectData from "../types/projectData";

const getAllProjects = async () => {
    try {
        const response = await fetch("http://localhost:3001/project", {
          method: "GET"
        });
  
        if (!response.ok) {
          console.log(await response.text());
          throw new Error(await response.text())
        } else {
          const projetos_response = await response.json();
          const projetos: ProjectData[] = projetos_response;
          console.log(projetos); // Adicionando console.log aqui
          return projetos;   
        }
      } catch (error) {
        console.error(error);
      }
}

export default getAllProjects;