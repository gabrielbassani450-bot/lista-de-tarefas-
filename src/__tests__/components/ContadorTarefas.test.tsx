import { render, screen } from '@testing-library/react';
import { ContadorTarefas } from '@/components/ContadorTarefas';
import { Tarefa } from '@/hooks/useContadorDeTarefas';

describe('ContadorTarefas', () => {
  it('deve exibir os contadores corretamente', () => {
    const tarefas: Tarefa[] = [
      { id: '1', titulo: 'Tarefa 1', concluida: false },
      { id: '2', titulo: 'Tarefa 2', concluida: true },
      { id: '3', titulo: 'Tarefa 3', concluida: true },
    ];

    render(<ContadorTarefas tarefas={tarefas} />);

    expect(screen.getByTestId('contador-total')).toHaveTextContent('3');
    expect(screen.getByTestId('contador-concluidas')).toHaveTextContent('2');
    expect(screen.getByTestId('contador-pendentes')).toHaveTextContent('1');
  });

  it('deve exibir zero quando não há tarefas', () => {
    render(<ContadorTarefas tarefas={[]} />);

    expect(screen.getByTestId('contador-total')).toHaveTextContent('0');
    expect(screen.getByTestId('contador-concluidas')).toHaveTextContent('0');
    expect(screen.getByTestId('contador-pendentes')).toHaveTextContent('0');
  });

  it('deve atualizar contadores quando tarefas mudam', () => {
    const { rerender } = render(<ContadorTarefas tarefas={[]} />);

    expect(screen.getByTestId('contador-total')).toHaveTextContent('0');

    const novasTarefas: Tarefa[] = [
      { id: '1', titulo: 'Tarefa 1', concluida: false },
      { id: '2', titulo: 'Tarefa 2', concluida: false },
    ];

    rerender(<ContadorTarefas tarefas={novasTarefas} />);

    expect(screen.getByTestId('contador-total')).toHaveTextContent('2');
    expect(screen.getByTestId('contador-pendentes')).toHaveTextContent('2');
  });

  it('deve renderizar todos os contadores', () => {
    const tarefas: Tarefa[] = [
      { id: '1', titulo: 'Tarefa 1', concluida: false },
    ];

    render(<ContadorTarefas tarefas={tarefas} />);

    expect(screen.getByText('Total')).toBeInTheDocument();
    expect(screen.getByText('Concluídas')).toBeInTheDocument();
    expect(screen.getByText('Pendentes')).toBeInTheDocument();
  });
});
