export interface ProjectByUser {
  nome_projeto: string;
  cargo: string;
  total_quadriculas_revisao?: number;
  revisadas?: number;
  pendentes?: number;
  total_quadriculas_atribuidas?: number;
  feitas?: number;
  andamento?: number;
  km_mapeados?: number;
}

export interface UserById {
  nome: string;
  qtd_quadriculas_atribuidas: number;
  qtd_quadriculas_finalizadas: number;
  qtd_quadriculas_andamento: number;
  qtd_total_apontamentos: number;
  projetos: ProjectByUser[];
}


