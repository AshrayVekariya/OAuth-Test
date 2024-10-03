import axios from "../axios/interceptor";

export const getUserProfle = async () => {
  const token = localStorage.getItem("token");
  try {
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    const res = await axios.get(`/oauth/getUserProfle`, { headers });
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
