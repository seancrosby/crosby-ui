import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Container } from './Container';

describe('Container', () => {
  it('renders children correctly', () => {
    render(<Container>Test Content</Container>);
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(<Container className="custom-class">Test Content</Container>);
    expect(container.firstChild).toHaveClass('custom-class');
  });
});
