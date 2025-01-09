import React, { useEffect, useState } from 'react';

// Function to shorten inserting commas into large numbers
function insertComma(value) {
    return new Intl.NumberFormat().format(value);
}

export default function Listings(props) {
    const { filter } = props;

    const [sort, setSort] = useState("Sort");
    const [listings, setListings] = useState([]);

    const handleSortChange = (event) => {
        const { value } = event.target;
        setSort(value);
    };

    const processedListings = listings
        .filter((data) => {
            // Extract year & gets revenue and net income
            const year = parseInt(data.date.split("-")[0], 10);
            const revenue = parseFloat(data.revenue);
            const netIncome = parseFloat(data.netIncome);

            // Get bounds from filter
            const startYearBound = filter.startYear ? parseInt(filter.startYear, 10) : undefined;
            const endYearBound = filter.endYear ? parseInt(filter.endYear, 10) : undefined;
            const revenueMinBound = filter.revenueMin ? parseFloat(filter.revenueMin) : undefined;
            const revenueMaxBound = filter.revenueMax ? parseFloat(filter.revenueMax) : undefined;
            const netIncomeMinBound = filter.netIncomeMin ? parseFloat(filter.netIncomeMin) : undefined;
            const netIncomeMaxBound = filter.netIncomeMax ? parseFloat(filter.netIncomeMax) : undefined;

            return (
                (!startYearBound || year >= startYearBound) && (!endYearBound || year <= endYearBound) &&
                (!revenueMinBound || revenue >= revenueMinBound) && (!revenueMaxBound || revenue <= revenueMaxBound) &&
                (!netIncomeMinBound || netIncome >= netIncomeMinBound) && (!netIncomeMaxBound || netIncome <= netIncomeMaxBound)
            );
        })

        .sort((a, b) => {
            // Apply sorting
            switch (sort) {
                case "Date (Ascending)":
                    return new Date(a.date) - new Date(b.date);
                case "Date (Descending)":
                    return new Date(b.date) - new Date(a.date);
                case "Revenue (Ascending)":
                    return a.revenue - b.revenue;
                case "Revenue (Descending)":
                    return b.revenue - a.revenue;
                case "Net Income (Ascending)":
                    return a.netIncome - b.netIncome;
                case "Net Income (Descending)":
                    return b.netIncome - a.netIncome;
                default:
                    return 0; // No sorting
            }
        });

    // Create elements for listings
    const listingsElements = processedListings.map((data, index) => (
        <tr key={index} className={`${index % 2 !== 0 ? 'bg-gray-300' : ''}`}>
            <td>{data.date}</td>
            <td>${insertComma(data.revenue)}</td>
            <td>${insertComma(data.netIncome)}</td>
            <td>${insertComma(data.grossProfit)}</td>
            <td>${insertComma(data.eps)}</td>
            <td>${insertComma(data.operatingIncome)}</td>
        </tr>
    ));

    useEffect(() => {
        let url = "https://financialmodelingprep.com/api/v3/income-statement/AAPL?period=annual&apikey=";
        let apiKey = process.env.REACT_APP_API_KEY;

        fetch(url + apiKey)
            .then((res) => res.json())
            .then((output) => {
                setListings(output);
            })
            .catch((err) => console.error("Error", err));
    }, []);

    return (
        <main className="m-4 text-2xl flex-1">
            <section className="flex flex-col md:flex-row p-2 font-bold text-3xl">
                <h1> AAPL Annual Income Statements </h1>

                <div className="text-xl flex-1 mt-1 text-center sm:text-right">
                    <select
                        value={sort} onChange={handleSortChange}
                        className=" ml-2 rounded-lg text-xl border-customDarkBlue border-2 font-normal"
                    >
                        <option value="Sort">Sort</option>
                        <option value="Date (Ascending)">Date (Ascending)</option>
                        <option value="Date (Descending)">Date (Descending)</option>
                        <option value="Revenue (Ascending)">Revenue (Ascending)</option>
                        <option value="Revenue (Descending)">Revenue (Descending)</option>
                        <option value="Net Income (Ascending)">Net Income (Ascending)</option>
                        <option value="Net Income (Descending)">Net Income (Descending)</option>
                    </select>
                </div>
            </section>

            <div className="overflow-x-auto mt-4 rounded-lg border border-grey-D9">
                <table className="w-full text-xl p-2 text-center">
                    <thead className="text-lg sm:text-2xl">
                    <tr className="bg-gray-300">
                        <th>Date</th>
                        <th>Revenue</th>
                        <th>Net Income</th>
                        <th>Gross Profit</th>
                        <th>EPS</th>
                        <th>Operating Income</th>
                    </tr>
                    </thead>
                    <tbody className="text-base sm:text-xl">{listingsElements}</tbody>
                </table>
            </div>

        </main>
    );
}
