import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className="mb-4 inline-block bg-gradient-to-br from-lemon to-cyan bg-clip-text text-5xl font-bold text-transparent sm:text-6xl">
        fancon.dev
      </h1>

      <p className="mb-4">
        A Discord community of people who are involved in software for fan-run
        conventions.
      </p>
      <p className="mb-4">
        We have people who are involved in con software at all levels, from
        requirements gathering and pecurement through to development, support,
        usability and testing. Whether you have worked on dozens of cons, or are
        just interested in how to get involved, we would love to have you join
        us. Interested bystanders are also welcome.
      </p>
      <div className="inline-block rounded-full bg-gradient-to-br from-lemon to-cyan p-px">
        <Link
          className="active:shadow-button-glow hover:shadow-button-glow transition:ease-in-out inline-block rounded-full bg-olive px-4 py-2 transition-all hover:bg-transparent hover:text-olive active:bg-transparent active:text-olive"
          href="/discord-invite"
        >
          Join the Discord
        </Link>
      </div>
    </>
  );
}
