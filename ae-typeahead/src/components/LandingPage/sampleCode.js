const basic = `import React from 'react';
import Typeahead from '../Typeahead';
    
const countries = [
    "India",
    "Canada",
    "United States"
]

export default function BasicExample() {
    const [selected, setSelected] = React.useState([]);

    return (
        <Typeahead 
            placeholder='Favourite Countries'
            options={countries} 
            selected={selected}
            setSelected={setSelected}
        />
    )
}`

const api = `import React from 'react';
import Typeahead from '../Typeahead';

export default function BasicExample() {
    const [selected, setSelected] = React.useState([]);

    return (
        <Typeahead 
            placeholder='Favourite Countries'
            selected={selected}
            setSelected={setSelected}
            endpoint='https://restcountries.com/v3.1/name/'
            dataKey='name.official'
        />
    )
}`

export default {
    basic,
    api
}




