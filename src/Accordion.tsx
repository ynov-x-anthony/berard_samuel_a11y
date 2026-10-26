import { useId, useState } from 'react'

type Props = { title: string; children: React.ReactNode }

// Mission : ce composant marche visuellement, mais un lecteur d'écran
// n'a aucune idée que c'est un volet qui s'ouvre/se ferme. Ajoute les
// attributs ARIA qui manquent (vocabulaire vu dans la quête a11y-03).

export default function Accordion({ title, children }: Props) {
  const [expanded, setExpanded] = useState(false)
  const panelId = useId()

  return (
    <div className="accordion">
      <h2 className="accordion-heading">
        <button
          className="accordion-trigger"
          aria-expanded={expanded}
          aria-controls={panelId}
          onClick={() => setExpanded(!expanded)}
        >
          {title} <span aria-hidden="true">{expanded ? '▲' : '▼'}</span>
        </button>
      </h2>
      <div id={panelId} className="accordion-panel" hidden={!expanded}>
        {children}
      </div>
    </div>
  )
}
