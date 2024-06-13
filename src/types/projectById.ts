export default interface ProjectById {
  nomeProjeto: string;
  qtdRevisores: number; // Ensure this is a number if your data is numeric
  revisores: string[];
  qtdAnalistas: number;
  interpretes: string[];
  qtdGrades: number;
  qtdGradeFeita: number;
  qtdGradeAndamento: number;
  qtdGradePendente: number;
  pctRecorrencia: string; // Ensure this is a string if your data is in string format
}
