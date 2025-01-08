import React from 'react';
import FilterInputs from './FilterInputs';

export default function FilterSortPanel(props) {
    const { filter, onFilterChange } = props;

    const handleFilterChange = (event) => {
        const { name, value } = event.target;
        onFilterChange(name, value);
    };

    return (
        <main className="m-4 p-4 bg-customDarkBlue rounded-[14px] text-xl">
            <label className="font-bold text-white text-center block text-2xl">Filter:</label>

            <FilterInputs
                name="Year" nameMin="startYear" nameMax="endYear"
                placeholderMin="Start Year" placeholderMax="End Year"
                valueMin={filter.startYear} valueMax={filter.endYear}
                onChange={handleFilterChange}
            />

            <FilterInputs
                name="Revenue ($)" nameMin="revenueMin" nameMax="revenueMax"
                placeholderMin="Min Revenue" placeholderMax="Max Revenue"
                valueMin={filter.revenueMin} valueMax={filter.revenueMax}
                onChange={handleFilterChange}
            />

            <FilterInputs
                name="Net Income ($)" nameMin="netIncomeMin" nameMax="netIncomeMax"
                placeholderMin="Min Net Income" placeholderMax="Max Net Income"
                valueMin={filter.netIncomeMin} valueMax={filter.netIncomeMax}
                onChange={handleFilterChange}
            />
        </main>
    );
}
