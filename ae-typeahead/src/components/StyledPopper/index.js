import React from 'react'
import Popper from '@mui/material/Popper';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';
import './StyledPoppoer.css';

export default function StyledPopover(props) {
    const {anchorEl, inputContainerRef} = props;
    return (
        <Popper
            open={Boolean(anchorEl)}
            anchorEl={anchorEl} 
            transition
            container={inputContainerRef?.current}
            className='StyledPopover'
        >
            {({ TransitionProps }) => (
                <Fade {...TransitionProps} timeout={350}>
                    <Paper>
                        <div
                            
                        >
                            {props.children}
                        </div>
                    </Paper>
                </Fade>
            )}
        </Popper>
    )
}
