import { Container, Grid } from "@mui/material"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { toast } from 'react-toastify'
import { IAddEmployeeBody } from "src/interfaces/Employee/IEmployee"
import ButtonField from "src/libraries/Training/ButtonField"
import CalendarField from "src/libraries/Training/CalendarField"
import Dropdown from "src/libraries/Training/Dropdown"
import InputField from "src/libraries/Training/InputField"
import RadioList from "src/libraries/Training/RadioList"
import PageHeader from "src/libraries/heading/PageHeader"
import { AddEmployeeDetails, getDesignationList } from "src/requests/Employee/RequestEmployee"
import { RootState } from 'src/store'

const AddEmployee = () => {
    const dispatch = useDispatch();

    const [EmployeeName, setEmployeeName] = useState('')
    const [BirthDate, setBirthDate] = useState('')
    const [DesignationId, setDesignationId] = useState('')
    const [EmailId, setEmailId] = useState('')
    const [PhoneNo, setPhoneNo] = useState('');
    const [GenderList, setGenderList] = useState([
        { Id: 1, Name: 'Male', Value: "1" },
        { Id: 2, Name: 'FeMale', Value: "2" }
    ])
    const [Gender, setGender] = useState('')

    const DesignationList = useSelector((state: RootState) => state.Employee.DesignationList);
    const AddEmployeeMsg = useSelector((state: RootState) => state.Employee.AddEmployeeMsg);

    useEffect(() => {
        dispatch(getDesignationList())
    }, [])
    useEffect(() => {
        toast.success(AddEmployeeMsg)
    }, [AddEmployeeMsg])

    const clickEmployeeName = (value) => {
        setEmployeeName(value)
    }
    const clickBirthDate = (value) => {
        setBirthDate(value)
    }
    const clickDesignation = (value) => {
        setDesignationId(value)
    }
    const clickEmailId = (value) => {
        setEmailId(value)
    }
    const clickPhoneNo = (value) => {
        setPhoneNo(value)
    }
    const clickGender = (value) => {
        setGender(value)
    }

    const clickSubmit = () => {
        const AddEmployeeBody: IAddEmployeeBody = {
            ID: 0,
            EmployeeName: EmployeeName,
            BirthDate: BirthDate,
            DesignationId: Number(DesignationId),
            Gender: Number(Gender),
            EmailId: EmailId,
            PhoneNo: PhoneNo,
            DesignationName: "",
            DID: 0

        }
        dispatch(AddEmployeeDetails(AddEmployeeBody))
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
                        <InputField Item={EmailId} Label={'Email Id'}
                            ClickItem={clickEmailId} />
                    </Grid>
                    <Grid item xs={12}>
                        <InputField Item={PhoneNo} Label={'MobileNo'}
                            ClickItem={clickPhoneNo} />
                    </Grid>
                    <Grid item xs={12}>
                        <RadioList ItemList={GenderList} Label={'Gender'} DefaultValue={Gender}
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