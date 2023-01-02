import { Link } from 'react-router-dom'

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1>Welcome to <span className="nowrap">District Health Authority Rawalpindi</span></h1>
            </header>
            <main className="public__main">
                <p>Working together for a healthier Rawalpindi.</p>
                <address className="public__addr">
                    Sector 4-B<br />
                    Khayaban-e-Sir Syed <br />
                    Rawalpindi 46000<br />
                    <a href="tel:+92514831965">(051) 483-1965</a>
                </address>
                <br />
                <p>CEO: Dr. Ansar Ishaq</p>
            </main>
            <footer>
                <Link to="/login">Employee Login</Link>
            </footer>
        </section>

    )
    return content
}
export default Public