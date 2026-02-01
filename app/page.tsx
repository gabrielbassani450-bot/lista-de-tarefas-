'use client';

import { useState } from 'react';
import { tarefasIniciais } from '@/data/tarefas';
import { Tarefa } from '@/hooks/useContadorDeTarefas';
import { NovaTarefa } from '@/components/NovaTarefa';
import { ListaTarefas } from '@/components/ListaTarefas';
import { ContadorTarefas } from '@/components/ContadorTarefas';

export default function Home() {
  const [tarefas, setTarefas] = useState<Tarefa[]>(tarefasIniciais);

  const handleAdicionarTarefa = (novaTarefa: Tarefa) => {
    setTarefas([...tarefas, novaTarefa]);
  };

  const handleToggleTarefa = (id: string) => {
    setTarefas(
      tarefas.map((tarefa) =>
        tarefa.id === id ? { ...tarefa, concluida: !tarefa.concluida } : tarefa
      )
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <main className="max-w-2xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
          Minha Listagem de Tarefas
        </h1>

        <ContadorTarefas tarefas={tarefas} />

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Adicionar Nova Tarefa
          </h2>
          <NovaTarefa onAdicionarTarefa={handleAdicionarTarefa} />

          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Tarefas
          </h2>
          <ListaTarefas
            tarefas={tarefas}
            onToggleTarefa={handleToggleTarefa}
          />
        </div>
      </main>
    </div>
  );
}
