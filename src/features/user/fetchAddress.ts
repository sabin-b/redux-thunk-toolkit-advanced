import { getAddress, getPosition } from "@/services/apigeocoding";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchAddress = createAsyncThunk(
  "user/fetchAddress",
  async function () {
    const positionObj = await getPosition();
    const position = {
      latitude: positionObj.coords.latitude,
      longitude: positionObj.coords.longitude,
    };

    const addressObj = await getAddress(position);

    const address = `${addressObj?.locality}, ${addressObj?.city} ${addressObj?.postcode}, ${addressObj?.countryName}`;

    return { address, position };
  }
);
