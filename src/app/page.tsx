import Link from "next/link";

export default function Home() {
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
