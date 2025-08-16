export async function GET(
  req: Request,
  props: { params: Promise<{ lang: string }> }
) {
  const params = await props.params;
  try {
    const data = await import(`./${params.lang}.json`);
    return Response.json(data);
  } catch (error) {
    if (
      error instanceof Error &&
      error.message.includes("Cannot find module")
    ) {
      const fallbackData = await import("./en.json");
      return Response.json(fallbackData);
    } else {
      return new Response("Internal server error", { status: 500 });
    }
  }
}
