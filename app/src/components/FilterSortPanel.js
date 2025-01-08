import React from 'react';
import FilterInputs from './FilterInputs';

export default function FilterSortPanel(props) {
    const { sort, filter, onSortChange, onFilterChange } = props;

    const handleSortChange = (event) => {
        const { value } = event.target;
        onSortChange(value);
    };

    const handleFilterChange = (event) => {
        const { name, value } = event.target;
        onFilterChange(name, value);
    };

    return (
        <main className="m-4 p-4 bg-customDarkBlue rounded-[14px] text-xl">
            <div className="my-4 sm:text-left text-center">
                <label className="font-bold text-white text-center block text-2xl">Sort:</label>

                <select
                    value={sort}
                    onChange={handleSortChange}
                    className="rounded-lg px-2 py-1 mt-2"
                >
                    <option value="Choose">Choose</option>
                    <option value="Date (Ascending)">Date (Ascending)</option>
                    <option value="Date (Descending)">Date (Descending)</option>
                    <option value="Revenue (Ascending)">Revenue (Ascending)</option>
                    <option value="Revenue (Descending)">Revenue (Descending)</option>
                    <option value="Net Income (Ascending)">Net Income (Ascending)</option>
                    <option value="Net Income (Descending)">Net Income (Descending)</option>
                </select>
            </div>

            <hr className="border-white"/>
            <br />

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
