import { Container } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getDesignationList } from "src/requests/Employee/RequestEmployee";
import { RootState } from 'src/store';

const Home = () => {

    const dispatch = useDispatch();
    const DesignationList = useSelector(
        (state: RootState) => state.Employee.DesignationList
    );
    const EmployeeList = useSelector(
        (state: RootState) => state.Employee.EmployeeList
    );
    console.log(DesignationList, "DesignationList")
    useEffect(() => {
        dispatch(getDesignationList())
    }, [])
    return (
        <Container>Hello World</Container>
    )
}

export default Home