import React, { useEffect, useState } from 'react';

function insertComma(value) {
    if (typeof value === 'number') {
        return new Intl.NumberFormat().format(value);
    }
    return value; // Return the value as-is if it's not a number
}

export default function Listings(props) {
    const { sort, filter } = props;

    // Initialize state for listings
    const [listings, setListings] = useState([]);

    const listingsElements = listings.map((data) => (
        <tr>
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
            .then(res => res.json())
            .then(output => {
                setListings(output);
            })
            .catch(err => console.error("Error", err));

    }, [sort, filter]);

    return (
        <main className="m-4 text-center text-xl flex-1">
            <table className="w-full text-xl p-2 text-center">
                <tr>
                    <th>Date</th>
                    <th>Revenue</th>
                    <th>Net Income</th>
                    <th>Gross Profit</th>
                    <th>EPS</th>
                    <th>Operating Income</th>
                </tr>
                {listingsElements}
            </table>
        </main>
    );
}