import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ResultCard } from './ResultCard';

describe('ResultCard', () => {
  it('renders title and value', () => {
    render(<ResultCard title="Test Title" value="Test Value" tooltip="Test Tooltip" />);
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test Value')).toBeInTheDocument();
  });

  it('renders detail when provided', () => {
    render(<ResultCard title="Test Title" value="Test Value" detail="Test Detail" tooltip="Test Tooltip" />);
    expect(screen.getByText('Test Detail')).toBeInTheDocument();
  });

  it('does not render detail when not provided', () => {
    render(<ResultCard title="Test Title" value="Test Value" tooltip="Test Tooltip" />);
    expect(screen.queryByTestId('test title-detail')).not.toBeInTheDocument();
  });
});
