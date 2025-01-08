import React, { useEffect, useState } from 'react';

function insertComma(value) {
    return new Intl.NumberFormat().format(value);
}

export default function Listings(props) {
    const { filter } = props;

    const [sort, setSort] = useState("Sort");
    const [listings, setListings] = useState([]);

    // Apply sorting and filtering
    const processedListings = listings
        .filter((data) => {
            // Apply filter conditions
            const year = parseInt(data.date.split("-")[0], 10);
            const revenue = parseFloat(data.revenue);
            const netIncome = parseFloat(data.netIncome);

            return (
                (!filter.startYear || year >= parseInt(filter.startYear, 10)) &&
                (!filter.endYear || year <= parseInt(filter.endYear, 10)) &&
                (!filter.revenueMin || revenue >= parseFloat(filter.revenueMin)) &&
                (!filter.revenueMax || revenue <= parseFloat(filter.revenueMax)) &&
                (!filter.netIncomeMin || netIncome >= parseFloat(filter.netIncomeMin)) &&
                (!filter.netIncomeMax || netIncome <= parseFloat(filter.netIncomeMax))
            );
        })
        .sort((a, b) => {
            // Apply sorting conditions
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

    const handleSortChange = (event) => {
        const { value } = event.target;
        setSort(value);
    };

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

            <br/>

            <table className="w-full text-xl p-2 text-center">
                <thead className="text-2xl">
                <tr className="bg-gray-300">
                    <th>Date</th>
                    <th>Revenue</th>
                    <th>Net Income</th>
                    <th>Gross Profit</th>
                    <th>EPS</th>
                    <th>Operating Income</th>
                </tr>
                </thead>
                <tbody className="text-xl">{listingsElements}</tbody>
            </table>

        </main>
    );
}
