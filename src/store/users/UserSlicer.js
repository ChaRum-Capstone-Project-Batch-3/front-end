import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";
import ApiUser from "../../apis/User.api";

const initialState = {
  data: {
    users: [],
    user: {},
  },
  status: false,
  fecthStatus: "idle",
  error: null,
};

export const getAllUsers = createAsyncThunk("get all user", async (page) => {
  try {
    const res = await ApiUser.getAllUser(page);
    return res.data.data;
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: error.message,
    });
  }
});
export const getUser = createAsyncThunk("get user by id", async (id) => {
  try {
    const res = await ApiUser.getUser(id);
    return res.data.data;
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: error.message,
    });
  }
});

export const deleteUser = createAsyncThunk("delete user by id", async (id) => {
  try {
    const res = await ApiUser.deleteUser(id);
    return res.data.data;
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: error.message,
    });
  }
});

export const suspendUser = createAsyncThunk("suspend user", async (id) => {
  try {
    const res = await ApiUser.suspendUser(id);
    return res.data.data;
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: error.message,
    });
  }
});

export const unSuspendUser = createAsyncThunk("unsuspend user", async (id) => {
  try {
    const res = await ApiUser.unSuspendUser(id);
    return res.data.data;
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: error.message,
    });
  }
});

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder
      // get all user
      .addCase(getAllUsers.pending, (state) => {
        state.fecthStatus = "loading";
      })
      .addCase(getAllUsers.fulfilled, (state, action) => {
        state.fecthStatus = "success";
        console.log(action.payload);
        state.data.users = action.payload;
      })
      .addCase(getAllUsers.rejected, (state, action) => {
        state.fecthStatus = "failed";
        state.error = action.error.message;
      })
      // get user by id
      .addCase(getUser.pending, (state) => {
        state.fecthStatus = "loading";
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.fecthStatus = "success";
        state.data.user = action.payload.user;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.fecthStatus = "failed";
        state.error = action.error.message;
      })
      // deleted users
      .addCase(deleteUser.pending, (state) => {
        state.fecthStatus = "loading";
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.fecthStatus = "success";
        console.log(action);
        state.data.users.users = state.data.users.users.filter(
          (val) => val._id !== action.payload.user._id
        );
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.fecthStatus = "failed";
        state.error = action.error.message;
      })
      // updated users
      .addCase(suspendUser.fulfilled, (state, action) => {
        state.fecthStatus = "success";
        const id = action.payload._id;
        const indexData = state.data.users.findIndex(
          (value) => value._id === id
        );
        const newArr = [...state.data.users];
        if (indexData >= 0) {
          newArr[indexData] = action.payload;
        }
        state.data.users = [...newArr];
        state.status = !state.status;
      })
      .addCase(suspendUser.rejected, (state, action) => {
        state.fecthStatus = "failed";
        state.err = action.error.message;
      })
      .addCase(unSuspendUser.fulfilled, (state, action) => {
        state.fecthStatus = "success";
        const id = action.payload._id;
        const indexData = state.data.users.users.findIndex(
          (value) => value._id === id
        );
        const newArr = [...state.data.users];
        if (indexData >= 0) {
          newArr[indexData] = action.payload;
        }
        state.data.users = [...newArr];
        state.status = !state.status;
      })
      .addCase(unSuspendUser.rejected, (state, action) => {
        state.fecthStatus = "failed";
        state.err = action.error.message;
      });
  },
});

export default userSlice.reducer;
