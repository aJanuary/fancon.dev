import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="min-h-[calc(100vh-2.5rem)] bg-cover bg-[left_30rem_center] bg-no-repeat md:bg-[url('/discord.svg')] xl:bg-[left_50rem_center]">
        <div className="mx-10 mb-5 mt-10 max-w-md xl:mx-20 xl:mb-10 xl:mt-20 xl:max-w-3xl">
          <h2 className="3xl:text-8xl mb-4 text-4xl tracking-wide xl:text-6xl">
            Discord community for fan-run convention software
          </h2>
          <p className="mb-2 max-w-xl">
            Developers, designers, requirements engineers, support, usability
            experts, testers, and more.
          </p>
          <p className="mb-4 max-w-xl">
            Whether you&apos;ve worked on dozens of cons, or just interested in
            how to get involved, we&apos;d love to have you join us.
          </p>
          <div className="inline-block rounded-full bg-gradient-to-br from-lemon to-cyan p-[2px]">
            <Link
              className="transition:ease-in-out active:text-midnight-moss-50 inline-block rounded-full bg-[#05160e] px-4 py-2 transition-all hover:bg-transparent hover:text-midnight-moss-950 hover:shadow-button-glow active:bg-transparent active:shadow-button-glow"
              href="/discord-invite"
            >
              Join the Discord
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
