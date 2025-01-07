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
        <table className="mb-4 border-2 border-black">
            <tr>
                <td>Data: {data.date}</td>
                <td>Revenue: ${insertComma(data.revenue)}</td>
                <td>Net Income: ${insertComma(data.netIncome)}</td>
            </tr>
            <tr>
                <td>Gross Profit: ${insertComma(data.grossProfit)}</td>
                <td>EPS (Earnings Per Share): ${insertComma(data.eps)}</td>
                <td>Operating Income: ${insertComma(data.operatingIncome)}</td>
            </tr>
        </table>
    ));

    useEffect(() => {
        let url = "https://financialmodelingprep.com/api/v3/income-statement/AAPL?period=annual&apikey=";
        let apiKey = process.env.REACT_APP_API_KEY;

        // fetch(url + apiKey)
        //     .then(res => res.json())
        //     .then(output => {
        //         setListings(output);
        //     })
        //     .catch(err => console.error("Error", err));

    }, [sort, filter]);

    return (
        <main className="m-4">
            {listingsElements}
        </main>
    );
}