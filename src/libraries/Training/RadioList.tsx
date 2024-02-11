import { FormControlLabel, Radio, RadioGroup } from '@mui/material';

const RadioList = ({ ItemList, ClickItem, Label, DefaultValue }) => {
    return (<>
        <RadioGroup value={DefaultValue} onChange={(e) => ClickItem(e.target.value)}>
            <div>
                {ItemList?.map((Item, i) => {
                    return (
                        <FormControlLabel
                            key={i}
                            value={Item.Value}
                            control={<Radio size="small" />}
                            label={Item.Name}
                        />
                    );
                })}
            </div>
        </RadioGroup>
    </>)
}

export default RadioList