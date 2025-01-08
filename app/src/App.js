import React, { useState } from 'react';
import Header from "./components/Header";
import FilterSortPanel from "./components/FilterSortPanel";
import Listings from "./components/Listings";

export default function App() {
    const [filter, setFilter] = useState({
        startYear: "",
        endYear: "",
        revenueMin: "",
        revenueMax: "",
        netIncomeMin: "",
        netIncomeMax: "",
    });

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
                    filter={filter}
                    onFilterChange={handleFilterChange}
                />
                <Listings
                    filter={filter}
                />
            </section>
        </main>
    );
}
