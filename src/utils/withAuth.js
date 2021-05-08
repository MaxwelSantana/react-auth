import { signIn, useSession } from 'next-auth/client';
import { useEffect } from 'react';

export default function withAuth(WrappedComponent) {
    const Wrap = (props) => {
        const [session] = useSession();
        useEffect(() => {
            if (!session) signIn();
        }, []);
        return <WrappedComponent {...props} />;
    };

    return Wrap;
}
