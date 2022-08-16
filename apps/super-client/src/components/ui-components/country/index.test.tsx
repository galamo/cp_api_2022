import React from 'react';
import { render, screen } from '@testing-library/react';
import CountryCard from '.';
import { BrowserRouter } from 'react-router-dom';
import { act } from 'react-dom/test-utils';

describe("Country Card Component", () => {
    test("Render Card", () => {
        render(<BrowserRouter><CountryCard countryName='TEST_COUNTRY' flag='TEST_FLAG' region='TEST_REGION' /></BrowserRouter>)
        const testCountry = screen.getByText("TEST_COUNTRY")
        const testRegion = screen.getByText("TEST_REGION")
        expect(testCountry).toBeInTheDocument()
        expect(testRegion).toBeInTheDocument()
        // act(() => {
        //     testCountry.click()
        // })
        // const testHeader = screen.getByText("Country: Israel")
        // expect(testHeader).toBeInTheDocument()
    })
})