'use client';

import { useContadorDeTarefas, Tarefa } from '@/hooks/useContadorDeTarefas';

interface ContadorTarefasProps {
  tarefas: Tarefa[];
}

export function ContadorTarefas({ tarefas }: ContadorTarefasProps) {
  const { total, concluidas, pendentes } = useContadorDeTarefas(tarefas);

  return (
    <div className="grid grid-cols-3 gap-4 mb-6">
      <div className="bg-blue-50 p-4 rounded-lg" data-testid="contador-total">
        <p className="text-sm text-gray-600">Total</p>
        <p className="text-2xl font-bold text-blue-600">{total}</p>
      </div>
      <div className="bg-green-50 p-4 rounded-lg" data-testid="contador-concluidas">
        <p className="text-sm text-gray-600">Concluídas</p>
        <p className="text-2xl font-bold text-green-600">{concluidas}</p>
      </div>
      <div className="bg-orange-50 p-4 rounded-lg" data-testid="contador-pendentes">
        <p className="text-sm text-gray-600">Pendentes</p>
        <p className="text-2xl font-bold text-orange-600">{pendentes}</p>
      </div>
    </div>
  );
}
