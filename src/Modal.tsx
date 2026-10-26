import { useEffect, useRef } from 'react'

type Props = { onClose: () => void }

export default function Modal({ onClose }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const previouslyFocusedElement =
      document.activeElement instanceof HTMLElement ? document.activeElement : null
    const getFocusableElements = () =>
      Array.from(
        ref.current?.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ) ?? [],
      ).filter(
        (element) =>
          element.tabIndex >= 0 &&
          !element.hasAttribute('hidden') &&
          !element.closest('[hidden], [inert], [aria-hidden="true"]') &&
          element.getClientRects().length > 0 &&
          getComputedStyle(element).visibility !== 'hidden',
      )

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
        return
      }

      if (event.key !== 'Tab') return

      const focusableElements = getFocusableElements()
      if (focusableElements.length === 0) {
        event.preventDefault()
        ref.current?.focus()
        return
      }

      const firstElement = focusableElements[0]
      const lastElement = focusableElements[focusableElements.length - 1]
      const activeElement = document.activeElement

      if (event.shiftKey && (activeElement === firstElement || !ref.current?.contains(activeElement))) {
        event.preventDefault()
        lastElement.focus()
      } else if (!event.shiftKey && (activeElement === lastElement || !ref.current?.contains(activeElement))) {
        event.preventDefault()
        firstElement.focus()
      }
    }

    const focusableElements = getFocusableElements()
    if (focusableElements.length > 0) {
      focusableElements[0].focus()
    } else {
      ref.current?.focus()
    }

    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      previouslyFocusedElement?.focus()
    }
  }, [onClose])

  return (
    <div className="modal-overlay">
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="m-title"
        ref={ref}
        tabIndex={-1}
      >
        <h2 id="m-title">Préférences avancées</h2>
        <label htmlFor="lang">Langue</label>
        <select id="lang">
          <option>Français</option>
          <option>English</option>
        </select>
        <button onClick={onClose}>Fermer</button>
      </div>
    </div>
  )
}
