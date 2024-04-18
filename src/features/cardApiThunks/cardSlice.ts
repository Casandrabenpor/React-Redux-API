import { createSlice } from '@reduxjs/toolkit';
import Phone from '../../models/interface';
import { loadPhones } from './cardApiThunks';
import { toast } from 'react-toastify';

export const cardSlice = createSlice({
  name: 'phones',
  initialState: {
    status: 'idle',
    data: [] as Phone[],
    filteredData: [] as Phone[],
  },
  reducers: {},
  extraReducers: (buider) => {
    buider
      .addCase(loadPhones.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loadPhones.rejected, (state) => {
        state.status = 'failed';
        toast.error('Item not loaded', {
          // position: toast.POSITION.TOP_RIGHT,
        });
      })
      .addCase(loadPhones.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.data = action.payload;
        if (Array.isArray(state.data) && state.data.length === 0) {
          toast.info('There are no phones', {
            //   position: toast.POSITION.TOP_RIGHT,
          });
        }
      });
  },
});
export const getAllPhones = (state: any) => state.phones.data;
export const getPhoneStatus = (state: any) => state.phones.status;
