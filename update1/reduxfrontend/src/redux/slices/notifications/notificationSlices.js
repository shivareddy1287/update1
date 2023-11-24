import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import baseUrl from "../../../utils/baseUrl";

export const fetchNotificationsAction = createAsyncThunk(
  "notification/fetch",

  async (id, { rejectWithValue, getState, dispatch }) => {
    const userId = {
      id: id,
    };
    console.log("/api/notification", userId);
    try {
      const { data } = await axios.get(
        `${baseUrl}/api/notification?userId=${id}`
      );
      return data;
    } catch (error) {
      if (!error?.responce) throw error;
      return rejectWithValue(error?.responce?.data);
    }
  }
);

const notificationSlices = createSlice({
  name: "notification",
  initialState: {},
  extraReducers: (builder) => {
    builder.addCase(fetchNotificationsAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchNotificationsAction.fulfilled, (state, action) => {
      state.loading = false;
      state.allNotifications = action?.payload;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(fetchNotificationsAction.rejected, (state, action) => {
      state.loading = false;
      state.appErr = action?.payload?.message;
      state.serverErr = action?.error?.message;
    });
  },
});

export default notificationSlices.reducer;
