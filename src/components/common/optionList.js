import React from 'react';

const OptionList = ( {name, options, onSelect} ) => {
    return (
        <ul className='options'>
            {
                options.map( (eachOption, index) => (
                    <li key={index}>
                        <input
                            name={name} 
                            type='radio' 
                            id={`${eachOption.name}`} 
                            value={eachOption.name}
                            onChange={() => onSelect(name, eachOption) }
                        />
                        <label htmlFor={eachOption.name}>{ eachOption.value }</label>
                    </li>
                ))
            }
        </ul>
    )
}

export default OptionList;