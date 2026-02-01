import { Tarefa } from '@/hooks/useContadorDeTarefas';

export const tarefasIniciais: Tarefa[] = [
  {
    id: '1',
    titulo: 'Aprender Next.js',
    concluida: true,
  },
  {
    id: '2',
    titulo: 'Implementar testes',
    concluida: false,
  },
  {
    id: '3',
    titulo: 'Deploy da aplicação',
    concluida: false,
  },
];

export async function obterTarefas(): Promise<Tarefa[]> {
  // Simula uma chamada à API
  return Promise.resolve(tarefasIniciais);
}
