import axios from "axios";

export function getPosition() {
  return new Promise<GeolocationPosition>((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}
export async function getAddress({
  latitude,
  longitude,
}: {
  latitude: number;
  longitude: number;
}) {
  const res = await axios
    .get(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}`
    )
    .then((res) => res.data);

  return res;
}
