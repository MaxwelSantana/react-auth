import { getSession, signIn, useSession } from 'next-auth/client';
import Link from 'next/link';
import { useEffect } from 'react';
import withAuth from '../utils/withAuth';
import styles from '../styles/pages/protected.module.css';

function Protected({ session }) {
    const { user } = session;
    useEffect(() => {
        console.log({ user });
    }, [session]);
    return (
        <div className={styles.protectedContainer}>
            <img src="/icons/shield.svg" alt="protection shield" />
            <div className={styles.title}>
                <h1>Protected</h1>
                <p>Signed in as {user?.email}</p>
            </div>
            <nav>
                <Link href={`/`}>
                    <a>Home</a>
                </Link>
            </nav>
        </div>
    );
}

export async function getServerSideProps(context) {
    const { req, res } = context;
    const session = await getSession({ req });

    if (!session || !res) {
        return {
            redirect: {
                destination: '/signin',
                permanent: false,
            },
        };
    }

    return {
        props: { session },
    };
}

export default Protected;
//export default withAuth(Protected);
