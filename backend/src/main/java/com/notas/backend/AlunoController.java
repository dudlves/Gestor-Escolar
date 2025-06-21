package com.notas.backend;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/alunos")
@CrossOrigin(origins = "http://localhost:5173") 
public class AlunoController {
  private final AlunoRepository repository;

  public AlunoController(AlunoRepository repository) {
    this.repository = repository;
  }

  @GetMapping
  public List<Aluno> listar() {
    return repository.findAll();
  }

  @PostMapping
  public Aluno criar(@RequestBody Aluno aluno) {
    return repository.save(aluno);
  }
}
