import axios from "axios";

export const getDocs = (siglauf, _page, _limit) =>
  axios.get("http://localhost:3000/docs", {
    params: {
      siglauf,
      _page,
      _limit,
    },
  });

export const postDoc = (doc) => axios.post("http://localhost:3000/docs", doc);

export const deleteDoc = (docId) =>
  axios.delete(`http://localhost:3000/docs/${docId}`);
