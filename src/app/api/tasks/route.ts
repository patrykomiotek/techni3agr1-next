import { NextResponse } from "next/server";
import { BrowserUseClient } from "browser-use-sdk";

export const POST = async (request: Request) => {
  const body = await request.json();

  //
  const client = new BrowserUseClient({
    apiKey: process.env.BROWSER_USE_API_KEY!, // Optional if BROWSER_USE_API_KEY is set
  });

  const task = await client.tasks.createTask({
    task: body.task,
  });

  const result = await task.complete();

  console.log(result.output);

  return NextResponse.json({
    status: "ok",
  });
};
