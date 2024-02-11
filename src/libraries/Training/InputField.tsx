import { TextField, Typography } from '@mui/material'

const InputField = ({ Item, ClickItem, Label }) => {
    return (<>
        <Typography>{Label}</Typography>
        <TextField value={Item}
            onChange={(e) => { ClickItem(e.target.value) }} />
    </>
    )
}

export default InputField