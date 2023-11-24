import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import baseurl from "../../../utils/baseUrl";

const resetAddDesignation = createAction("addDesignation/reset");
const resetUpdateDesignation = createAction("updateDesignation/reset");
const resetDeleteDesignation = createAction("deleteDesignation/reset");
//----------------------------------------------------------------
// register action
//----------------------------------------------------------------

export const DesignationCreateAction = createAsyncThunk(
  "Designation/create",
  async (user, { rejectWithValue, getState, dispatch }) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    //http call
    try {
      const { data } = await axios.post(
        `${baseurl}/api/designation/create`,
        user,
        config
      );
      dispatch(resetAddDesignation());
      return data;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);

//----------------------------------------------------------------
// Fetch Designation Details
//----------------------------------------------------------------

export const fetchSingleDesignationAction = createAsyncThunk(
  "Designation/fetched",
  async (id, { rejectWithValue, getState, dispatch }) => {
    try {
      const { data } = await axios.get(
        `${baseurl}/api/designation/fetch/${id}`
      );
      return data;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);
//----------------------------------------------------------------
// Fetch All Users
//----------------------------------------------------------------

export const allFetchDesignationAction = createAsyncThunk(
  "Designation/fetchall",
  async (id, { rejectWithValue, getState, dispatch }) => {
    // const user = getState()?.users;
    // const { userAuth } = user;
    // const config = {
    //   headers: {
    //     Authorization: `Bearer ${userAuth?.token}`,
    //   },
    // };
    try {
      const { data } = await axios.get(`${baseurl}/api/designation/fetch`);
      return data;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);

//----------------------------------------------------------------
// Update User Details
//----------------------------------------------------------------

export const updateDesignationAction = createAsyncThunk(
  "Designation/update",
  async (userDet, { rejectWithValue, getState, dispatch }) => {
    const { id, values } = userDet;
    console.log(values, "updateUserAction");
    const user = getState().profile;
    const { userAuth } = user;

    const config = {
      headers: {
        Authorization: `Bearer ${userAuth?.token}`,
      },
    };
    //http call

    try {
      const { data } = await axios.put(
        `${baseurl}/api/designation/update/${id}`,
        {
          ...values,
        },
        config
      );
      dispatch(resetUpdateDesignation());
      return data;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);

//----------------------------------------------------------------
// delete Designation
//----------------------------------------------------------------
export const deleteDesignationAction = createAsyncThunk(
  "Designation/delete",
  async (id, { rejectWithValue, getState, dispatch }) => {
    const user = getState()?.profile;
    const { userAuth } = user;

    const config = {
      headers: {
        Authorization: `Bearer ${userAuth?.token}`,
      },
    };
    try {
      // http call

      const { data } = await axios.delete(
        `${baseurl}/api/designation/fetch/${id}`,

        config
      );
      dispatch(resetDeleteDesignation());
      return data;
    } catch (error) {
      if (!error?.message) throw error;
      return rejectWithValue(error?.response?.data);
    }
  }
);
const DesignationSlices = createSlice({
  name: "Designation",
  initialState: {},
  extraReducers: (builder) => {
    builder.addCase(DesignationCreateAction.pending, (state, action) => {
      state.loading = true;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(resetAddDesignation, (state, action) => {
      state.isDesignationAdded = true;
    });
    builder.addCase(DesignationCreateAction.fulfilled, (state, action) => {
      state.loading = false;
      state.isDesignationAdded = false;
      state.Designation = action?.payload;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(DesignationCreateAction.rejected, (state, action) => {
      console.log(action.payload);
      state.loading = false;
      state.appErr = action?.payload?.message;
      state.serverErr = action?.error?.message;
    });

    //----------------------------------------------------------------
    // Fetch  Single user Details
    //----------------------------------------------------------------

    builder.addCase(fetchSingleDesignationAction.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(fetchSingleDesignationAction.fulfilled, (state, action) => {
      state.loading = false;
      state.singleDesignation = action?.payload;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(fetchSingleDesignationAction.rejected, (state, action) => {
      state.loading = false;
      state.appErr = action?.payload?.message;
      state.serverErr = action?.error?.message;
    });

    //----------------------------------------------------------------
    // Fetch All Users
    //----------------------------------------------------------------

    builder.addCase(allFetchDesignationAction.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(allFetchDesignationAction.fulfilled, (state, action) => {
      state.loading = false;
      state.DesignationList = action?.payload;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(allFetchDesignationAction.rejected, (state, action) => {
      state.loading = false;
      state.appErr = action?.payload?.message;
      state.serverErr = action?.error?.message;
    });

    //----------------------------------------------------------------
    // Update profile
    //----------------------------------------------------------------

    builder.addCase(updateDesignationAction.pending, (state, action) => {
      state.loading = true;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(resetUpdateDesignation, (state, action) => {
      state.isDesignationeUpdated = true;
    });
    builder.addCase(updateDesignationAction.fulfilled, (state, action) => {
      state.loading = false;
      state.isDesignationeUpdated = false;
      state.DesignationUpdated = action?.payload;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(updateDesignationAction.rejected, (state, action) => {
      state.loading = false;
      state.appErr = action?.payload?.message;
      state.serverErr = action?.error?.message;
    });

    //----------------------------------------------------------------
    // delete Designation
    //----------------------------------------------------------------

    builder.addCase(deleteDesignationAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(resetDeleteDesignation, (state, action) => {
      state.isDeleted = true;
    });

    builder.addCase(deleteDesignationAction.fulfilled, (state, action) => {
      state.loading = false;
      state.DesignationDeleted = action?.payload;
      state.isDeleted = false;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(deleteDesignationAction.rejected, (state, action) => {
      state.loading = false;

      state.appErr = action?.payload?.message;
      state.serverErr = action?.errors?.message;
    });
  },
});

export default DesignationSlices.reducer;
