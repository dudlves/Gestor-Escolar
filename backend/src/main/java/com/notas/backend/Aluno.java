package com.notas.backend;

import jakarta.persistence.*;
import java.util.List;

@Entity
public class Aluno {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  private String nome;

  @ElementCollection
  private List<Double> notas; // 5 notas

  private double frequencia;

  public Aluno() {}

  public Aluno(String nome, List<Double> notas, double frequencia) {
    this.nome = nome;
    this.notas = notas;
    this.frequencia = frequencia;
  }

  public Long getId() { 
    return id; 
  }

  public String getNome() { 
    return nome; 
  }

  public void setNome(String nome) { 
    this.nome = nome; 
  }

  public List<Double> getNotas() { 
    return notas; 
  }

  public void setNotas(List<Double> notas) { 
    this.notas = notas; 
  }

  public double getFrequencia() { 
    return frequencia; 
  }
    
  public void setFrequencia(double frequencia) { 
    this.frequencia = frequencia; 
  }
}
