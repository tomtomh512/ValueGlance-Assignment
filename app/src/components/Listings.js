import React, { useEffect, useState } from 'react';

export default function Listings(props) {
    const { sort, filter } = props;

    // Initialize state for listings
    const [listings, setListings] = useState([]);

    const listingsElements = listings.map((data, index) => (
        <div key={index} className="mb-4">
            Data: {data.date} <br/>
            Revenue: ${new Intl.NumberFormat().format(data.revenue)} <br/>
            Net Income: ${new Intl.NumberFormat().format(data.netIncome)} <br/>
            Gross Profit: ${new Intl.NumberFormat().format(data.grossProfit)} <br/>
            EPS (Earnings Per Share): ${data.eps.toLocaleString()} <br />
            Operating Income: ${new Intl.NumberFormat().format(data.operatingIncome)}
        </div>
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
        <main className="m-4">
            {listingsElements}
        </main>
    );
}