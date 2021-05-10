import { getProviders, getSession, signIn } from 'next-auth/client';
import styles from '../styles/pages/signin.module.css';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function SignIn() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    async function handleEmailSignIn(event) {
        event.preventDefault();
        const response = await signIn('email', {
            redirect: false,
            email,
        });
        console.log({ response });
        if (!response.error) {
            router.push(response.url);
        } else {
            setError(response.error);
        }
    }
    return (
        <div className={styles.container}>
            <section>
                <section className={styles.signInFormcontainer}>
                    <header>
                        <img src="/icons/logo.svg" alt="Logo" />
                        <h1>Sign In</h1>
                    </header>
                    <section className={styles.socialContainer}>
                        <button
                            className={styles.socialButton}
                            type="button"
                            onClick={() => signIn('github')}
                        >
                            <img src="/icons/github.svg" alt="GitHub" />
                            <span>GitHub</span>
                        </button>
                        <button
                            className={styles.socialButton}
                            type="button"
                            onClick={() => signIn('google')}
                        >
                            <img src="/icons/google.svg" alt="Google" />
                            <span>Google</span>
                        </button>
                    </section>
                    <div className={styles.loginDivider}>
                        <hr />
                        <span>Or Log In Using Email</span>
                        <hr />
                    </div>
                    <main>
                        <form onSubmit={handleEmailSignIn}>
                            <div>
                                <label htmlFor="username-field">EMAIL</label>
                                <input
                                    id="username-field"
                                    name="username"
                                    type="text"
                                    value={email}
                                    placeholder="ex:john@gmail.com"
                                    className={
                                        error ? styles.inputError : undefined
                                    }
                                    onChange={(event) =>
                                        setEmail(event.target.value)
                                    }
                                />
                                {error && (
                                    <span
                                        role="alert"
                                        className={styles.errorMessage}
                                    >
                                        {error}
                                    </span>
                                )}
                            </div>
                            <div>
                                <button disabled={!email} type="submit">
                                    Log In
                                </button>
                            </div>
                        </form>
                    </main>
                    <footer></footer>
                </section>
            </section>
        </div>
    );
}

export async function getServerSideProps(context) {
    const { req, res } = context;
    const session = await getSession({ req });

    if (session && res) {
        return {
            redirect: {
                destination: '/protected',
                permanent: false,
            },
        };
    }

    const providers = await getProviders();

    return {
        props: { providers },
    };
}

// SignIn.getInitialProps = async (context) => {
//     const { req, res } = context;
//     const session = await getSession({ req });

//     if (session && res) {
//         res.writeHead(302, {
//             Location: '/',
//         });
//         res.end();
//         return;
//     }

//     return {
//         session: undefined,
//     };
// };
