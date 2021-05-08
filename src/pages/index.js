import { signIn, signOut, useSession } from 'next-auth/client';
import Link from 'next/link';

export default function Home() {
    const [session] = useSession();
    return (
        <>
            <h1>Home</h1>
            {!session && (
                <Link href={`/signin`}>
                    <a>Sign In</a>
                </Link>
            )}
            {session && <button onClick={signOut}>Sign Out</button>}
            <br />
            <Link href={`/protected`}>
                <a>Protected</a>
            </Link>
        </>
    );
}
