import { TITLE_SPLITTERS_RE } from '../constants'
import { resolveSplitTitle } from './index'
import { stripTags } from '../../../utils'

export default function cleanTitle(title, url, $) {
  // If title has |, :, or - in it, see if
  // we can clean it up.
  if (TITLE_SPLITTERS_RE.test(title)) {
    title = resolveSplitTitle(title, url)
  }

  // Final sanity check that we didn't get a crazy title.
  if (title.length > 150 || title.length < 15) {
    // If we did, return h1 from the document if it exists
    const h1 = $('h1')
    if (h1.length === 1) {
      title = h1.text()
    }
  }

  return title.trim()
}
