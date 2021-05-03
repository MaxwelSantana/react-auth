import Head from 'next/head';
import { SignInForm } from '../components/SignInForm';
import styles from '../styles/pages/Home.module.css';

export default function Home() {
    return (
        <div className={styles.container}>
            <section>
                <SignInForm />
            </section>
        </div>
    );
}
