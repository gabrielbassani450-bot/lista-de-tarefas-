'use client';

import { Tarefa } from '@/hooks/useContadorDeTarefas';

interface ListaTarefasProps {
  tarefas: Tarefa[];
  onToggleTarefa: (id: string) => void;
}

export function ListaTarefas({ tarefas, onToggleTarefa }: ListaTarefasProps) {
  return (
    <div className="space-y-2" data-testid="lista-tarefas">
      {tarefas.length === 0 ? (
        <p className="text-gray-500 text-center py-8">
          Nenhuma tarefa adicionada ainda.
        </p>
      ) : (
        tarefas.map((tarefa) => (
          <div
            key={tarefa.id}
            className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow"
            data-testid={`tarefa-${tarefa.id}`}
          >
            <input
              type="checkbox"
              checked={tarefa.concluida}
              onChange={() => onToggleTarefa(tarefa.id)}
              className="w-4 h-4 cursor-pointer"
              data-testid={`checkbox-${tarefa.id}`}
            />
            <span
              className={`flex-1 ${
                tarefa.concluida
                  ? 'line-through text-gray-500'
                  : 'text-gray-800'
              }`}
            >
              {tarefa.titulo}
            </span>
          </div>
        ))
      )}
    </div>
  );
}
