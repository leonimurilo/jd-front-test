import axios from "axios";

export const getDocs = (_page, _limit) =>
  axios.get("http://localhost:3000/docs", {
    params: {
      _page,
      _limit,
    },
  });

export const postDoc = (doc) => axios.post("http://localhost:3000/docs", doc);
