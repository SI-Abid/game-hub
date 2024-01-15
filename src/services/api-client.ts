import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "f158df987cfa4170b84432ec3ac58b36",
  },
});
