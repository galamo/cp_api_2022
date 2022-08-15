import React from 'react';
import { calcTotalPopulation } from "./index"

describe('Test calcTotalPopulation', () => {
    test('Calc correct sum', () => {
        const dummyCountries = [{ population: 10 }, { population: 20 }, { population: 30 }];
        const result = calcTotalPopulation(dummyCountries)
        expect(result).toBe(60)
    })
    test('Calc result as number', () => {
        const dummyCountries = [{ population: 10 }, { population: 20 }, { population: 30 }];
        const result = calcTotalPopulation(dummyCountries)
        expect(typeof result).toBe("number")
    })
    test('Calc - population null', () => {
        const dummyCountries = [{ population: null }, { population: 20 }, { population: 30 }];
        const result = calcTotalPopulation(dummyCountries)
        expect(result).toBe(50)
    })
    test('Calc Population string', () => {
        const dummyCountries = [{ population: null }, { population: "20" }, { population: 30 }];
        const result = calcTotalPopulation(dummyCountries)
        expect(result).toBe(50)
    })
});

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
