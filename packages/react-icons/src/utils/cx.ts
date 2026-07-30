/**
 * Joins class name strings, filtering out falsy values.
 *
 * Replaces `mergeClasses` at every icon factory call site. There are no atomic
 * classes left to deduplicate, so joining is all that is required — but the
 * falsy/empty handling must stay compatible: an icon rendered without a
 * `className` must not gain an empty `class` attribute.
 */
export function cx(...classes: (string | false | undefined | null)[]): string | undefined {
  const result = classes.filter(Boolean).join(' ');
  return result || undefined;
}
