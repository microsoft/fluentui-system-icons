/**
 * Dictionary of booleans.
 *
 * @internal
 */
 export interface IDictionary {
  [className: string]: boolean;
}

/**
 * Serializable object.
 *
 * @internal
 */
export interface ISerializableObject {
  toString?: () => string;
}

/**
 * css input type.
 *
 * @internal
 */
export type ICssInput = string | ISerializableObject | IDictionary | null | undefined | boolean;

/**
 * Concatination helper, which can merge class names together. Skips over falsey values.
 *
 * @public
 */
export function css(...args: ICssInput[]): string {
  const classes: string[] = [];

  for (const arg of args) {
    if (arg) {
      if (typeof arg === 'string') {
        classes.push(arg);
      } else if (arg.hasOwnProperty('toString') && typeof arg.toString === 'function') {
        classes.push(arg.toString());
      }
    }
  }

  return classes.join(' ');
}
