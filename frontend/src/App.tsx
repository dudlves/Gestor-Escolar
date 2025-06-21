import { buscarAlunos } from "./services/alunoService";
import { useEffect, useState } from "react";
import FormularioAluno from "./components/formularioAluno/FormularioAluno";
import ListaAlunos from "./components/listaAlunos/ListaAlunos";
import "./styles.css";


export interface Aluno {
  id: number;
  nome: string;
  notas: number[];
  frequencia: number;
}

function App() {
  const [alunos, setAlunos] = useState<Aluno[]>([]);

  const carregarAlunos = async () => {
    try {
      const { data } = await buscarAlunos();
      setAlunos(data);
    } catch (error) {
      console.error("Erro ao buscar alunos:", error);
    }
  };

  useEffect(() => {
    carregarAlunos();
  }, []);

  return (
    <div className="container">
      <h1>Sistema de Notas e Frequência</h1>
      <FormularioAluno onAlunoCriado={carregarAlunos} />
      <ListaAlunos alunos={alunos} />
    </div>
  );
}

export default App;
