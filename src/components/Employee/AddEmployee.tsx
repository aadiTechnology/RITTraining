import { Container, Grid } from "@mui/material"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import ButtonField from "src/libraries/Training/ButtonField"
import CalendarField from "src/libraries/Training/CalendarField"
import Dropdown from "src/libraries/Training/Dropdown"
import InputField from "src/libraries/Training/InputField"
import RadioList from "src/libraries/Training/RadioList"
import PageHeader from "src/libraries/heading/PageHeader"
import { getDesignationList } from "src/requests/Employee/RequestEmployee"
import { RootState } from 'src/store'

const AddEmployee = () => {
    const dispatch = useDispatch();

    const [EmployeeName, setEmployeeName] = useState('')
    const [BirthDate, setBirthDate] = useState('')
    const [DesignationId, setDesignationId] = useState('')
    const [Email, setEmail] = useState('')
    const [MobileNo, setMobileNo] = useState('');
    const [GenderList, setGenderList] = useState([
        { Id: 1, Name: 'Male', Value: "1" },
        { Id: 2, Name: 'FeMale', Value: "2" }
    ])
    const [GenderId, setGenderId] = useState('')

    const DesignationList = useSelector((state: RootState) => state.Employee.DesignationList);

    console.log(DesignationList, "DesignationList")
    useEffect(() => {
        dispatch(getDesignationList())
    }, [])

    const clickEmployeeName = (value) => {
        setEmployeeName(value)
    }
    const clickBirthDate = (value) => {
        setBirthDate(value)
    }
    const clickDesignation = (value) => {
        setDesignationId(value)
    }
    const clickEmail = (value) => {
        setEmail(value)
    }
    const clickMobileNo = (value) => {
        setMobileNo(value)
    }
    const clickGender = (value) => {
        setGenderId(value)
    }

    const clickSubmit = () => {
        alert('form submitted succefully')
    }

    return (
        <Container>
            <Grid container direction="column" alignItems="center" justifyContent="center">
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <PageHeader heading={'Add Employee'} subheading={''} />
                    </Grid>
                    <Grid item xs={12}>
                        <InputField Item={EmployeeName} Label={'Employee Name'}
                            ClickItem={clickEmployeeName} />
                    </Grid>
                    <Grid item xs={12}>
                        <CalendarField Item={BirthDate} Label={'Birth Date'}
                            ClickItem={clickBirthDate} />
                    </Grid>
                    <Grid item xs={12}>
                        <Dropdown ItemList={DesignationList} Label={'Designation'} DefaultValue={DesignationId}
                            ClickItem={clickDesignation} />
                    </Grid>
                    <Grid item xs={12}>
                        <InputField Item={Email} Label={'Email'}
                            ClickItem={clickEmail} />
                    </Grid>
                    <Grid item xs={12}>
                        <InputField Item={MobileNo} Label={'MobileNo'}
                            ClickItem={clickMobileNo} />
                    </Grid>
                    <Grid item xs={12}>
                        <RadioList ItemList={GenderList} Label={'Gender'} DefaultValue={GenderId}
                            ClickItem={clickGender} />
                    </Grid>
                    <Grid item xs={12}>
                        <ButtonField Label={'Submit'} ClickItem={clickSubmit} />
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}

export default AddEmployee