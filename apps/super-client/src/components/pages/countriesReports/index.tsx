import React, { useEffect, useState, useMemo, useContext } from "react"
import axios from "axios"
import { HeaderApplication } from "../../ui-components/header";
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { GlobalState } from "../../../App";
import { negate } from "lodash";




const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
];


const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const MemoizedPieChart = React.memo(PopulationPieChart)
export default function CountriesReportsPage() {
    const initialCountry: string = ""
    const countriesInitialState: Array<any> = []
    const [countries, setCountries] = useState(countriesInitialState)
    const [isLoading, setIsLoading] = useState(false)
    const globalState = useContext(GlobalState)
    const cancelToken = axios.CancelToken;
    const source = cancelToken.source()

    const result = useMemo(() => {
        return calcTotalPopulation(countries)
    }, [JSON.stringify(countries)])

    const adaptedData = adaptDataPieChart(result)
    console.log(adaptedData)
    useEffect(() => {
        console.log("React Countries component useEffect")
        async function getCountries() {
            setIsLoading(true)
            try {
                const { data } = await axios.get(`http://localhost:2200/countries-delay`, {
                    cancelToken: source.token
                })
                console.log(data.data)
                setCountries(data.data)
                setIsLoading(false)
            } catch (ex) {
                if (axios.isCancel(ex)) {
                    console.log("successfully aborted")
                } else {
                    console.log("handle a real error!")
                }
                setIsLoading(false)
            }
        }
        getCountries()
        return () => {
            console.log("React Countries component cleanup...")
            source.cancel()
        }

    }, [])

    const countriesArray: any = Array.isArray(countries) && countries
    return <div>
        <div>
            <HeaderApplication text={"Countries Page"} color={"black"} />
        </div>
        <div style={{ width: "500px", height: "100px", margin: "auto" }}>

            <MemoizedPieChart pieChartGlobalSettings={globalState.pieChartSettings} adaptedData={adaptedData} />
            <MemoizedPieChart pieChartGlobalSettings={globalState.pieChartSettings} adaptedData={data} />
            <MemoizedPieChart pieChartGlobalSettings={globalState.pieChartSettings} adaptedData={adaptedData} />


        </div>

    </div>
}

function PopulationPieChart(props: { pieChartGlobalSettings: string, adaptedData: Array<{ name: string, value: number | any, }> }) {

    return (<PieChart width={500} height={400}>
        <Pie
            data={props.adaptedData}
            cx="50%"
            cy="50%"
            labelLine={true}
            label={(pr: any) => { return renderCustomizedLabel({ ...pr, pieChartGlobalSettings: props.pieChartGlobalSettings }) }}
            outerRadius={200}
            fill="#8884d8"
            dataKey="value"

        >
            {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
        </Pie>
    </PieChart>)
}


function calcTotalPopulation(countries: Array<any>): number {
    console.log("Long Calculation executed")
    return countries.reduce((regionsObj, currentCountry: any) => {
        const { region, population } = currentCountry
        if (!region || !population) return regionsObj
        if (regionsObj[region]) {
            return { ...regionsObj, [region]: regionsObj[region] + Number(population || 0) }
        } else {
            return { ...regionsObj, [region]: Number(population || 0) }
        }
    }, {})
}

const adaptDataPieChart = (obj: any) => {
    return Object.entries(obj).map(([key, value]) => {
        return { name: key, value }
    })
}

const renderCustomizedLabel = ({ cx, cy, midAngle, name, innerRadius, outerRadius, percent, index, label, value, pieChartGlobalSettings, ...rest }: any) => {
    console.log("render customized", rest)

    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
    const isPrecentage = pieChartGlobalSettings === "precentage";
    return (
        <text x={x} y={y} fill="black" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {isPrecentage ? `${(percent * 100).toFixed(0)}%` : `${name}: ${convertNumberWithCommaDelimiter(value)}`}
        </text>
    );
};

function convertNumberWithCommaDelimiter(n: string) {
    return Number(parseFloat(n).toFixed(0)).toLocaleString('en', {
        minimumFractionDigits: 0
    });
}
