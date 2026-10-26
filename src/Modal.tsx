import { useEffect, useId, useRef } from 'react'

type Props = { onClose: () => void }

// Mission : cette modale s'ouvre/se ferme, mais rien n'indique à un lecteur
// d'écran qu'il s'agit d'une boîte de dialogue, et Échap ne fait rien.

export default function Modal({ onClose }: Props) {
  const titleId = useId()
  const dialogRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const previouslyFocusedElement =
      document.activeElement instanceof HTMLElement ? document.activeElement : null
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }

    dialogRef.current?.focus()
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      previouslyFocusedElement?.focus()
    }
  }, [onClose])

  return (
    <div className="modal-overlay">
      <div
        ref={dialogRef}
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        tabIndex={-1}
      >
        <h2 id={titleId}>Informations</h2>
        <p>Ce module couvre l'accessibilité et le SEO.</p>
        <button onClick={onClose}>Fermer</button>
      </div>
    </div>
  )
}
