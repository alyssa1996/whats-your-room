import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface CommonState {
  selectedRoom: Array<object | null>;
}

const initialState: CommonState = {
  selectedRoom: [],
};

export const roomSlice = createSlice({
  name: 'selectedRoom',
  initialState,
  reducers: {
    setSelectedRoom(state, action: PayloadAction<Array<object | null>>) {
      state.selectedRoom = action.payload;
    },
  },
});

export const {setSelectedRoom} = roomSlice.actions;

export default roomSlice;
