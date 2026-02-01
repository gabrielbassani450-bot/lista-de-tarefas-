import { render, screen, fireEvent } from '@testing-library/react';
import { ListaTarefas } from '@/components/ListaTarefas';
import { Tarefa } from '@/hooks/useContadorDeTarefas';

describe('ListaTarefas', () => {
  const tarefasMock: Tarefa[] = [
    { id: '1', titulo: 'Tarefa 1', concluida: false },
    { id: '2', titulo: 'Tarefa 2', concluida: true },
    { id: '3', titulo: 'Tarefa 3', concluida: false },
  ];

  it('deve renderizar a lista de tarefas', () => {
    const mockToggle = jest.fn();
    render(
      <ListaTarefas tarefas={tarefasMock} onToggleTarefa={mockToggle} />
    );

    const lista = screen.getByTestId('lista-tarefas');
    expect(lista).toBeInTheDocument();
  });

  it('deve renderizar todas as tarefas', () => {
    const mockToggle = jest.fn();
    render(
      <ListaTarefas tarefas={tarefasMock} onToggleTarefa={mockToggle} />
    );

    expect(screen.getByText('Tarefa 1')).toBeInTheDocument();
    expect(screen.getByText('Tarefa 2')).toBeInTheDocument();
    expect(screen.getByText('Tarefa 3')).toBeInTheDocument();
  });

  it('deve aplicar classe de concluída na tarefa marcada', () => {
    const mockToggle = jest.fn();
    render(
      <ListaTarefas tarefas={tarefasMock} onToggleTarefa={mockToggle} />
    );

    const tarefa2Texto = screen.getByText('Tarefa 2');
    expect(tarefa2Texto).toHaveClass('line-through');
  });

  it('deve chamar onToggleTarefa quando o checkbox é clicado', () => {
    const mockToggle = jest.fn();
    render(
      <ListaTarefas tarefas={tarefasMock} onToggleTarefa={mockToggle} />
    );

    const checkbox1 = screen.getByTestId('checkbox-1') as HTMLInputElement;
    fireEvent.click(checkbox1);

    expect(mockToggle).toHaveBeenCalledWith('1');
  });

  it('deve exibir mensagem quando não há tarefas', () => {
    const mockToggle = jest.fn();
    render(<ListaTarefas tarefas={[]} onToggleTarefa={mockToggle} />);

    expect(
      screen.getByText('Nenhuma tarefa adicionada ainda.')
    ).toBeInTheDocument();
  });

  it('deve refletir o estado de checked dos checkboxes corretamente', () => {
    const mockToggle = jest.fn();
    render(
      <ListaTarefas tarefas={tarefasMock} onToggleTarefa={mockToggle} />
    );

    const checkbox1 = screen.getByTestId('checkbox-1') as HTMLInputElement;
    const checkbox2 = screen.getByTestId('checkbox-2') as HTMLInputElement;

    expect(checkbox1.checked).toBe(false);
    expect(checkbox2.checked).toBe(true);
  });
});
