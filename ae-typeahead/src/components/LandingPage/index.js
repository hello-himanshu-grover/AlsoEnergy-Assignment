import React from 'react'
import './LandingPage.css'
import SampleCode from './sampleCode';
import Typeahead from '../Typeahead';

const countries = [
    "India",
    "Canada",
    "United States"
]

export default function LandingPage() {
    const [selected, setSelected] = React.useState([]);

    return (
        <div className='main-container'>
            <div className='branding p-3'>
                <div>
                    <h1>Demo App</h1>
                    <p>Presenting Typeahead</p>
                </div>
            </div>

            <div className='demo p-3'>
                <div className='container'>
                    <h1>Typeahead</h1>
                    <p>The Typeahead is a normal text input enhanced by a panel of suggested options.</p>

                    <section className='snippet'>
                        <h3>Basic Example</h3>
                        <div className='preview box p-3'>
                            <Typeahead 
                                placeholder='Favourite Countries'
                                options={countries} 
                                selected={selected}
                                setSelected={setSelected}
                            />
                        </div>
                        <div className='codebox box p-3'>
                            <code><pre>{SampleCode.basic}</pre></code>
                        </div>
                    </section>
                    
                    <section className='snippet'>
                        <h3>With API</h3>
                        <div className='preview box p-3'>
                            <Typeahead 
                                placeholder='Favourite Countries'
                                selected={selected}
                                setSelected={setSelected}
                                endpoint='https://restcountries.com/v3.1/name/'
                                dataKey='name.official'
                            />
                        </div>
                        <div className='codebox box p-3'>
                            <code><pre>{SampleCode.api}</pre></code>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}
