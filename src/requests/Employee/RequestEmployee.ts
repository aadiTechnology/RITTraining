import { createSlice } from "@reduxjs/toolkit";
import EmployeeApi from "src/api/Employee/ApiEmployee";
import { IAddEmployeeBody, IGetEmployeeDetailsBody } from "src/interfaces/Employee/IEmployee";
import { AppThunk } from "src/store";

const Employeeslice = createSlice({
    name: 'Employee',
    initialState: {
        AddEmployeeMsg: '',
        EmployeeList: [],
        EmployeeDetails: null,
        updateEmployeedetailsMsg: '',
        deleteEmployeedetailsMsg: '',
        DesignationList: [],
        Loading: true
    },
    reducers: {
        getAddEmployeeMsg(state, action) {
            state.Loading = false;
            state.AddEmployeeMsg = action.payload;
        },
        getEmployeeList(state, action) {
            state.Loading = false;
            state.EmployeeList = action.payload;
        },
        getEmployeeDetails(state, action) {
            state.Loading = false;
            state.EmployeeDetails = action.payload;
        },
        updateEmployeedetails(state, action) {
            state.Loading = false;
            state.updateEmployeedetailsMsg = action.payload;
        },
        deleteEmployeedetails(state, action) {
            state.Loading = false;
            state.deleteEmployeedetailsMsg = action.payload;
        },
        getDesignationList(state, action) {
            state.Loading = false;
            state.DesignationList = action.payload;
        },
        getLoading(state, action) {
            state.Loading = true;
        }
    }
});

export const AddEmployee =
    (data: IAddEmployeeBody): AppThunk =>
        async (dispatch) => {
            dispatch(Employeeslice.actions.getLoading(true));
            const response = await EmployeeApi.AddEmployeeApi(data);
            dispatch(Employeeslice.actions.getAddEmployeeMsg(response.data));
        };

export const getEmployeeList =
    (): AppThunk =>
        async (dispatch) => {
            dispatch(Employeeslice.actions.getLoading(true));
            const response = await EmployeeApi.GetEmployeeListApi();
            dispatch(Employeeslice.actions.getEmployeeList(response.data));
        };
export const getEmployeeDetails =
    (data: IGetEmployeeDetailsBody): AppThunk =>
        async (dispatch) => {
            dispatch(Employeeslice.actions.getLoading(true));
            const response = await EmployeeApi.GetEmployeeDetailsApi(data);
            dispatch(Employeeslice.actions.getEmployeeDetails(response.data));
        };
export const updateEmployeeDetails =
    (data: IAddEmployeeBody): AppThunk =>
        async (dispatch) => {
            dispatch(Employeeslice.actions.getLoading(true));
            const response = await EmployeeApi.UpdateEmployeedetailsApi(data);
            dispatch(Employeeslice.actions.updateEmployeedetails(response.data));
        };
export const deleteEmployeeDetails =
    (data: IGetEmployeeDetailsBody): AppThunk =>
        async (dispatch) => {
            dispatch(Employeeslice.actions.getLoading(true));
            const response = await EmployeeApi.DeleteEmployeedetailsApi(data);
            dispatch(Employeeslice.actions.deleteEmployeedetails(response.data));
        };
export const getDesignationList =
    (): AppThunk =>
        async (dispatch) => {
            dispatch(Employeeslice.actions.getLoading(true));
            const response = await EmployeeApi.GetDesignationListApi();
            const responseData = response.data.map((Item) => {
                return {
                    Id: Item.ID,
                    Name: Item.DesignationName,
                    Value: Item.ID.toString()
                };
            });

            dispatch(Employeeslice.actions.getDesignationList(responseData));
        };
export default Employeeslice.reducer;
