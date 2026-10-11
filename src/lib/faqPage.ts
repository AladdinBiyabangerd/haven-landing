import type { FaqItem, Messages } from '@/i18n/types'

export type FaqGroup = {
  id: 'general' | 'pricing' | 'about' | 'demo'
  title: string
  items: FaqItem[]
}

/**
 * Groups for the dedicated /faq/ page. Items come from the same message
 * catalogs that power the home, pricing, about and contact FAQs, so copy
 * stays single-source. Duplicate questions are dropped across groups.
 */
export function getFaqGroups(messages: Messages): FaqGroup[] {
  const seen = new Set<string>()
  const groups: FaqGroup[] = [
    { id: 'general', title: messages.faqPage.groups.general, items: messages.faq.items },
    { id: 'pricing', title: messages.faqPage.groups.pricing, items: messages.pricing.faq },
    { id: 'about', title: messages.faqPage.groups.about, items: messages.aboutPage.faq },
    { id: 'demo', title: messages.faqPage.groups.demo, items: messages.contact.faq },
  ]
  return groups
    .map((group) => ({
      ...group,
      items: group.items.filter((item) => {
        const key = item.q.trim().toLowerCase()
        if (seen.has(key)) return false
        seen.add(key)
        return true
      }),
    }))
    .filter((group) => group.items.length > 0)
}

export function getAllFaqItems(messages: Messages): FaqItem[] {
  return getFaqGroups(messages).flatMap((group) => group.items)
}
