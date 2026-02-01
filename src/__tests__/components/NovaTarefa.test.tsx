import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { NovaTarefa } from '@/components/NovaTarefa';
import { Tarefa } from '@/hooks/useContadorDeTarefas';

describe('NovaTarefa', () => {
  it('deve renderizar o input e o botão', () => {
    const mockOnAdicionar = jest.fn();
    render(<NovaTarefa onAdicionarTarefa={mockOnAdicionar} />);

    const input = screen.getByTestId('input-tarefa');
    const botao = screen.getByTestId('btn-adicionar');

    expect(input).toBeInTheDocument();
    expect(botao).toBeInTheDocument();
    expect(botao).toHaveTextContent('Adicionar');
  });

  it('deve atualizar o valor do input quando o usuário digita', async () => {
    const mockOnAdicionar = jest.fn();
    render(<NovaTarefa onAdicionarTarefa={mockOnAdicionar} />);

    const input = screen.getByTestId('input-tarefa') as HTMLInputElement;
    await userEvent.type(input, 'Minha nova tarefa');

    expect(input.value).toBe('Minha nova tarefa');
  });

  it('deve chamar onAdicionarTarefa quando o formulário é enviado com um valor válido', async () => {
    const mockOnAdicionar = jest.fn();
    render(<NovaTarefa onAdicionarTarefa={mockOnAdicionar} />);

    const input = screen.getByTestId('input-tarefa');
    const botao = screen.getByTestId('btn-adicionar');

    await userEvent.type(input, 'Nova tarefa importante');
    fireEvent.click(botao);

    expect(mockOnAdicionar).toHaveBeenCalledTimes(1);
    expect(mockOnAdicionar).toHaveBeenCalledWith(
      expect.objectContaining({
        titulo: 'Nova tarefa importante',
        concluida: false,
      })
    );
  });

  it('deve limpar o input após adicionar uma tarefa', async () => {
    const mockOnAdicionar = jest.fn();
    render(<NovaTarefa onAdicionarTarefa={mockOnAdicionar} />);

    const input = screen.getByTestId('input-tarefa') as HTMLInputElement;
    const botao = screen.getByTestId('btn-adicionar');

    await userEvent.type(input, 'Tarefa teste');
    fireEvent.click(botao);

    expect(input.value).toBe('');
  });

  it('deve exibir alerta se tentar enviar sem texto', async () => {
    const mockOnAdicionar = jest.fn();
    const alertSpy = jest.spyOn(window, 'alert').mockImplementation(() => {});

    render(<NovaTarefa onAdicionarTarefa={mockOnAdicionar} />);

    const botao = screen.getByTestId('btn-adicionar');
    fireEvent.click(botao);

    expect(alertSpy).toHaveBeenCalledWith('Por favor, digite uma tarefa');
    expect(mockOnAdicionar).not.toHaveBeenCalled();

    alertSpy.mockRestore();
  });

  it('deve ignorar espaços em branco no início e fim da entrada', async () => {
    const mockOnAdicionar = jest.fn();
    render(<NovaTarefa onAdicionarTarefa={mockOnAdicionar} />);

    const input = screen.getByTestId('input-tarefa');
    const botao = screen.getByTestId('btn-adicionar');

    await userEvent.type(input, '   Tarefa com espaços   ');
    fireEvent.click(botao);

    expect(mockOnAdicionar).toHaveBeenCalledWith(
      expect.objectContaining({
        titulo: 'Tarefa com espaços',
      })
    );
  });
});
