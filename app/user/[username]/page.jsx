import getSingleUser from "@/libs/getSingleUser";

export async function generateMetadata({ params }) {
  return {
    title: params.username,
    description: `hi ${params.username} You are WElcome `,
  };
}

export default async function GetSingleUser({ params }) {
  const user = await getSingleUser(params.username);

  console.log(user);

  return;
}
