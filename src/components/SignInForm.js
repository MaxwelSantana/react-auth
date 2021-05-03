import styles from '../styles/components/SignInForm.module.css';

export function SignInForm() {
    function handleSubmit(event) {
        event.preventDefault();
    }
    return (
        <section className={styles.signInFormcontainer}>
            <header>
                <img src="/icons/logo.svg" alt="Logo" />
                <h1>Log In to Brand</h1>
            </header>
            <main>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="username-field">EMAIL</label>
                        <input
                            id="username-field"
                            name="username"
                            type="text"
                            defaultValue="johnsondoe@nomail.com"
                        />
                    </div>
                    <div>
                        <label htmlFor="password-field">PASSWORD</label>
                        <input
                            id="password-field"
                            name="password"
                            type="password"
                        />
                    </div>
                    <div>
                        <button type="submit">Log In</button>
                    </div>
                </form>
            </main>
            <footer></footer>
        </section>
    );
}
