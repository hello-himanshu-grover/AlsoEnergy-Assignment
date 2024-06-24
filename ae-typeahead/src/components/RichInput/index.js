import React from 'react'
import Chip from '@mui/material/Chip';
import Input from '@mui/material/Input';

const CustomInput = React.forwardRef((props, ref) => {
    const { selected, handleSearch, handleToggle, handleInputFocus, inputContainerRef, onChange, ...other } = props;
    return (
        <>
            {selected.map((value) => (
                <Chip
                    label={value}
                    sx={{ mr: 1, my: 0.5 }}
                    onDelete={() => handleToggle(value)}
                />
            ))}
            <input
                {...other}
                ref={ref}
                style={{flex: 1}}
                onChange={(e) => handleSearch(e.target.value)}
            />
        </>
    )
})

const RichInput = (props) => {
    const { placeholder, handleSearch, selected, handleToggle, handleInputFocus, inputContainerRef } = props;
    
    return (
        <div ref={inputContainerRef} style={{position: 'relative'}}>
            <Input
                fullWidth
                multiline={true}
                inputProps={{ selected, handleToggle, handleSearch }}
                onFocus={handleInputFocus}
                inputComponent={CustomInput}
                style={{minHeight: 50, flexWrap: 'wrap'}}
                placeholder={placeholder || "Select"}
            />
        </div>
    )
}

export default RichInput;