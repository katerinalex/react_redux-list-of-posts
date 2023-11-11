/* eslint-disable no-param-reassign */
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Post } from '../../types/Post';

export interface SelectedPostState {
  value: Post | null;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: SelectedPostState = {
  value: null,
  status: 'idle',
};

export const selectedPostSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setSelectedPost: (state, action: PayloadAction<Post | null>) => {
      state.value = action.payload;
    },
  },
});

export default selectedPostSlice.reducer;