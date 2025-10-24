import { auth } from "@/shared/lib/auth";
import { headers } from "next/headers";
import Link from "next/link";

export default async function Home() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  console.log({ session });

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link href="/characters">Characters</Link>
          </li>
        </ul>
      </nav>
      <h1>Home</h1>
    </div>
  );
}
