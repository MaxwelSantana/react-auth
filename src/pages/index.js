import { signOut, useSession } from 'next-auth/client';
import Link from 'next/link';
import styles from '../styles/pages/home.module.css';

export default function Home() {
    const [session] = useSession();
    return (
        <div className={styles.homeContainer}>
            <img src="/icons/logo.svg" alt="logo" />
            <div className={styles.title}>
                <h1>Home React Auth</h1>
                <p>Authentication project using Next.js</p>
            </div>
            <nav>
                {!session && (
                    <Link href={`/signin`}>
                        <a>Sign In</a>
                    </Link>
                )}
                {session && <button onClick={signOut}>Sign Out</button>}
                <Link href={`/protected`}>
                    <a>Protected</a>
                </Link>
            </nav>
        </div>
    );
}
