import './App.css'

// Mission : ce blog fonctionne, mais tout est construit en <div>. Rends-le
// sémantique : landmarks, hiérarchie de titres, vrai bouton, vrai label.

function App() {
  return (
    <div className="page">
      <header className="header" id="accueil">
        <p className="logo">DevBlog</p>
        <nav className="nav" aria-label="Navigation principale">
          <a className="nav-link" href="#accueil">Accueil</a>
          <a className="nav-link" href="#articles">Articles</a>
          <a className="nav-link" href="#contact">Contact</a>
        </nav>
      </header>

      <main className="main">
        <article className="article" id="articles">
          <h1 className="title">Pourquoi apprendre TypeScript en 2026</h1>
          <p className="meta">
            Publié le <time dateTime="2026-03-03">3 mars 2026</time>
          </p>
          <h2 className="small-title">Un typage qui rassure</h2>
          <p>TypeScript attrape une classe entière de bugs avant même d'exécuter le code...</p>
          <h2 className="small-title">Un écosystème mature</h2>
          <p>La quasi-totalité des librairies JS fournissent désormais leurs types...</p>
        </article>

        <button className="like-btn" type="button" onClick={() => alert("Merci pour le like !")}>
          👍 J'aime cet articley
        </button>

        <section className="newsletter" id="contact" aria-labelledby="newsletter-title">
          <h2 className="small-title" id="newsletter-title">Reste informé</h2>
          <form onSubmit={(event) => {
            event.preventDefault()
            alert('Inscription envoyée')
          }}>
            <label htmlFor="email">Adresse e-mail</label>
            <input id="email" name="email" type="email" placeholder="ton@email.fr" />
            <button className="submit-btn" type="submit">S'inscrire</button>
          </form>
        </section>
      </main>

      <footer className="footer">© 2026 DevBlog</footer>
    </div>
  )
}

export default App
