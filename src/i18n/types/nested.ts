import type { TranslationKey, TranslationsObject } from './locale'

type ObjectPatternForConcatedKey<GKey extends string> =
  GKey extends `${infer TFirstKey}.${infer TRestKey}`
    ? { [key in TFirstKey]: ObjectPatternForConcatedKey<TRestKey> }
    : { [key in GKey]: unknown }

type NestedValueByConcatedKey<
  GKey extends string,
  GObj extends ObjectPatternForConcatedKey<GKey>
> = GKey extends `${infer TFirstKey}.${infer TRestKey}`
  ? // @ts-ignore
    NestedValueByConcatedKey<TRestKey, GObj[TFirstKey]>
  : GObj[GKey]

type TranslationValue<GKey extends TranslationKey> = NestedValueByConcatedKey<
  GKey,
  // @ts-ignore
  TranslationsObject
>

export type { NestedValueByConcatedKey, TranslationValue }
