import { render, screen } from '@testing-library/react';
import CreateDoc from './index';

test('loads and displays greeting', async () => {
  render(<CreateDoc />);

  const input = screen.getByText('Test button')

  expect(input).toHaveTextContent('Test button')
})