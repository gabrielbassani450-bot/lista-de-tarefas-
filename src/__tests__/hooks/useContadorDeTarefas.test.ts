import { renderHook } from '@testing-library/react';
import { useContadorDeTarefas, Tarefa } from '@/hooks/useContadorDeTarefas';

describe('useContadorDeTarefas', () => {
  it('deve retornar o número correto de tarefas totais', () => {
    const tarefas: Tarefa[] = [
      { id: '1', titulo: 'Tarefa 1', concluida: false },
      { id: '2', titulo: 'Tarefa 2', concluida: false },
      { id: '3', titulo: 'Tarefa 3', concluida: false },
    ];

    const { result } = renderHook(() => useContadorDeTarefas(tarefas));

    expect(result.current.total).toBe(3);
  });

  it('deve retornar o número correto de tarefas concluídas', () => {
    const tarefas: Tarefa[] = [
      { id: '1', titulo: 'Tarefa 1', concluida: true },
      { id: '2', titulo: 'Tarefa 2', concluida: true },
      { id: '3', titulo: 'Tarefa 3', concluida: false },
    ];

    const { result } = renderHook(() => useContadorDeTarefas(tarefas));

    expect(result.current.concluidas).toBe(2);
  });

  it('deve retornar o número correto de tarefas pendentes', () => {
    const tarefas: Tarefa[] = [
      { id: '1', titulo: 'Tarefa 1', concluida: true },
      { id: '2', titulo: 'Tarefa 2', concluida: false },
      { id: '3', titulo: 'Tarefa 3', concluida: false },
    ];

    const { result } = renderHook(() => useContadorDeTarefas(tarefas));

    expect(result.current.pendentes).toBe(2);
  });

  it('deve retornar valores zerados com array vazio', () => {
    const { result } = renderHook(() => useContadorDeTarefas([]));

    expect(result.current.total).toBe(0);
    expect(result.current.concluidas).toBe(0);
    expect(result.current.pendentes).toBe(0);
  });

  it('deve atualizar valores quando tarefas mudam', () => {
    const tarefas1: Tarefa[] = [
      { id: '1', titulo: 'Tarefa 1', concluida: false },
    ];

    const { result, rerender } = renderHook(
      ({ tarefas }) => useContadorDeTarefas(tarefas),
      { initialProps: { tarefas: tarefas1 } }
    );

    expect(result.current.total).toBe(1);
    expect(result.current.pendentes).toBe(1);

    const tarefas2: Tarefa[] = [
      { id: '1', titulo: 'Tarefa 1', concluida: true },
      { id: '2', titulo: 'Tarefa 2', concluida: false },
    ];

    rerender({ tarefas: tarefas2 });

    expect(result.current.total).toBe(2);
    expect(result.current.concluidas).toBe(1);
    expect(result.current.pendentes).toBe(1);
  });

  it('deve retornar um objeto com as propriedades total, concluidas e pendentes', () => {
    const tarefas: Tarefa[] = [
      { id: '1', titulo: 'Tarefa 1', concluida: false },
    ];

    const { result } = renderHook(() => useContadorDeTarefas(tarefas));

    expect(result.current).toHaveProperty('total');
    expect(result.current).toHaveProperty('concluidas');
    expect(result.current).toHaveProperty('pendentes');
  });

  it('deve contar corretamente quando todas as tarefas estão concluídas', () => {
    const tarefas: Tarefa[] = [
      { id: '1', titulo: 'Tarefa 1', concluida: true },
      { id: '2', titulo: 'Tarefa 2', concluida: true },
    ];

    const { result } = renderHook(() => useContadorDeTarefas(tarefas));

    expect(result.current.total).toBe(2);
    expect(result.current.concluidas).toBe(2);
    expect(result.current.pendentes).toBe(0);
  });
});
