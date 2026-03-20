'use client';

export interface Tarefa {
  id: string;
  titulo: string;
  concluida: boolean;
}

export function useContadorDeTarefas(tarefas: Tarefa[]) {
  const total = tarefas.length;
  const concluidas = tarefas.filter((tarefa) => tarefa.concluida).length;

  return {
    total,
    concluidas,
    pendentes: total - concluidas,
  };
}
