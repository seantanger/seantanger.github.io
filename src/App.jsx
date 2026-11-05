import { useEffect, useState } from 'react'
import { UserRound, FolderCode, Briefcase, PenLine, Mail, Link, Moon, Sun } from 'lucide-react'
import { profile, interests, projects, experience, posts } from './data.js'

function useTheme() {
  const [theme, setTheme] = useState(() => {
    try {
      const saved = localStorage.getItem('theme')
      if (saved) return saved
    } catch {
      /* storage unavailable */
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  })
  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try {
      localStorage.setItem('theme', theme)
    } catch {
      /* ignore */
    }
  }, [theme])
  return [theme, () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))]
}

const sections = [
  { id: 'about', label: 'About', Icon: UserRound },
  { id: 'projects', label: 'Projects', Icon: FolderCode },
  { id: 'experience', label: 'Experience', Icon: Briefcase },
  { id: 'writing', label: 'Writing', Icon: PenLine },
]

function currentTab() {
  const id = window.location.hash.slice(1)
  return sections.some((s) => s.id === id) ? id : 'about'
}

// Tabs live in the URL hash so each one can be linked to and the back button works.
function useTab() {
  const [tab, setTab] = useState(currentTab)
  useEffect(() => {
    const onChange = () => {
      setTab(currentTab())
      window.scrollTo(0, 0)
    }
    window.addEventListener('hashchange', onChange)
    return () => window.removeEventListener('hashchange', onChange)
  }, [])
  return tab
}

export default function App() {
  const [theme, toggle] = useTheme()
  const tab = useTab()
  const firstName = profile.name.split(' ')[0]

  return (
    <>
      <header className="top">
        <a href="#about" className="brand">{firstName}</a>
        <button className="pill" onClick={toggle} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}>
          {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </header>

      <div className="layout">
        <aside className="side">
          <nav className="panel menu" aria-label="Sections">
            {sections.map(({ id, label, Icon }) => (
              <a key={id} href={`#${id}`} aria-current={tab === id ? 'page' : undefined}>
                <Icon size={20} strokeWidth={1.75} /> {label}
              </a>
            ))}
          </nav>
          <div className="panel menu">
            <a href={`mailto:${profile.email}`}><Mail size={20} strokeWidth={1.75} /> Email</a>
            {profile.links.map((l) => (
              <a key={l.label} href={l.href} target="_blank" rel="noreferrer"><Link size={20} strokeWidth={1.75} /> {l.label}</a>
            ))}
          </div>
        </aside>

        <main>
          {tab === 'about' && (
            <>
              <section className="panel intro">
                <h1>{firstName}</h1>
                {profile.tagline && <p className="tagline">{profile.tagline}</p>}
                {profile.bio.map((p, i) => <p key={i}>{p}</p>)}
              </section>
              <div className="cards">
                {interests.map((it) => (
                  <article key={it.title} className="card" style={{ background: it.color, color: it.ink ?? '#fff' }}>
                    <h2>{it.title}:</h2>
                    <p>{it.text}</p>
                  </article>
                ))}
              </div>
            </>
          )}

          {tab === 'projects' && (
            <section className="panel page">
              <h1>Projects</h1>
              <ul className="rows">
                {projects.map((p) => (
                  <li key={p.title}>
                    {p.href ? <a href={p.href}>{p.title}</a> : <strong>{p.title}</strong>}
                    {p.context && <p className="small">{p.context}</p>}
                    <p>{p.text}</p>
                    <p className="small">{p.tags.join(', ')}</p>
                    {p.paper && <a className="small" href={p.paper} target="_blank" rel="noreferrer">Read the paper</a>}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {tab === 'experience' && (
            <section className="panel page">
              <h1>Experience</h1>
              <table>
                <thead>
                  <tr><th>What</th><th>Where</th><th className="num">When</th></tr>
                </thead>
                <tbody>
                  {experience.map((e) => (
                    <tr key={e.role + e.when}>
                      <td><strong>{e.role}</strong>{e.text && <span className="small">{e.text}</span>}</td>
                      <td>{e.org}</td>
                      <td className="num">{e.when}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>
          )}

          {tab === 'writing' && (
            <section className="panel page">
              <h1>Writing</h1>
              <ul className="rows">
                {posts.map((p) => (
                  <li key={p.title}>
                    <a href={p.href}>{p.title}</a>
                    <p>{p.summary}</p>
                    <time className="small" dateTime={p.date}>{p.date}</time>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </main>
      </div>

      <footer className="footer">© {profile.year} {profile.name}</footer>
    </>
  )
}
