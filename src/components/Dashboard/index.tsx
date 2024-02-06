import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import 'src/assets/style/Bday.css';
import Card2 from 'src/libraries/mainCard/Card2';
import { RootState } from 'src/store';
import BdayPopUp from '../Birthdays/BdayPopUp';
import { isBetweenDate } from '../Common/Util';

const Text = styled(Box)(({ theme }) => ({
  ...theme.typography.body2,
  Leftpadding: theme.spacing(1),
  Rightpadding: theme.spacing(1),
  TextAlign: 'center',
  cursor: 'pointer'
}));

function LandingPage() {
  const UserLoginDetails1 = useSelector(
    (state: RootState) => state.Dashboard.UserLoginDetails
  );

  if (UserLoginDetails1 !== null) {
    localStorage.setItem(
      'UserLoginDetails1',
      UserLoginDetails1.LastLoginDetails
    );
  }
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showBday, setShowBday] = useState(false);
  const Messagecount: any = useSelector(
    (state: RootState) => state.Dashboard.MessageCount
  );
  const asSchoolId = localStorage.getItem('localSchoolId');
  const RoleId = sessionStorage.getItem('RoleId');
  const userId = sessionStorage.getItem('Id');
  const AcademicYearId = sessionStorage.getItem('AcademicYearId');
  const DOB = sessionStorage.getItem('DOB');

  const curYear = new Date().getFullYear();
  const date = DOB;
  const day = new Date(date).getDate();
  const month = new Date(date).toLocaleString('default', { month: 'short' });
  const year = new Date(date).getFullYear();
  const newdate = `${day} ${month} ${curYear}`;

  useEffect(() => {
    localStorage.setItem('url', window.location.pathname);
    if (isBetweenDate(newdate, 6)) {
      if (localStorage.getItem('DOBSeen') == newdate) {
        setShowBday(false);
      } else {
        setShowBday(true);
        localStorage.setItem('DOBSeen', newdate);
      }
    } else setShowBday(false);
  }, []);
  let items1 = [];
  let items2 = [];
  let items3 = [];


  let header2 =
    RoleId === '3'
      ? 'Student'
      : 'Teacher' && RoleId === '1'
        ? 'Communication'
        : 'Teacher';
  let header3 =
    RoleId === '6' || RoleId === '2' ? 'Communication' : 'Exam & Communication';
  let header4 = RoleId === '1' && 'Communication';
  const [forceUpdate, setForceUpdate] = useState(false);

  return (
    <>
      {showBday && <BdayPopUp />}
      <Card2
        items={items1}
        heading={'School'}
        rowsCol="4"
        Messagecount={Messagecount.MESSAGECOUNT}
      ></Card2>
      {/* {RoleId != '1'   &&  <Card2 items={items2} heading={header2} rowsCol="4" Messagecount={Messagecount.MESSAGECOUNT} />} */}
      {RoleId != '6' && (
        <Card2
          items={items2}
          heading={header2}
          rowsCol="4"
          Messagecount={Messagecount.MESSAGECOUNT}
        />
      )}
      {RoleId == '6' && (
        <Card2
          items={items2}
          heading={header3}
          rowsCol="4"
          Messagecount={Messagecount.MESSAGECOUNT}
        />
      )}
      {(RoleId == '2' || RoleId == '3') && (
        <Card2
          items={items3}
          heading={header3}
          rowsCol="4"
          Messagecount={Messagecount.MESSAGECOUNT}
        ></Card2>
      )}
    </>
  );
}

export default LandingPage;
