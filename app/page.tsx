import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white dark:bg-black">
      <main className="flex w-full max-w-4xl flex-col items-center justify-center gap-12 px-6 py-16">
        <div className="flex flex-col items-center gap-8 text-center">
          <h1 className="text-6xl font-bold tracking-tight text-black dark:text-white sm:text-7xl">
            flutter_singular
          </h1>
          <p className="max-w-2xl text-xl leading-relaxed text-zinc-600 dark:text-zinc-400">
            App de prueba para Universal Links (iOS) y App Links (Android)
          </p>
        </div>

     

        <div className="flex flex-col gap-4 text-center">
          <p className="text-sm text-zinc-500 dark:text-zinc-500">
            Esta página sirve como dominio verificado para el deep linking
          </p>
        </div>
      </main>
    </div>
  );
}