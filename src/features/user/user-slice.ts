import { RootState } from "@/store/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchAddress } from "./fetchAddress";

export interface UserSlice {
  userName: string;
  status: "loading" | "idle" | "error";
  position: { latitude: number; longitude: number };
  address: string;
  error: string;
}

const initialState: UserSlice = {
  userName: "",
  status: "idle",
  address: "",
  error: "",
  position: {
    latitude: 0,
    longitude: 0,
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserName: (state: UserSlice, action: PayloadAction<string>) => {
      state.userName = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAddress.pending, (state: UserSlice) => {
        state.status = "loading";
      })
      .addCase(
        fetchAddress.fulfilled,
        (
          state: UserSlice,
          action: PayloadAction<{
            address: UserSlice["address"];
            position: UserSlice["position"];
          }>
        ) => {
          state.position = action.payload.position;
          state.address = action.payload.address;
          state.status = "idle";
          state.error = "";
        }
      )
      .addCase(fetchAddress.rejected, (state: UserSlice) => {
        state.status = "error";
        state.address = "";
        state.error = "user not accepted geolocation";
      });
  },
});

export const { setUserName } = userSlice.actions;
export const userReducer = userSlice.reducer;

export const getUserName = (state: RootState) => state.user.userName;
