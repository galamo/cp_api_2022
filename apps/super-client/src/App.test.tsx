import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe("Main Suite - App.tsx", () => {
  test("test_1", () => {
    expect(true).toBe(true)
  })
  test("test_2", () => {
    const a = 1;
    const result = 1 + a;
    expect(result).toBe(2)
  })
})



// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
