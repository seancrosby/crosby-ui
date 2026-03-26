import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Footer } from './Footer';

describe('Footer', () => {
  it('renders footer text', () => {
    render(<Footer text="Test Footer" />);
    expect(screen.getByText('Test Footer')).toBeInTheDocument();
  });
});
