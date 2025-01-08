import React, {useEffect, useState} from 'react';
import FilterInputs from './FilterInputs';

export default function FilterPanel(props) {
    const { filter, onFilterChange } = props;

    const [showPanel, setShowPanel] = useState(true);

    const handleFilterChange = (event) => {
        const { name, value } = event.target;
        onFilterChange(name, value);
    };

    const togglePanel = () => {
        setShowPanel((prevShowPanel) => !prevShowPanel); // Toggles the state
    };

    const handleResize = () => {
        if (window.innerWidth > 640) {
            setShowPanel(true);
        }
    };
    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <main className="m-4 p-4 bg-customDarkBlue rounded-[14px] text-xl">

            <span className="text-left text-white font-bold cursor-pointer text-lg block sm:hidden" onClick={togglePanel}>
                {showPanel ? 'Hide Filters ▲' : 'Show Filters ▼'}
            </span>

            {showPanel ? (
                <>
                    <label className="font-bold text-white block text-2xl mt-1">
                        Filter:
                    </label>

                    <FilterInputs
                        name="Year"
                        nameMin="startYear"
                        nameMax="endYear"
                        placeholderMin="Start Year"
                        placeholderMax="End Year"
                        valueMin={filter.startYear}
                        valueMax={filter.endYear}
                        onChange={handleFilterChange}
                    />

                    <FilterInputs
                        name="Revenue ($)"
                        nameMin="revenueMin"
                        nameMax="revenueMax"
                        placeholderMin="Min Revenue"
                        placeholderMax="Max Revenue"
                        valueMin={filter.revenueMin}
                        valueMax={filter.revenueMax}
                        onChange={handleFilterChange}
                    />

                    <FilterInputs
                        name="Net Income ($)"
                        nameMin="netIncomeMin"
                        nameMax="netIncomeMax"
                        placeholderMin="Min Net Income"
                        placeholderMax="Max Net Income"
                        valueMin={filter.netIncomeMin}
                        valueMax={filter.netIncomeMax}
                        onChange={handleFilterChange}
                    />
                </>
            ) : null}
        </main>
    );
}
