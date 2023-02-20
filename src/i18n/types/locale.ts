import type en from '../locales/en'
import type { DeeplyConcatedObj } from './concat'

type GeneralLocaleFromConcrete<GObj> = {
  [key in keyof GObj]: GObj[key] extends string
    ? string
    : GeneralLocaleFromConcrete<GObj[key]>
}

type ConcreteLocale = typeof en

type GeneralLocale = GeneralLocaleFromConcrete<ConcreteLocale>

type TranslationsObject = ConcreteLocale['translation']

type TranslationKey = keyof DeeplyConcatedObj<TranslationsObject, unknown>

export type {
  ConcreteLocale,
  GeneralLocale,
  TranslationKey,
  TranslationsObject
}
