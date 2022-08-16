import React from "react";
import { calcTotalPopulation } from ".";

describe("Test calcTotalPopulation", () => {
    test("Calc Sum Population", () => {
        const dummyData = [{ population: 10 }, { population: 20 }, { population: 30 }]
        const result = calcTotalPopulation(dummyData);
        expect(result).toBe(60)
    })
    test("Calc Result is number", () => {
        const dummyData = [{ population: 10 }, { population: 20 }, { population: 30 }]
        const result = calcTotalPopulation(dummyData);
        expect(typeof result).toBe("number")
    })
    test("Calc Population with null", () => {
        const dummyData = [{ population: null }, { population: 20 }, { population: 30 }]
        const result = calcTotalPopulation(dummyData);
        expect(result).toBe(50)
    })
    test("Calc Population with string", () => {
        const dummyData = [{ population: "10" }, { population: 20 }, { population: 30 }]
        const result = calcTotalPopulation(dummyData);
        expect(result).toBe(60)
    })
    test("Calc Population with string", () => {
        //@ts-ignore
        const result = calcTotalPopulation(null);
        expect(result).toBe(undefined)
    })
})