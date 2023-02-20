import { TOptionsBase } from 'i18next'
import { useCallback } from 'react'
import { useTranslation as useI18nextTranslation } from 'react-i18next'

import type { KeyOptions, TranslationKey } from '@/i18n/types'

export const useTranslation = () => {
  const { t: translate } = useI18nextTranslation('translation')

  const t = useCallback(
    <GKey extends TranslationKey>(key: GKey, options?: KeyOptions<GKey>) =>
      translate(key, options as TOptionsBase),
    [translate]
  )

  return { t }
}
