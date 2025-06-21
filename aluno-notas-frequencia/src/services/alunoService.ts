import axios from "axios";
import type { Aluno } from "../App";

const API_URL = "http://localhost:8080/alunos";

export const buscarAlunos = () => axios.get<Aluno[]>(API_URL);

export const criarAluno = (aluno: Omit<Aluno, "id">) => axios.post(API_URL, aluno);
