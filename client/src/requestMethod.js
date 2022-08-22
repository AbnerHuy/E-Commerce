import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMDA3ZmNhNDZkM2VmODNhMmI0NGNmNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MTA3ODA3NywiZXhwIjoxNjYxMzM3Mjc3fQ.znUG97Vp-Q_aAqwAEqWZB9C0ZMM-iy1mh4CK4TS1Jpw";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
