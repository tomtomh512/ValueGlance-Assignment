import React, { useEffect, useState } from 'react';

function insertComma(value) {
    return new Intl.NumberFormat().format(value);
}

export default function Listings(props) {
    const { sort, filter } = props;

    const [listings, setListings] = useState([]);

    const listingsElements = listings.map((data, index) => (
        <tr key={index}>
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
        <main className="m-4 text-center text-2xl flex-1">
            <table className="w-full text-xl p-2 text-center border-customBlue">
                <thead>
                    <tr>
                        <th className="text-2xl">Date</th>
                        <th className="text-2xl">Revenue</th>
                        <th className="text-2xl">Net Income</th>
                        <th className="text-2xl">Gross Profit</th>
                        <th className="text-2xl">EPS</th>
                        <th className="text-2xl">Operating Income</th>
                    </tr>
                </thead>
                <tbody>
                    {listingsElements}
                </tbody>
            </table>
        </main>
    );
}