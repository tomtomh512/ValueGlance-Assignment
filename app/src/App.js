import React, { useState } from 'react';
import Header from "./components/Header";
import FilterSortPanel from "./components/FilterSortPanel";
import Listings from "./components/Listings";

export default function App() {
    const [sort, setSort] = useState("Choose");

    const [filter, setFilter] = useState({
        startYear: "",
        endYear: "",
        revenueMin: 0,
        revenueMax: 100,
        netIncomeMin: 0,
        netIncomeMax: 100,
    });

    const handleSortChange = (value) => {
        setSort(value);
    };

    const handleFilterChange = (name, value) => {
        setFilter((prevFilter) => ({
            ...prevFilter,
            [name]: value,
        }));
    };

    return (
        <main className="font-montserrat">
            <Header />
            <section className="flex flex-col md:flex-row">
                <FilterSortPanel
                    sort={sort}
                    filter={filter}
                    onSortChange={handleSortChange}
                    onFilterChange={handleFilterChange}
                />
                <Listings
                    sort={sort}
                    filter={filter}
                />
            </section>
            {filter.netIncomeMax}
        </main>
    );
}
