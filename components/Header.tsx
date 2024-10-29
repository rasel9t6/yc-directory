import { auth, signIn, signOut } from '@/auth';
import Image from 'next/image';
import Link from 'next/link';

export default async function Header() {
  const session = await auth();
  return (
    <header className='px-5 py-3 bg-white shadow-sm font-work-sans'>
      <nav className='flex justify-between items-center'>
        <Link href='/'>
          <Image
            src='/logo.png'
            alt='logo'
            width={144}
            height={30}
          />
        </Link>
        <div className='flex items-center gap-5 text-black'>
          {session && session?.user ? (
            <>
              <Link href='/startup/create'>
                <span>Create</span>
                {/* <BadgePlus className='size-6 sm:hidden' /> */}
              </Link>
              <button
                onClick={async () => {
                  'use server';
                  await signOut({ redirectTo: '/' });
                }}
              >
                Logout
              </button>
              <Link href={`/user/${session?.id}`}>
                <span>{session?.user?.name}</span>
              </Link>
            </>
          ) : (
            <>
              <button
                onClick={async () => {
                  'use server';
                  await signIn('github');
                }}
              >
                <span>Login</span>
              </button>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}
