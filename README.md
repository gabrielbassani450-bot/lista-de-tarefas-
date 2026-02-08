# 📝 Aplicação de Listagem de Tarefas - Next.js 16 com Testes Unitários

Uma aplicação moderna de gerenciamento de tarefas desenvolvida com Next.js 16, TypeScript e um suite completo de testes unitários usando Jest e React Testing Library.

## 🎯 Objetivo

Demonstrar a implementação prática de conceitos sobre testes unitários em Next.js 16, incluindo:

- ✅ Componentes reutilizáveis e testáveis
- ✅ Server Components e Client Components
- ✅ Hooks personalizados com testes isolados
- ✅ App Router (Nova arquitetura do Next.js)
- ✅ Testes com Jest e React Testing Library

## 🌐 Deploy

- Site publicado: https://lista-de-tarefas-steel-eight.vercel.app

## 🚀 Funcionalidades

### Aplicação
- **Exibir lista de tarefas** - Carregadas de dados simulados (como se fosse uma API)
- **Adicionar novas tarefas** - Através de um formulário controlado
- **Marcar tarefas como concluídas** - Alterar status com checkbox
- **Contador de tarefas** - Exibir total, concluídas e pendentes em tempo real

### Testes
- **23 testes unitários** passando com sucesso
- **Cobertura completa** dos componentes principais
- **Testes isolados** do hook personalizado
- **Testes de integração** dos componentes

## 📋 Estrutura do Projeto

```
todo-app/
├── src/
│   ├── __tests__/
│   │   ├── components/
│   │   │   ├── NovaTarefa.test.tsx        # Testes do formulário
│   │   │   ├── ListaTarefas.test.tsx      # Testes da lista
│   │   │   └── ContadorTarefas.test.tsx   # Testes do contador
│   │   └── hooks/
│   │       └── useContadorDeTarefas.test.ts # Testes do hook
│   ├── components/
│   │   ├── NovaTarefa.tsx                 # Componente formulário
│   │   ├── ListaTarefas.tsx               # Componente lista
│   │   └── ContadorTarefas.tsx            # Componente contador
│   ├── hooks/
│   │   └── useContadorDeTarefas.ts        # Hook personalizado
│   └── data/
│       └── tarefas.ts                     # Dados simulados
├── app/
│   └── page.tsx                           # Server Component principal
├── jest.config.js                         # Configuração Jest
├── jest.setup.ts                          # Setup do Jest
├── tsconfig.json                          # Configuração TypeScript
├── package.json
└── README.md
```

## 🛠️ Tecnologias Utilizadas

- **Next.js 16** - Framework React com App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Jest** - Test runner
- **React Testing Library** - Testing utilities
- **ESLint** - Linting

## 📦 Pré-requisitos

- Node.js 18+ (recomendado 20+)
- npm 9+ ou yarn

## 🔧 Instalação

1. **Clone o repositório**
   ```bash
   git clone <seu-repositorio-url>
   cd todo-app
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

## ▶️ Como Executar

### Modo de Desenvolvimento
```bash
npm run dev
```
A aplicação estará disponível em [http://localhost:3000](http://localhost:3000)

### Build para Produção
```bash
npm run build
npm start
```

## 🧪 Testes

### Executar todos os testes
```bash
npm test
```

### Modo watch (reexecutar ao salvar)
```bash
npm run test:watch
```

### Cobertura de testes
```bash
npm run test:coverage
```

## 📊 Resultados dos Testes

```
PASS  src/__tests__/hooks/useContadorDeTarefas.test.ts
PASS  src/__tests__/components/ContadorTarefas.test.tsx
PASS  src/__tests__/components/ListaTarefas.test.tsx
PASS  src/__tests__/components/NovaTarefa.test.tsx

Test Suites: 4 passed, 4 total
Tests:       23 passed, 23 total
```

## 🧩 Componentes

### `NovaTarefa`
Componente Client que gerencia o formulário para adicionar novas tarefas.

**Testes:**
- ✅ Renderização do input e botão
- ✅ Atualização do valor do input
- ✅ Submissão do formulário com valor válido
- ✅ Limpeza do input após adição
- ✅ Validação de campos vazios
- ✅ Trimming de espaços em branco

### `ListaTarefas`
Componente Client que exibe a lista de tarefas e permite marcar como concluídas.

**Testes:**
- ✅ Renderização da lista completa
- ✅ Aplicação de estilos de conclusão
- ✅ Toggle de status das tarefas
- ✅ Mensagem quando não há tarefas
- ✅ Estado de checkboxes

### `ContadorTarefas`
Componente Client que exibe contadores atualizados em tempo real.

**Testes:**
- ✅ Cálculo correto de totais
- ✅ Cálculo de concluídas e pendentes
- ✅ Atualização dinâmica
- ✅ Valores zerados quando vazio

## 🎣 Hook `useContadorDeTarefas`

Hook personalizado que calcula estatísticas sobre as tarefas.

**Retorna:**
```typescript
{
  total: number;      // Total de tarefas
  concluidas: number; // Tarefas concluídas
  pendentes: number;  // Tarefas pendentes
}
```

**Testes:**
- ✅ Cálculo isolado de cada métrica
- ✅ Atualização quando tarefas mudam
- ✅ Valores corretos com arrays vazios
- ✅ Tipagem correta do retorno

## 📝 Exemplos de Testes

### Teste do Componente
```typescript
it('deve chamar onAdicionarTarefa quando o formulário é enviado', async () => {
  const mockOnAdicionar = jest.fn();
  render(<NovaTarefa onAdicionarTarefa={mockOnAdicionar} />);

  const input = screen.getByTestId('input-tarefa');
  await userEvent.type(input, 'Nova tarefa');
  fireEvent.click(screen.getByTestId('btn-adicionar'));

  expect(mockOnAdicionar).toHaveBeenCalledTimes(1);
});
```

### Teste do Hook
```typescript
it('deve retornar o número correto de tarefas concluídas', () => {
  const tarefas = [
    { id: '1', titulo: 'T1', concluida: true },
    { id: '2', titulo: 'T2', concluida: false },
  ];

  const { result } = renderHook(() => useContadorDeTarefas(tarefas));

  expect(result.current.concluidas).toBe(1);
});
```

## 🔍 Verificação de Cobertura

Para visualizar a cobertura de testes:
```bash
npm run test:coverage
```

Isso gerará um relatório em `coverage/` mostrando quais partes do código estão cobertas pelos testes.

## 💡 Dicas de Desenvolvimento

### Adicionar Novo Teste
1. Crie um arquivo em `src/__tests__/` mantendo a estrutura
2. Use `describe` e `it` para organizar
3. Use `render`, `screen`, `fireEvent` do React Testing Library
4. Para hooks, use `renderHook`

### Estender Funcionalidades
1. Novos componentes devem ser Client Components (`'use client'`)
2. Adicione testes para cada novo componente
3. Use o hook `useContadorDeTarefas` para funcionalidades estatísticas
4. Mantenha o TypeScript strict

## 🚀 Deploy

Este projeto pode ser facilmente deployado no Vercel:

```bash
npm run build
vercel
```

Ou usando qualquer outro provedor que suporte Next.js (Netlify, AWS, etc.).

## 📚 Recursos de Aprendizado

- [Documentação Next.js 15](https://nextjs.org/docs)
- [Jest Documentation](https://jestjs.io/docs/getting-started)
- [React Testing Library](https://testing-library.com/react)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## 📄 Licença

Este projeto é fornecido como material educacional.

## 👤 Autor

Desenvolvido como exercício prático de testes unitários em Next.js 15.

---

**Última atualização:** 1 de fevereiro de 2026
