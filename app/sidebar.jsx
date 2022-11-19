import Link from 'next/link';
export default function Sidebar() {
  return (
    <aside className="flex-none px-8 py-6 w-80">
      <h2 className="mb-2 text-lg font-bold">Homepage</h2>
      <ul className="mb-8">
        <li>
          <Link href="/" className="font-medium underline ">
            Home
          </Link>
        </li>
      </ul>
      <h2 className="mb-2 text-lg font-bold">Fetching in App dir</h2>
      <ul className="flex flex-col gap-4">
        <li>
          <Link href="/todos" className="font-medium underline">
            Todos - Server
          </Link>
          <p>Server components - server rendered`(fetch)`</p>
        </li>

        <li>
          <Link href="/gallery" className="font-medium underline">
            Gallery - Server
          </Link>
          <p>Server components - server rendered`(supabase)`</p>
        </li>
        <li>
          <Link href="/todos-client" className="font-medium underline">
            Todos - Client
          </Link>
          <p>Client components - client rendered`(react-query)`</p>
        </li>

        <li>
          <Link href="/gallery-client" className="font-medium underline">
            Gallery - Client
          </Link>
          <p>Client components - client rendered`(supabase w/ react-query)`</p>
        </li>
      </ul>
    </aside>
  );
}
