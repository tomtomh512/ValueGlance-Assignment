import React from 'react';

export default function FilterSortPanel(props) {
    const { sort, filter, onSortChange, onFilterChange } = props;

    const handleSortChange = (event) => {
        const {value} = event.target;
        onSortChange(value);
    };

    const handleFilterChange = (event) => {
        const { name, value } = event.target;
        onFilterChange(name, value);
    };

    return (
        <main className="m-4">
            <div>
                <label>Sort:</label>
                <select value={sort} onChange={handleSortChange}>
                    <option value="Choose">Choose</option>
                    <option value="Date (Ascending)">Date (Ascending)</option>
                    <option value="Date (Descending)">Date (Descending)</option>
                    <option value="Revenue (Ascending)">Revenue (Ascending)</option>
                    <option value="Revenue (Descending)">Revenue (Descending)</option>
                    <option value="Net Income (Ascending)">Net Income (Ascending)</option>
                    <option value="Net Income (Descending)">Net Income (Descending)</option>
                </select>
            </div>

            <br />

            <div>
                <label>Date Range:</label>
                <br />
                <input
                    type="text"
                    name="dateStart"
                    placeholder="Start Date"
                    value={filter.dateStart}
                    onChange={handleFilterChange}
                />
                <input
                    type="text"
                    name="dateEnd"
                    placeholder="End Date"
                    value={filter.dateEnd}
                    onChange={handleFilterChange}
                />
            </div>

            <div>
                <label>Revenue Range:</label>
                <br />
                <input
                    type="number"
                    name="revenueMin"
                    placeholder="Min Revenue"
                    value={filter.revenueMin}
                    onChange={handleFilterChange}
                />
                <input
                    type="number"
                    name="revenueMax"
                    placeholder="Max Revenue"
                    value={filter.revenueMax}
                    onChange={handleFilterChange}
                />
            </div>

            <div>
                <label>Net Income Range:</label>
                <br />
                <input
                    type="number"
                    name="netIncomeMin"
                    placeholder="Min Net Income"
                    value={filter.netIncomeMin}
                    onChange={handleFilterChange}
                />
                <input
                    type="number"
                    name="netIncomeMax"
                    placeholder="Max Net Income"
                    value={filter.netIncomeMax}
                    onChange={handleFilterChange}
                />
            </div>
        </main>
    );
}