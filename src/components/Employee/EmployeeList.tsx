import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';
import { Container, Grid } from '@mui/material';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DynamicList from 'src/libraries/Training/DynamicList';
import PageHeader from 'src/libraries/heading/PageHeader';
import { getEmployeeList } from "src/requests/Employee/RequestEmployee";
import { RootState } from 'src/store';

const EmployeeList = () => {
    const dispatch = useDispatch();
    const EmployeeList = useSelector((state: RootState) => state.Employee.EmployeeList);
    const HeaderList = ["Home", "Birth Date", "Email Id", "Phone No", "Edit", "Delete"]
    const IconList = [
        { Id: 1, Icon: <EditIcon />, Action: 'Edit' },
        { Id: 2, Icon: <CloseIcon />, Action: 'Delete' },
    ];
    useEffect(() => {
        dispatch(getEmployeeList())
    }, [])
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <PageHeader heading={'Employee List'} subheading={''} />
                </Grid>
                <Grid item xs={12}>
                    <DynamicList HeaderList={HeaderList} ItemList={EmployeeList} IconList={IconList} />
                </Grid>
            </Grid>
        </Container >
    )
}

export default EmployeeList