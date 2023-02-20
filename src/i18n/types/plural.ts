// Available suffixes https://www.i18next.com/translation-function/plurals#languages-with-multiple-plurals
type PluralSuffix = 'zero' | 'one' | 'two' | 'few' | 'many' | 'other'

type UnpluralKey<GKey extends string> =
  GKey extends `${infer GPlainKey}_${PluralSuffix}` ? GPlainKey : GKey

type PluralOptions = {
  count: number
}

export type { PluralOptions, UnpluralKey }
