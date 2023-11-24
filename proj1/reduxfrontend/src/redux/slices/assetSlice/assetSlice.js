import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import baseurl from "../../../utils/baseUrl";

const resetAddAsset = createAction("addAsset/reset");
const resetUpdateAsset = createAction("updateAsset/reset");
const resetDeleteAsset = createAction("deleteAsset/reset");
//----------------------------------------------------------------
// register action
//----------------------------------------------------------------

export const assetCreateAction = createAsyncThunk(
  "asset/create",
  async (user, { rejectWithValue, getState, dispatch }) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    //http call
    try {
      const { data } = await axios.post(
        `${baseurl}/api/asset/create`,
        user,
        config
      );
      dispatch(resetAddAsset());
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
// Fetch Asset Details
//----------------------------------------------------------------

export const fetchSingleAssetAction = createAsyncThunk(
  "asset/fetched",
  async (id, { rejectWithValue, getState, dispatch }) => {
    try {
      const { data } = await axios.get(`${baseurl}/api/asset/fetch/${id}`);
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

export const allFetchAssetAction = createAsyncThunk(
  "asset/fetchall",
  async (id, { rejectWithValue, getState, dispatch }) => {
    // const user = getState()?.users;
    // const { userAuth } = user;
    // const config = {
    //   headers: {
    //     Authorization: `Bearer ${userAuth?.token}`,
    //   },
    // };

    const url = id
      ? `${baseurl}/api/asset/fetch?id=${id}`
      : `${baseurl}/api/asset/fetch`;
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

export const updateAssetAction = createAsyncThunk(
  "asset/update",
  async (userDet, { rejectWithValue, getState, dispatch }) => {
    const { id, values } = userDet;

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
        `${baseurl}/api/asset/update/${id}`,
        {
          ...values,
        },
        config
      );
      dispatch(resetUpdateAsset());
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
// delete asset
//----------------------------------------------------------------
export const deleteAssetAction = createAsyncThunk(
  "asset/delete",
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
        `${baseurl}/api/asset/fetch/${id}`,

        config
      );
      dispatch(resetDeleteAsset());
      return data;
    } catch (error) {
      if (!error?.message) throw error;
      return rejectWithValue(error?.response?.data);
    }
  }
);
const assetSlices = createSlice({
  name: "asset",
  initialState: {},
  extraReducers: (builder) => {
    builder.addCase(assetCreateAction.pending, (state, action) => {
      state.loading = true;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(resetAddAsset, (state, action) => {
      state.isAssetAdded = true;
    });
    builder.addCase(assetCreateAction.fulfilled, (state, action) => {
      state.loading = false;
      state.isAssetAdded = false;
      state.asset = action?.payload;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(assetCreateAction.rejected, (state, action) => {
      console.log(action.payload);
      state.loading = false;
      state.appErr = action?.payload?.message;
      state.serverErr = action?.error?.message;
    });

    //----------------------------------------------------------------
    // Fetch  Single user Details
    //----------------------------------------------------------------

    builder.addCase(fetchSingleAssetAction.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(fetchSingleAssetAction.fulfilled, (state, action) => {
      state.loading = false;
      state.singleAsset = action?.payload;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(fetchSingleAssetAction.rejected, (state, action) => {
      state.loading = false;
      state.appErr = action?.payload?.message;
      state.serverErr = action?.error?.message;
    });

    //----------------------------------------------------------------
    // Fetch All Users
    //----------------------------------------------------------------

    builder.addCase(allFetchAssetAction.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(allFetchAssetAction.fulfilled, (state, action) => {
      state.loading = false;
      state.assetList = action?.payload;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(allFetchAssetAction.rejected, (state, action) => {
      state.loading = false;
      state.appErr = action?.payload?.message;
      state.serverErr = action?.error?.message;
    });

    //----------------------------------------------------------------
    // Update profile
    //----------------------------------------------------------------

    builder.addCase(updateAssetAction.pending, (state, action) => {
      state.loading = true;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(resetUpdateAsset, (state, action) => {
      state.isAsseteUpdated = true;
    });
    builder.addCase(updateAssetAction.fulfilled, (state, action) => {
      state.loading = false;
      state.isAsseteUpdated = false;
      state.assetUpdated = action?.payload;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(updateAssetAction.rejected, (state, action) => {
      state.loading = false;
      state.appErr = action?.payload?.message;
      state.serverErr = action?.error?.message;
    });

    //----------------------------------------------------------------
    // delete post
    //----------------------------------------------------------------

    builder.addCase(deleteAssetAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(resetDeleteAsset, (state, action) => {
      state.isDeleted = true;
    });

    builder.addCase(deleteAssetAction.fulfilled, (state, action) => {
      state.loading = false;
      state.assetDeleted = action?.payload;
      state.isDeleted = false;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(deleteAssetAction.rejected, (state, action) => {
      state.loading = false;

      state.appErr = action?.payload?.message;
      state.serverErr = action?.errors?.message;
    });
  },
});

export default assetSlices.reducer;
