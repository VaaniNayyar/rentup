export async function GET() {
  const token = ""; // temporary

  return new Response(
    JSON.stringify({
      loggedIn: true,
      token
    }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" }
    }
  );
}
