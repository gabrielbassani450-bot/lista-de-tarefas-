'use client';

import { useState, FormEvent } from 'react';
import { Tarefa } from '@/hooks/useContadorDeTarefas';

interface NovaTarefaProps {
  onAdicionarTarefa: (tarefa: Tarefa) => void;
}

export function NovaTarefa({ onAdicionarTarefa }: NovaTarefaProps) {
  const [input, setInput] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validação
    if (!input.trim()) {
      alert('Por favor, digite uma tarefa');
      return;
    }

    // Criar nova tarefa
    const novaTarefa: Tarefa = {
      id: Date.now().toString(),
      titulo: input.trim(),
      concluida: false,
    };

    onAdicionarTarefa(novaTarefa);
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Digite uma nova tarefa..."
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          data-testid="input-tarefa"
        />
        <button
          type="submit"
          className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          data-testid="btn-adicionar"
        >
          Adicionar
        </button>
      </div>
    </form>
  );
}
