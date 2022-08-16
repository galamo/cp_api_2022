import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { act } from 'react-dom/test-utils';

describe("Main Suite - App.tsx", () => {
  test("test_1", () => {
    expect(true).toBe(true)
  })
  test("test_2", () => {
    const a = 1;
    const result = 1 + a;
    expect(result).toBe(2)
  })

  test("Render App", () => {
    render(<App />)
    const routeToCountriesReports = screen.getByText("COUNTRIES REPORTS")
    expect(routeToCountriesReports).toBeInTheDocument()
    act(() => {
      routeToCountriesReports.click()
    })
    // const testHeaderw = screen.getByText("This Data is updated")
    // expect(testHeader).toBeInTheDocument()
  })



})




