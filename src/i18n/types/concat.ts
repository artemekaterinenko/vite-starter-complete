import type { UnpluralKey } from './plural'

type Keys<T> = keyof T & string

type ConcatedKey<GKey extends string, GPrefix> = GPrefix extends string
  ? `${GPrefix}.${GKey}`
  : GKey

type FinalKey<GKey extends string, GPrefix> = ConcatedKey<
  UnpluralKey<GKey>,
  GPrefix
>

/* Concats nested object keys with '.'.
 * E.g.
 *
 *   type En = {
 *     a: {
 *       b: {
 *         c: string
 *       }
 *       d: string
 *     }
 *     e: string
 *   }
 *
 *   DeeplyConcatedObj<En> // => { 'a.b.c': string; 'a.d': string; 'e': string }
 */
type DeeplyConcatedObj<T, GPrefix> = {
  [key in Keys<T> as T[key] extends Record<string, unknown>
    ? Keys<DeeplyConcatedObj<T[key], ConcatedKey<key, GPrefix>>>
    : FinalKey<key, GPrefix>]: string
}

export type { DeeplyConcatedObj }
