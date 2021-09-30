import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.5 8A6.5 6.5 0 004 14.5v19a6.5 6.5 0 006.5 6.5h27a6.5 6.5 0 006.5-6.5v-19A6.5 6.5 0 0037.5 8h-27zm3.52 8.98c2.31-1.65 6.1-1.36 7.79 1.36a1.25 1.25 0 01-2.12 1.32c-.8-1.28-2.87-1.6-4.21-.64-.84.6-1.98 1.86-1.98 4.98 0 3.16 1.08 4.4 1.94 4.96.63.42 1.52.62 2.39.53.87-.1 1.54-.46 1.9-.97a1.25 1.25 0 012.04 1.46 5.1 5.1 0 01-3.68 2 6.23 6.23 0 01-4.03-.94C12.38 29.94 11 27.84 11 24c0-3.88 1.49-5.92 3.02-7.02zm22.79 1.36a1.25 1.25 0 01-2.12 1.32c-.8-1.28-2.87-1.6-4.21-.64-.84.6-1.98 1.86-1.98 4.98 0 3.16 1.08 4.4 1.94 4.96.63.42 1.52.62 2.39.53.87-.1 1.54-.46 1.9-.97a1.25 1.25 0 012.04 1.46 5.1 5.1 0 01-3.68 2 6.23 6.23 0 01-4.03-.94C27.38 29.94 26 27.84 26 24c0-3.88 1.49-5.92 3.02-7.02 2.31-1.65 6.1-1.36 7.79 1.36z" fill={primaryFill} /></svg>;
}

const ClosedCaption48Filled = wrapIcon(rawSvg({}), 'ClosedCaption48Filled');
export default ClosedCaption48Filled;
      