import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { auth } from "../../../lib/firebase";

interface IUserState {
  user: {
    email: string | null;
  };
  isLoading: boolean;
  isError: boolean;
  error: string | null;
}

const initialState: IUserState = {
  user: {
    email: null,
  },
  isLoading: false,
  isError: false,
  error: null,
};

export const createUser = createAsyncThunk(
  "user/createuser",
  async ({ email, password }: { email: string; password: string }) => {
    console.log(email, password);
    const data = await createUserWithEmailAndPassword(auth, email, password);
    return data.user.email;
  }
);
export const loginUser = createAsyncThunk(
  "user/loginuser",
  async ({ email, password }: { email: string; password: string }) => {
    const data = await signInWithEmailAndPassword(auth, email, password);
    return data.user.email;
  }
);
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user.email = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.isLoading = true;
        (state.isError = false), (state.error = null);
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.user.email = action.payload;
        state.isLoading = false;
      })
      .addCase(createUser.rejected, (state, action) => {
        (state.user.email = null),
          (state.isLoading = false),
          (state.isError = true),
          (state.error = action?.error?.message as string);
      })

      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        (state.isError = false), (state.error = null);
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user.email = action.payload;
        state.isLoading = false;
      })
      .addCase(loginUser.rejected, (state, action) => {
        (state.user.email = null),
          (state.isLoading = false),
          (state.isError = true),
          (state.error = action?.error?.message as string);
      });
  },
});

export const { setUser, setLoading } = userSlice.actions;
export default userSlice.reducer;
