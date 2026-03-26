import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ResultsList } from './ResultsList';

describe('ResultsList', () => {
  it('renders children', () => {
    render(<ResultsList show={true}><div>Child Content</div></ResultsList>);
    expect(screen.getByText('Child Content')).toBeInTheDocument();
  });
});
