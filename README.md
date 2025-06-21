# 🎓 Gestor Escolar
Sistema para gerenciamento de notas e frequência dos alunos.

## 🔖 Descrição
Este projeto permite que um professor organize as notas (0 a 10) de 5 disciplinas e a frequência (%) dos alunos, calculando médias individuais, médias da turma por disciplina e destacando alunos que precisam de atenção especial (média abaixo da turma ou frequência abaixo de 75%).

## ✅ Funcionalidades

- Cadastrar alunos com:
  - Nome
  - Notas de 5 disciplinas (0 a 10)
  - Frequência (0 a 100%)
- Cálculo automático de:
  - Média das notas de cada aluno
  - Média da turma em cada disciplina
  - Alunos com notas acima da média da turma
  - Alunos com frequência abaixo de 75%
- Interface web simples e funcional

---

## 🛠 Tecnologias usadas

### Front-end
- React 18 + TypeScript
- Vite
- Axios
- CSS puro (sem frameworks)

### Back-end
- Java 17
- Spring Boot
- Spring Data JPA
- H2 Database (banco em memória)

### Build Tools
- Front: npm / Vite
- Back: Maven

---

## ▶️ Como executar o projeto

### 1. Clone o repositório

```bash
git clone https:https://github.com/dudlves/Gestor-Escolar.git
cd Gestor-Escolar
```

### 2. Inicie o back-end

```bash
cd backend
./mvnw spring-boot:run
```

O back-end estará disponível em: [http://localhost:8080](http://localhost:8080)

### 3. Inicie o front-end

```bash
cd aluno-notas-frequencia
npm install
npm run dev
```

O front estará disponível em: [http://localhost:5173](http://localhost:5173)
