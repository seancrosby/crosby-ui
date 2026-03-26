import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { InputGroup } from './InputGroup';

describe('InputGroup', () => {
  it('renders label and input', () => {
    render(<InputGroup label="Test Label" id="test-id" type="text" value="" onChange={() => {}} />);
    expect(screen.getByLabelText('Test Label')).toBeInTheDocument();
  });

  it('calls onChange when input value changes', () => {
    const handleChange = vi.fn();
    render(<InputGroup label="Test Label" id="test-id" type="text" value="" onChange={handleChange} />);
    const input = screen.getByLabelText('Test Label');
    fireEvent.change(input, { target: { value: 'new value' } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
