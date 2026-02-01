'use client';

import { useState, useEffect } from 'react';

export interface Tarefa {
  id: string;
  titulo: string;
  concluida: boolean;
}

export function useContadorDeTarefas(tarefas: Tarefa[]) {
  const [total, setTotal] = useState(0);
  const [concluidas, setConcluidas] = useState(0);

  useEffect(() => {
    setTotal(tarefas.length);
    setConcluidas(tarefas.filter((tarefa) => tarefa.concluida).length);
  }, [tarefas]);

  return {
    total,
    concluidas,
    pendentes: total - concluidas,
  };
}
