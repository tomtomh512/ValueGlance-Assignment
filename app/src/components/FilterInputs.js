import React from 'react';

export default function FilterInputs(props) {
    const { name, nameMin, nameMax, placeholderMin, placeholderMax,valueMin, valueMax, onChange } = props;

    return (
        <div className="mb-4 text-white sm:text-left text-center">
            <label>{name}:</label>
            <br />
            <input
                type="number"
                min="0"
                name={nameMin}
                placeholder={placeholderMin}
                value={valueMin}
                onChange={onChange}
                className="rounded-lg px-2 text-black mt-1 mb-2"
            />
            <br />
            <input
                type="number"
                min="0"
                name={nameMax}
                placeholder={placeholderMax}
                value={valueMax}
                onChange={onChange}
                className="rounded-lg px-2 text-black"
            />
        </div>
    );
}
