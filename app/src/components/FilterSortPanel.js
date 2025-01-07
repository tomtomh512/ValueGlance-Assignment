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
        <main className="m-4 p-2 bg-customDarkBlue rounded-[14px] text-xl">
            <div className="my-4 text-center">
                <label className="font-bold text-white">Sort:</label>
                &nbsp;
                <select
                    value={sort} o
                    onChange={handleSortChange}
                    className="rounded-[14px] px-2"
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

            <div className="my-4 text-white">
                <label>Date Range:</label>
                <br/>
                <input
                    type="text"
                    name="startYear"
                    placeholder="Start Year"
                    value={filter.startYear}
                    onChange={handleFilterChange}
                    className="w-2/5 rounded-[14px] px-4 text-black mt-1"
                />
                &nbsp; to &nbsp;
                <input
                    type="text"
                    name="endYear"
                    placeholder="End Year"
                    value={filter.endYear}
                    onChange={handleFilterChange}
                    className="w-2/5 rounded-[14px] px-4 text-black mt-1"
                />
            </div>

            <div className="my-4 text-white">
                <label>Revenue Range:</label>
                <br/>
                <input
                    type="number"
                    name="revenueMin"
                    placeholder="Min Revenue"
                    value={filter.revenueMin}
                    onChange={handleFilterChange}
                    className="w-2/5 rounded-[14px] px-4 text-black mt-1"
                />
                &nbsp; to &nbsp;
                <input
                    type="number"
                    name="revenueMax"
                    placeholder="Max Revenue"
                    value={filter.revenueMax}
                    onChange={handleFilterChange}
                    className="w-2/5 rounded-[14px] px-4 text-black mt-1"
                />
            </div>

            <div className="my-4 text-white">
                <label>Net Income Range:</label>
                <br/>
                <input
                    type="number"
                    name="netIncomeMin"
                    placeholder="Min Net Income"
                    value={filter.netIncomeMin}
                    onChange={handleFilterChange}
                    className="w-2/5 rounded-[14px] px-4 text-black mt-1"
                />
                &nbsp; to &nbsp;
                <input
                    type="number"
                    name="netIncomeMax"
                    placeholder="Max Net Income"
                    value={filter.netIncomeMax}
                    onChange={handleFilterChange}
                    className="w-2/5 rounded-[14px] px-4 text-black"
                />
            </div>
        </main>
    );
}