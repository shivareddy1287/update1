import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import baseurl from "../../../utils/baseUrl";

const resetAddbenefit = createAction("addbenefit/reset");
const resetUpdatebenefit = createAction("updatebenefit/reset");
const resetDeletebenefit = createAction("deletebenefit/reset");
//----------------------------------------------------------------
// register action
//----------------------------------------------------------------

export const benefitCreateAction = createAsyncThunk(
  "benefit/create",
  async (user, { rejectWithValue, getState, dispatch }) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    //http call
    try {
      const { data } = await axios.post(
        `${baseurl}/api/benefit/create`,
        user,
        config
      );
      dispatch(resetAddbenefit());
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
// Fetch benefit Details
//----------------------------------------------------------------

export const fetchSinglebenefitAction = createAsyncThunk(
  "benefit/fetched",
  async (id, { rejectWithValue, getState, dispatch }) => {
    try {
      const { data } = await axios.get(`${baseurl}/api/benefit/fetch/${id}`);
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

export const allFetchbenefitAction = createAsyncThunk(
  "benefit/fetchall",
  async (id, { rejectWithValue, getState, dispatch }) => {
    // const user = getState()?.users;
    // const { userAuth } = user;
    // const config = {
    //   headers: {
    //     Authorization: `Bearer ${userAuth?.token}`,
    //   },
    // };
    const url = id
      ? `${baseurl}/api/benefit/fetch?id=${id}`
      : `${baseurl}/api/benefit/fetch`;

    try {
      const { data } = await axios.get(url);
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

export const updatebenefitAction = createAsyncThunk(
  "benefit/update",
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
        `${baseurl}/api/benefit/update/${id}`,
        {
          ...values,
        },
        config
      );
      dispatch(resetUpdatebenefit());
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
// delete benefit
//----------------------------------------------------------------
export const deletebenefitAction = createAsyncThunk(
  "benefit/delete",
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
        `${baseurl}/api/benefit/fetch/${id}`,

        config
      );
      dispatch(resetDeletebenefit());
      return data;
    } catch (error) {
      if (!error?.message) throw error;
      return rejectWithValue(error?.response?.data);
    }
  }
);
const benefitSlices = createSlice({
  // register
  name: "benefit",
  initialState: {},
  extraReducers: (builder) => {
    builder.addCase(benefitCreateAction.pending, (state, action) => {
      state.loading = true;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(resetAddbenefit, (state, action) => {
      state.isbenefitAdded = true;
    });
    builder.addCase(benefitCreateAction.fulfilled, (state, action) => {
      state.loading = false;
      state.isbenefitAdded = false;
      state.benefit = action?.payload;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(benefitCreateAction.rejected, (state, action) => {
      state.loading = false;
      state.appErr = action?.payload?.message;
      state.serverErr = action?.error?.message;
    });

    //----------------------------------------------------------------
    // Fetch  Single user Details
    //----------------------------------------------------------------

    builder.addCase(fetchSinglebenefitAction.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(fetchSinglebenefitAction.fulfilled, (state, action) => {
      state.loading = false;

      state.singlebenefit = action?.payload;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(fetchSinglebenefitAction.rejected, (state, action) => {
      state.loading = false;
      state.appErr = action?.payload?.message;
      state.serverErr = action?.error?.message;
    });

    //----------------------------------------------------------------
    // Fetch All Users
    //----------------------------------------------------------------

    builder.addCase(allFetchbenefitAction.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(allFetchbenefitAction.fulfilled, (state, action) => {
      state.loading = false;
      state.benefitList = action?.payload;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(allFetchbenefitAction.rejected, (state, action) => {
      state.loading = false;
      state.appErr = action?.payload?.message;
      state.serverErr = action?.error?.message;
    });

    //----------------------------------------------------------------
    // Update profile
    //----------------------------------------------------------------

    builder.addCase(updatebenefitAction.pending, (state, action) => {
      state.loading = true;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(resetUpdatebenefit, (state, action) => {
      state.isbenefiteUpdated = true;
    });
    builder.addCase(updatebenefitAction.fulfilled, (state, action) => {
      state.loading = false;
      state.isbenefiteUpdated = false;
      state.benefitUpdated = action?.payload;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(updatebenefitAction.rejected, (state, action) => {
      state.loading = false;
      state.appErr = action?.payload?.message;
      state.serverErr = action?.error?.message;
    });

    //----------------------------------------------------------------
    // delete post
    //----------------------------------------------------------------

    builder.addCase(deletebenefitAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(resetDeletebenefit, (state, action) => {
      state.isDeleted = true;
    });

    builder.addCase(deletebenefitAction.fulfilled, (state, action) => {
      state.loading = false;
      state.benefitDeleted = action?.payload;
      state.isDeleted = false;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(deletebenefitAction.rejected, (state, action) => {
      state.loading = false;

      state.appErr = action?.payload?.message;
      state.serverErr = action?.errors?.message;
    });
  },
});

export default benefitSlices.reducer;
