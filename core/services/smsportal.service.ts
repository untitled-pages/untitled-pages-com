import axios from "axios";

export async function getAccessToken(): Promise<string> {
  const response = await axios.get(
    `https://rest.smsportal.com/v2/authentication`,
    {
      auth: {
        password: "TIq4qPiwe2FMHIZlbbINjNc/4OHL/uGt",
        username: "fdfa1e6e-915f-413b-9d0a-701bea46d1cd",
      },
    }
  );

  return response.data.token;
}

export function sendMessage(
  accessToken: string
): (content: string) => Promise<void> {
  return async (content: string) => {
    await axios.post(
      "https://rest.smsportal.com/v2/bulkmessages",
      {
        messages: [
          {
            content,
            destination: "0766542813",
          },
        ],
      },
      {
        headers: {
          authorization: `bearer ${accessToken}`,
        },
      }
    );
  };
}
