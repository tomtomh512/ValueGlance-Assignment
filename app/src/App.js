import React, { useState } from 'react';
import Header from "./components/Header";
import FilterSortPanel from "./components/FilterSortPanel";
import Listings from "./components/Listings";

export default function App() {
    const [sort, setSort] = useState("Choose");

    const [filter, setFilter] = useState({
        startYear: "",
        endYear: "",
        revenueMin: "",
        revenueMax: "",
        netIncomeMin: "",
        netIncomeMax: "",
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
        <main className="font-montserrat text-center">
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
