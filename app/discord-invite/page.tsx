import { redirect } from "next/navigation";

export default function Home() {
  if (process.env.DISCORD_INVITE_URL === undefined) {
    // In dev you can use a .env file to define environment variables.
    throw new Error("DISCORD_INVITE_URL environment variable is not defined.");
  }

  // We pull the invite URL from an environment variable to avoid it being in
  // the source code. This helps prevent bots that scrape the web for Discord
  // invite links from finding it.
  redirect(process.env.DISCORD_INVITE_URL!);
}
