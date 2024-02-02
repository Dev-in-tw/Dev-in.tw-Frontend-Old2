import { type NextRequest } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { service: string } }
) {
  if (params.service === "github") {
    const searchParams = request.nextUrl.searchParams;
    const code = searchParams.get("code");

    const github_response = await fetch(
      "https://github.com/login/oauth/access_token",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          client_id: process.env.GITHUB_CLIENT_ID,
          client_secret: process.env.GITHUB_CLIENT_SECRET,
          code,
        }),
      }
    );
    const { access_token } = await github_response.json();

    const github_user_response = await fetch("https://api.github.com/user", {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
    const userData = await github_user_response.json();

    return Response.json({
      code: code,
      access_token: access_token,
      userData: userData,
    });
  }
}
