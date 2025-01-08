import React, { useState } from 'react';
import Header from "./components/Header";
import FilterPanel from "./components/FilterPanel";
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
                <FilterPanel
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
