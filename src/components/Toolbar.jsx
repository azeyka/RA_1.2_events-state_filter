import React from 'react'
import PropTypes from 'prop-types'


function Toolbar(props) {
    const {filters, selected, onSelectFilter} = props;

    return (
        <div className='filters'>
            {filters.map(filter => (
                <button
                    className={filter === selected ? 'selected' : ''}
                    onClick={() => onSelectFilter(filter)}
                    key={filter}>
                        {filter}
                </button>
            ))}
        </div>
    );
};

export default Toolbar

Toolbar.propTypes = {
    filters: PropTypes.instanceOf(Object).isRequired,
    selected: PropTypes.string.isRequired,
    onSelectFilter: PropTypes.instanceOf(Function).isRequired,
};