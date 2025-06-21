import type { ChangeEvent, FormEvent } from "react";
import { useState } from "react";
import { criarAluno } from "../../services/alunoService";
import "./FormularioAluno.css";

interface Props {
  onAlunoCriado: () => void;
}

export default function FormularioAluno({ onAlunoCriado }: Props) {
  const [nome, setNome] = useState("");
  const [notas, setNotas] = useState<string[]>(["", "", "", "", ""]);
  const [frequencia, setFrequencia] = useState("");

  function handleNotaChange(index: number, valor: string) {
    const newNotas = [...notas];
    newNotas[index] = valor;
    setNotas(newNotas);
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const isValidNumber = (value: string, min: number, max: number) => {
    const num = Number(value);
    return value !== "" && !isNaN(num) && num >= min && num <= max;
    };

    if (!nome.trim() || 
      notas.some((n) => !isValidNumber(n, 0, 10)) || !isValidNumber(frequencia, 0, 100)) {
      alert("Preencha os dados corretamente.");
      return;
    }

    const aluno = {
      nome,
      notas: notas.map((n) => parseFloat(n)),
      frequencia: parseFloat(frequencia),
    };

    try {
      await criarAluno(aluno);
      setNome("");
      setNotas(["", "", "", "", ""]);
      setFrequencia("");
      onAlunoCriado();
    } catch (error) {
      alert("Erro ao cadastrar aluno.");
      console.error(error);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Nome do aluno" value={nome} onChange={(e: ChangeEvent<HTMLInputElement>) => setNome(e.target.value)} required/>
      {notas.map((nota, i) => (
        <input key={i} type="number" min="0" max="10" step="0.1" placeholder={`Nota ${i + 1}`} value={nota} onChange={(e: ChangeEvent<HTMLInputElement>) => handleNotaChange(i, e.target.value)} required />
      ))}
      <input type="number" min="0" max="100" step="0.1" placeholder="Frequência (%)" value={frequencia} onChange={(e: ChangeEvent<HTMLInputElement>) => setFrequencia(e.target.value)} required />
      <button type="submit">Cadastrar aluno</button>
    </form>
  );
}
