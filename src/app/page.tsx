import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          // 3000x3000px image size
          src="/img/A Primary.png"
          alt="Main Logo"
          width={100}
          height={100}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Hello, I&apos;m Daniyal.
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            I&apos;m a passionate Software Engineer with a strong background in
            web development and mobile development, and a deep love for creating
            memorable and fun experiences. With a keen eye in UI/UX and graphic
            design, I bring ideas to life through code. Let&apos;s connect and
            explore how we can create something amazing together.
          </p>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Ready to start a project? Let&apos;s get started!{" "}
            <a
              href="/contact/page.tsx"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Contact me
            </a>{" "}
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="/contact/page.tsx"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              // className="dark:invert"
              src="/img/icons/arrow-up-right-01.svg"
              alt="Arrow Icon"
              width={16}
              height={16}
            />
            Contact Me
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://github.com/Archaniels/"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </main>
    </div>
  );
}
