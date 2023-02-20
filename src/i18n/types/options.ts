import type { TranslationKey } from './locale'
import type { TranslationValue } from './nested'
import type { PluralOptions } from './plural'

type VoidOptionKey = undefined

type OptionKeys<GTranslation extends string> =
  GTranslation extends `${string}{{${infer TOption}}}${infer TRestTranslation}`
    ? Exclude<TOption | OptionKeys<TRestTranslation>, VoidOptionKey>
    : VoidOptionKey

type OptionValue = string | number

type OptionsObj<GKey> = [GKey] extends [string]
  ? Record<GKey, OptionValue>
  : Record<string, never>

type Options<GTranslation extends string> = OptionsObj<OptionKeys<GTranslation>>

type RawKeyOptions<GKey extends TranslationKey> = Options<
  TranslationValue<GKey>
>

type KeyOptions<GKey extends TranslationKey> =
  TranslationValue<GKey> extends string
    ? RawKeyOptions<GKey>
    : // @ts-ignore
      RawKeyOptions<`${GKey}_other`> & PluralOptions

export type { KeyOptions }
