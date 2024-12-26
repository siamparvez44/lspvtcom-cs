import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function NotFound() {
  return (
    <>
      <div className="grid h-screen place-content-center px-4">
        <div className="text-center">
          <h1 className="text-9xl font-black text-neutral-300">404</h1>
          <p className="text-2xl font-bold tracking-tight sm:text-4xl">Uh-oh!</p>
          <p className="my-4">
            Sorry, we couldn&apos;t find the page you&apos;re looking for. Perhaps you&apos;ve mistyped the URL? Be sure
            to check your spelling.
          </p>
          <Button asChild>
            <Link href="/">Go To Home</Link>
          </Button>
        </div>
      </div>
    </>
  );
}
