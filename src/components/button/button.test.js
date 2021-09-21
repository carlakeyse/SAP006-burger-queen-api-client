import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import Button from './index';

it('deve renderizar um botão com texto indicado', () => {
    const texto = 'click'
    render(<Button>{texto}</Button>)
    const btn = screen.getAllByText(texto)

    expect(btn).toBeInTheDocument();
})

it('deve disparar uma função de click recebida via prop', () => {
    const texto = 'click'
    const onClick = jest.fn();
    render(<Button onClick={onClick}>{texto}</Button>);
  
    expect(onClick).toHaveBeenCalledTimes(0);
    user.click(screen.getAllByText(texto));
    expect(onClick).toHaveBeenCalledTimes(1);
});
