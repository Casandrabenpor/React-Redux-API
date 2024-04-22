import { createSlice } from '@reduxjs/toolkit';
import Phone from '../../models/interface';
import { createPhone, deletePhone, loadPhones } from './cardApiThunks';
import { toast } from 'react-toastify';

export const cardSlice = createSlice({
  name: 'phones',
  initialState: {
    status: 'idle',
    data: [] as Phone[],
    filteredData: [] as Phone[],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadPhones.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loadPhones.rejected, (state) => {
        state.status = 'failed';
        toast.error('Item not loaded');
      })
      .addCase(loadPhones.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.data = action.payload;
        if (Array.isArray(state.data) && state.data.length === 0) {
          toast.info('There are no phones');
        }
      })
      //Create phone
      .addCase(createPhone.pending, (state) => {
        state.status = 'loading';
        toast.info('Is pending', {
          // position: toast.POSITION.TOP_RIGHT,
        });
      })
      .addCase(createPhone.rejected, (state) => {
        state.status = 'failed';
        toast.error('Item not created', {
          // position: toast.POSITION.TOP_RIGHT,
        });
      })
      .addCase(createPhone.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.data.push(action.payload);
        state.filteredData = state.data;
        toast.success('Item created', {
          // position: toast.POSITION.TOP_RIGHT,
        });
      })
      //delete
      .addCase(deletePhone.pending, (state) => {
        state.status = 'loading';
        toast.info('Remove in progress');
      })
      .addCase(deletePhone.rejected, (state) => {
        state.status = 'failed';
        toast.error('Item not removed');
      })
      .addCase(deletePhone.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.data = state.data.filter((phone) => phone.id !== action.payload);
        state.filteredData = state.data;
        toast.success('Item removed');
      });
  },
});

export const getAllPhones = (state: any) => state.phones.data;
export const getPhoneStatus = (state: any) => state.phones.status;
