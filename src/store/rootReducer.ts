import { combineReducers } from '@reduxjs/toolkit';
import NewRelease from 'src/requests/Authentication/NewRelease';
import SchoolListslice from 'src/requests/Authentication/SchoolList';
import Staffkidslice from 'src/requests/Authentication/StaffKidLogin';
import SliceBirthdays from 'src/requests/Birthdays/RequestBirthdays';
import {
  default as Dashboardlice,
  default as UpcomingEventSlice
} from 'src/requests/Dashboard/Dashboard';
import SliceFeedback from 'src/requests/Feedback/RequestFeedback';
import SliceHomeworkNew from 'src/requests/Homework/RequestHomeworkNew';
import SliceNavbarMenu from 'src/requests/NavBarMenu/requestNavBarMenu';
import {
  default as GallerySlice,
  default as PhotoGallarySlice
} from 'src/requests/PhotoGallery/PhotoGallery';
import Holidaysslice from '../requests/Holiday/Holiday';
import HomeworkSlice from '../requests/Homework/Homework';
import Notificationslice from '../requests/Notification/Notification';

const rootReducer = combineReducers({
  FeedBack: SliceFeedback,
  Holidays: Holidaysslice,
  Notification: Notificationslice,
  SchoolList: SchoolListslice,
  NewRelease: NewRelease,
  UpcomingEventss: UpcomingEventSlice,
  Homework: HomeworkSlice,
  Dashboard: Dashboardlice,
  PhotoGalllary: PhotoGallarySlice,
  Gallery: GallerySlice,
  SchoolSettings: SchoolListslice,
  Birthdays: SliceBirthdays,
  HomeworkNew: SliceHomeworkNew,
  NavbarMenu: SliceNavbarMenu,
  StaffKidLogin: Staffkidslice,

});

export default rootReducer;
