import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Header } from './Header';

describe('Header', () => {
  it('renders logo and subtitle', () => {
    render(<Header logo="Test Logo" subtitle="Test Subtitle" />);
    expect(screen.getByText('Test Logo')).toBeInTheDocument();
    expect(screen.getByText('Test Subtitle')).toBeInTheDocument();
  });
});
