import { TextField, Typography } from '@mui/material'

const CalendarField = ({ Item, ClickItem, Label }) => {
    return (<>
        <Typography>{Label}</Typography>
        <TextField value={Item} type='date'
            onChange={(e) => { ClickItem(e.target.value) }} />
    </>)
}

export default CalendarField