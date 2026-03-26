import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { ComputeButton } from './ComputeButton';

describe('ComputeButton', () => {
  it('renders children correctly', () => {
    render(<ComputeButton onClick={() => {}}>Click Me</ComputeButton>);
    expect(screen.getByText('Click Me')).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const handleClick = vi.fn();
    render(<ComputeButton onClick={handleClick}>Click Me</ComputeButton>);
    fireEvent.click(screen.getByText('Click Me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('is disabled when disabled prop is true', () => {
    render(<ComputeButton onClick={() => {}} disabled={true}>Click Me</ComputeButton>);
    expect(screen.getByRole('button')).toBeDisabled();
  });
});
