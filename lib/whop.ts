import axios from "axios";

export const whop = axios.create({
  baseURL: "https://api.whop.com/api/v5",
  headers: {
    Authorization: `Bearer ${process.env.WHOP_API_KEY}`,
    "Content-Type": "application/json",
  },
});

export async function getUser() {
  const response = await whop.get("/me");
  return response.data;
}