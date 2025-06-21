import { useMemo } from "react";
import type { Aluno } from "../../App";


interface Props {
  alunos: Aluno[];
}

export default function ListaAlunos({ alunos }: Props) {
  const mediasTurma = useMemo(() => {
    if (alunos.length === 0) return [];
    const somaNotas = Array(5).fill(0);
    alunos.forEach((aluno) => {
      aluno.notas.forEach((nota, i) => {
        somaNotas[i] += nota;
      });
    });
    return somaNotas.map((soma) => (soma / alunos.length).toFixed(2));
  }, [alunos]);

  const mediaGeralTurma = useMemo(() => {
    if (alunos.length === 0) return 0;
    const somaMedias = alunos.reduce((acc, aluno) => {
      const mediaAluno = aluno.notas.reduce((a, b) => a + b, 0) / aluno.notas.length;
      return acc + mediaAluno;
    }, 0);
    return somaMedias / alunos.length;
  }, [alunos]);

  const acimaDaMedia = alunos.filter((aluno) => {
    const mediaAluno = aluno.notas.reduce((a, b) => a + b, 0) / aluno.notas.length;
    return mediaAluno > mediaGeralTurma;
  });

  const baixaFrequencia = alunos.filter((aluno) => aluno.frequencia < 75);

  return (
    <div>
      <h2>Alunos cadastrados</h2>
      <ul className="lista-alunos">
        {alunos.map((aluno) => {
          const mediaAluno = (
            aluno.notas.reduce((a, b) => a + b, 0) / aluno.notas.length
          ).toFixed(2);
          return (
            <li key={aluno.id}>
              {aluno.nome} — Média: <strong>{mediaAluno}</strong> — Frequência:{" "}
              <strong>{aluno.frequencia}%</strong>
            </li>
          );
        })}
      </ul>

      <h3>Média da turma por disciplina:</h3>
      <ul className="list-disc">
        {mediasTurma.map((media, i) => (
          <li key={i}>
            Disciplina {i + 1}: {media}
          </li>
        ))}
      </ul>

      <h3>Alunos com média acima da média da turma:</h3>
      <ul className="list-disc">
        {acimaDaMedia.length > 0 ? (
          acimaDaMedia.map((aluno) => <li key={aluno.id}>{aluno.nome}</li>)
        ) : (
          <li className="text-muted">Nenhum</li>
        )}
      </ul>

      <h3>Alunos com frequência abaixo de 75%:</h3>
      <ul className="list-disc">
        {baixaFrequencia.length > 0 ? (
          baixaFrequencia.map((aluno) => <li key={aluno.id}>{aluno.nome}</li>)
        ) : (
          <li className="text-muted">Nenhum</li>
        )}
      </ul>
    </div>
  );
}
