import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';

export default function SelectableList(props) {
    const { data, dataKey, selected, handleToggle } = props;

    var extractByPath = (obj, path) => {
        let result = obj;
        if (path) {
            path.split('.').forEach((p) => { result = result[p] });
        }
        return result;
    };

    return (
        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
            {data.map((valueObj) => {
                const value = extractByPath(valueObj, dataKey);
                return (
                    <ListItem
                        key={value}
                        disablePadding
                    >
                        <ListItemButton role={undefined} onClick={() => handleToggle(value)} dense>
                            <ListItemIcon>
                                <Checkbox
                                    edge="start"
                                    checked={selected.indexOf(value) !== -1}
                                    tabIndex={-1}
                                    disableRipple
                                />
                            </ListItemIcon>
                            <ListItemText primary={value} />
                        </ListItemButton>
                    </ListItem>
                );
            })}
        </List>
    )
}
