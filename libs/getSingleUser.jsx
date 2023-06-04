import axios from "axios";

export default async function getSingleUser({ username }) {
  // Api Call
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/users?username=${username}`
  );

  //  Get Error
  if (!response?.data) throw new Error(`Single user Not Found`);

  //   Data Response
  return response.data[0];
}
