import React from 'react'
import SelectableList from '../SelectableList'
import ClickAwayListener from '@mui/base/ClickAwayListener';
import RichInput from '../RichInput';
import StyledPopper from '../StyledPopper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';

export default function Typeahead(props) {
    const { options, placeholder, dataKey, endpoint, selected, setSelected } = props;
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [data, setData] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(false);
    const [searchText, setSearchText] = React.useState();
    const inputContainerRef = React.useRef();

    const handleInputFocus = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopperClose = () => {
        setAnchorEl(null);
    };

    const handleToggle = (value) => {
        const currentIndex = selected.indexOf(value);
        const newselected = [...selected];
        currentIndex === -1 ? newselected.push(value) : newselected.splice(currentIndex, 1);
        setSelected(newselected);
    };

    const handleSearch = (text) => {
        setSearchText(text);
        debounce(fetchData(text), 500);
    };

    const debounce = (func, delay) => {
        let debounceTimer;
        return function () {
            const context = this;
            const args = arguments;
            clearTimeout(debounceTimer);
            debounceTimer = 
                setTimeout(() => func.apply(context, args), delay);
        }
    }

    const fetchData = async (keyword) => {
        if (keyword) {
            if (endpoint) {
                setIsLoading(true);
                await fetch(endpoint + keyword)
                    .then((response) => response.json())
                    .then((data) => {
                        data?.length ? setData(data) : setData([]);
                    })
                    .catch((error) => setData([]))
                setIsLoading(false);
            } else {
                let searchedOptions = options.filter((o) => o.toLowerCase().includes(keyword.toLowerCase()));
                setData(searchedOptions);
            }
        } else {
            setData([]);
        }
    }

    // React.useEffect(() => {
    //     if (options?.length) {
    //         setData(options);
    //     } else {
    //         fetchData();
    //     }
    // }, [])

    return (
        <ClickAwayListener onClickAway={handlePopperClose}>
            <div>
                <RichInput {...{ placeholder, handleSearch, selected, handleToggle, handleInputFocus, inputContainerRef }} />
                <StyledPopper {...{ anchorEl, inputContainerRef }}>
                    {isLoading ?
                        <Box p={1} display="flex" justifyContent="center">
                            <CircularProgress />
                        </Box>
                        : data.length ?
                            <SelectableList {...{ data, dataKey, selected, handleToggle }} />
                            :
                            <Box px={2} py={1}>
                                <Typography variant="subtitle1">
                                    {!searchText ?
                                        'Please type to search'
                                        :
                                        'No results found'
                                    }
                                </Typography>
                            </Box>
                    }
                </StyledPopper>
            </div>
        </ClickAwayListener>
    )
}