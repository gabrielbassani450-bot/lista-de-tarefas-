# 📚 Guia de Contribuição

## 🤝 Como Contribuir

Este projeto é educacional e fico feliz em receber contribuições! Aqui está como você pode ajudar:

### 1. Fork e Clone
```bash
# Clone seu fork
git clone https://github.com/seu-usuario/todo-app.git
cd todo-app

# Adicione o repositório original como upstream
git remote add upstream https://github.com/usuario-original/todo-app.git
```

### 2. Crie uma Branch
```bash
git checkout -b feature/sua-funcionalidade
# ou
git checkout -b fix/seu-bug
```

### 3. Faça suas Alterações
- Sempre escreva testes para novas funcionalidades
- Mantenha a cobertura de testes acima de 80%
- Siga o padrão de código existente

### 4. Execute os Testes
```bash
npm test
npm run test:coverage
```

### 5. Commit e Push
```bash
git add .
git commit -m "Descrição clara da sua mudança"
git push origin sua-branch
```

### 6. Abra um Pull Request
- Descreva claramente suas mudanças
- Referencie issues relacionadas
- Aguarde a revisão

## 📝 Padrões de Código

### Componentes
```typescript
'use client'; // se for um Client Component

import { useState } from 'react';

interface MeuComponenteProps {
  titulo: string;
  onAcao: () => void;
}

export function MeuComponente({ titulo, onAcao }: MeuComponenteProps) {
  const [state, setState] = useState('');

  return (
    <div>
      {/* JSX aqui */}
    </div>
  );
}
```

### Testes
```typescript
import { render, screen } from '@testing-library/react';
import { MeuComponente } from '@/components/MeuComponente';

describe('MeuComponente', () => {
  it('deve renderizar com sucesso', () => {
    render(<MeuComponente titulo="Teste" onAcao={jest.fn()} />);
    expect(screen.getByText('Teste')).toBeInTheDocument();
  });
});
```

### Hooks
```typescript
'use client';

import { useState, useEffect } from 'react';

export function useMeuHook(param: string) {
  const [state, setState] = useState('');

  useEffect(() => {
    // lógica
  }, [param]);

  return { state };
}
```

## 🧪 Escrevendo Testes Efetivos

### Use Queries Semânticas
```typescript
// ✅ Bom
screen.getByRole('button', { name: /adicionar/i })
screen.getByLabelText('Email')

// ❌ Evitar
screen.getByTestId('form-button')
```

### Teste o Comportamento, Não Implementação
```typescript
// ✅ Bom
expect(mockOnAdicionar).toHaveBeenCalledWith(expectedData);

// ❌ Evitar
expect(state.value).toBe('algo');
```

## 📋 Checklist para PRs

- [ ] Testes escritos/atualizados
- [ ] Todos os testes passam (`npm test`)
- [ ] Cobertura mantida ou aumentada
- [ ] Documentação atualizada
- [ ] Sem console.log ou código comentado
- [ ] TypeScript sem erros
- [ ] ESLint sem warnings

## 🐛 Reportando Bugs

Use as Issues do GitHub com o template:

```markdown
## Descrição
Descrição clara do bug

## Passos para Reproduzir
1. Faça isto
2. Depois aquilo
3. Observe isso

## Comportamento Esperado
O que deveria acontecer

## Comportamento Atual
O que realmente acontece

## Ambiente
- Node: vX.X.X
- npm: vX.X.X
```

## 💡 Sugerindo Melhorias

Abra uma Issue com o label `enhancement` descrevendo:
- Qual é o problema que você vê?
- Como você gostaria que funcionasse?
- Exemplos de outros projetos que fazem algo semelhante

## ✨ Ideias para Contribuições

- Melhorar cobertura de testes
- Adicionar mais componentes
- Melhorar documentação
- Adicionar E2E tests com Playwright
- Melhorar acessibilidade (a11y)
- Internacionalização (i18n)
- Temas (light/dark mode)
- Persistência de dados (localStorage)

## 📞 Dúvidas?

Abra uma discussion ou crie uma issue com o label `question`.

---

Obrigado por contribuir! 🎉
