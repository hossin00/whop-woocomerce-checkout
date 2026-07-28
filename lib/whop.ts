import axios from "axios";

const WHOP_API = "https://api.whop.com/api/v5";

export async function getUser(accessToken: string) {
  const response = await axios.get(`${WHOP_API}/me`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return response.data;
}