import React from 'react';
import { render, screen } from '@testing-library/react';
import { NotFound } from '../components';

describe('NotFound.js', () => {
  test('Verifica se contém um heading `h2` `Page requested not found 😭`', () => {
    render(<NotFound />);

    const notFond = screen.getByRole('heading', {
      name: /Page requested not found/i,
      level: 2,
    });
    expect(notFond).toBeInTheDocument();
  });

  test('Teste se página mostra a imagem `https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif`.', () => {
    render(<NotFound />);

    const error404Gif = screen.getByRole('img');
    expect(error404Gif).toContain('https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
