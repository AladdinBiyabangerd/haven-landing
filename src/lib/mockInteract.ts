/** Single-select highlight for product HTML mocks. Idempotent per element. */
export function bindMockSelect(
  root: ParentNode,
  itemSelector: string,
  selectedClass: string,
): void {
  const items = Array.from(root.querySelectorAll<HTMLElement>(itemSelector))
  if (!items.length) return

  for (const item of items) {
    if (item.dataset.mockSelectBound === '1') continue
    item.dataset.mockSelectBound = '1'

    item.addEventListener('click', () => {
      for (const el of items) {
        const on = el === item
        el.classList.toggle(selectedClass, on)
        if (el.hasAttribute('aria-pressed')) {
          el.setAttribute('aria-pressed', on ? 'true' : 'false')
        }
      }
    })
  }
}
