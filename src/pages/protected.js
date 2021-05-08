import { getSession, signIn, useSession } from 'next-auth/client';
import Link from 'next/link';
import { useEffect } from 'react';
import withAuth from '../utils/withAuth';

function Protected({ session }) {
    const { user } = session;
    useEffect(() => {
        console.log({ user });
    }, [session]);
    return (
        <>
            <h1>Protected</h1>
            <h2>
                Signed in as {user?.email} <br />
            </h2>
            <Link href={`/`}>
                <a>Home</a>
            </Link>
        </>
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
