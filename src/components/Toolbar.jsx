import React from 'react'

function Toolbar(props) {
    const {filters, selected, onSelectFilter} = props;

    return (
        <div className='filters'>
            {filters.map(filter => {
                if (filter === selected){
                    return <button onClick={event => onSelectFilter(event.currentTarget.innerHTML)} className='selected' key={filter}>{filter}</button>
                };
                
                return <button onClick={event => onSelectFilter(event.currentTarget.innerHTML)} key={filter}>{filter}</button>;
            })}
        </div>
    );
};

export default Toolbar
