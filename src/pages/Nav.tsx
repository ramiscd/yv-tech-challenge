import Link from "next/link"

export default function Nav() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary shadow p-3 mb-5 bg-body-tertiary rounded">
            <div className="container-fluid">
                <Link href="/"><p className="navbar-brand"><img className="logo" src="logo.png" alt="logo site" /></p></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <Link href="/"><p className="nav-link">INÍCIO</p></Link>
                        </li>
                        <li className="nav-item">

                            <Link href="/"><p className="nav-link">SOBRE</p></Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">CONTATO</a>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </nav>
    )
}