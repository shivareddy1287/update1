import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import baseurl from "../../../utils/baseUrl";

const resetAddDepartment = createAction("addDepartment/reset");
const resetUpdateDepartment = createAction("updateDepartment/reset");
const resetDeleteDepartment = createAction("deleteDepartment/reset");
//----------------------------------------------------------------
// register action
//----------------------------------------------------------------

export const DepartmentCreateAction = createAsyncThunk(
  "Department/create",
  async (user, { rejectWithValue, getState, dispatch }) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    //http call
    try {
      const { data } = await axios.post(
        `${baseurl}/api/Department/create`,
        user,
        config
      );
      dispatch(resetAddDepartment());
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
// Fetch Department Details
//----------------------------------------------------------------

export const fetchSingleDepartmentAction = createAsyncThunk(
  "Department/fetched",
  async (id, { rejectWithValue, getState, dispatch }) => {
    try {
      const { data } = await axios.get(`${baseurl}/api/Department/fetch/${id}`);
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

export const allFetchDepartmentAction = createAsyncThunk(
  "Department/fetchall",
  async (id, { rejectWithValue, getState, dispatch }) => {
    // const user = getState()?.users;
    // const { userAuth } = user;
    // const config = {
    //   headers: {
    //     Authorization: `Bearer ${userAuth?.token}`,
    //   },
    // };
    try {
      const { data } = await axios.get(`${baseurl}/api/Department/fetch`);
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

export const updateDepartmentAction = createAsyncThunk(
  "Department/update",
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
        `${baseurl}/api/Department/update/${id}`,
        {
          ...values,
        },
        config
      );
      dispatch(resetUpdateDepartment());
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
// delete Department
//----------------------------------------------------------------
export const deleteDepartmentAction = createAsyncThunk(
  "Department/delete",
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
        `${baseurl}/api/Department/fetch/${id}`,

        config
      );
      dispatch(resetDeleteDepartment());
      return data;
    } catch (error) {
      if (!error?.message) throw error;
      return rejectWithValue(error?.response?.data);
    }
  }
);
const DepartmentSlices = createSlice({
  name: "Department",
  initialState: {},
  extraReducers: (builder) => {
    builder.addCase(DepartmentCreateAction.pending, (state, action) => {
      state.loading = true;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(resetAddDepartment, (state, action) => {
      state.isDepartmentAdded = true;
    });
    builder.addCase(DepartmentCreateAction.fulfilled, (state, action) => {
      state.loading = false;
      state.isDepartmentAdded = false;
      state.Department = action?.payload;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(DepartmentCreateAction.rejected, (state, action) => {
      state.loading = false;
      state.appErr = action?.payload?.message;
      state.serverErr = action?.error?.message;
    });

    //----------------------------------------------------------------
    // Fetch  Single user Details
    //----------------------------------------------------------------

    builder.addCase(fetchSingleDepartmentAction.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(fetchSingleDepartmentAction.fulfilled, (state, action) => {
      state.loading = false;
      state.singleDepartment = action?.payload;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(fetchSingleDepartmentAction.rejected, (state, action) => {
      state.loading = false;
      state.appErr = action?.payload?.message;
      state.serverErr = action?.error?.message;
    });

    //----------------------------------------------------------------
    // Fetch All Users
    //----------------------------------------------------------------

    builder.addCase(allFetchDepartmentAction.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(allFetchDepartmentAction.fulfilled, (state, action) => {
      state.loading = false;
      state.DepartmentList = action?.payload;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(allFetchDepartmentAction.rejected, (state, action) => {
      state.loading = false;
      state.appErr = action?.payload?.message;
      state.serverErr = action?.error?.message;
    });

    //----------------------------------------------------------------
    // Update profile
    //----------------------------------------------------------------

    builder.addCase(updateDepartmentAction.pending, (state, action) => {
      state.loading = true;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(resetUpdateDepartment, (state, action) => {
      state.isDepartmenteUpdated = true;
    });
    builder.addCase(updateDepartmentAction.fulfilled, (state, action) => {
      state.loading = false;
      state.isDepartmenteUpdated = false;
      state.DepartmentUpdated = action?.payload;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(updateDepartmentAction.rejected, (state, action) => {
      state.loading = false;
      state.appErr = action?.payload?.message;
      state.serverErr = action?.error?.message;
    });

    //----------------------------------------------------------------
    // delete post
    //----------------------------------------------------------------

    builder.addCase(deleteDepartmentAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(resetDeleteDepartment, (state, action) => {
      state.isDeleted = true;
    });

    builder.addCase(deleteDepartmentAction.fulfilled, (state, action) => {
      state.loading = false;
      state.DepartmentDeleted = action?.payload;
      state.isDeleted = false;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(deleteDepartmentAction.rejected, (state, action) => {
      state.loading = false;

      state.appErr = action?.payload?.message;
      state.serverErr = action?.errors?.message;
    });
  },
});

export default DepartmentSlices.reducer;
