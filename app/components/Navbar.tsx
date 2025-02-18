import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { auth } from '@/auth'
import { signOut, signIn } from 'next-auth/react'

const Navbar = async () => {
    const session = await auth();
  return (
    <header className='px-5 py-3 bg-white shadow-sm font-work-sans'>
        <nav className='flex justify-between items-center'>
            <Link href="/">
                <Image src="/logo.png" alt="logo" width={144} height={30} />
            </Link>
        
            <div className='flex items-center gap-5 text-black'>
                {session && session?.user ? (
                    <>
                        <Link href="/startup/create">
                            <span>Create</span>
                        </Link>
                        <button onClick={signOut}>
                            <span>Logout</span>
                        </button>
                        <Link href={`/user/${session?.id}`}>
                            <span>{session?.user?.name}</span>
                        </Link>
                    </>
                ) : (
                    <>
                        <button onClick={signIn}>
                            <span>Login</span>
                        </button>
                    </>
                )}
            </div>
        </nav>
    </header>
  )
}

export default Navbar