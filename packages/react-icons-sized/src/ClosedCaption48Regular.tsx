import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.02 16.98c2.31-1.65 6.1-1.36 7.79 1.36a1.25 1.25 0 01-2.12 1.32c-.8-1.28-2.87-1.6-4.21-.64-.84.6-1.98 1.86-1.98 4.98 0 3.16 1.08 4.4 1.94 4.96.63.42 1.52.62 2.39.53.87-.1 1.54-.46 1.9-.97a1.25 1.25 0 012.04 1.46 5.1 5.1 0 01-3.68 2 6.23 6.23 0 01-4.03-.94C12.38 29.94 11 27.84 11 24c0-3.88 1.49-5.92 3.02-7.02z" fill={primaryFill} /><path d="M36.81 18.34c-1.7-2.72-5.48-3-7.79-1.36C27.5 18.08 26 20.12 26 24c0 3.84 1.38 5.93 3.06 7.04a6.23 6.23 0 004.03.93 5.1 5.1 0 003.68-2 1.25 1.25 0 00-2.04-1.45c-.36.51-1.03.87-1.9.97-.87.09-1.76-.11-2.39-.53-.86-.57-1.94-1.8-1.94-4.96 0-3.12 1.14-4.38 1.98-4.98 1.34-.96 3.4-.64 4.21.64a1.25 1.25 0 002.12-1.32z" fill={primaryFill} /><path d="M4 14.5A6.5 6.5 0 0110.5 8h27a6.5 6.5 0 016.5 6.5v19a6.5 6.5 0 01-6.5 6.5h-27A6.5 6.5 0 014 33.5v-19zm6.5-4a4 4 0 00-4 4v19a4 4 0 004 4h27a4 4 0 004-4v-19a4 4 0 00-4-4h-27z" fill={primaryFill} /></svg>;
}

const ClosedCaption48Regular = wrapIcon(rawSvg({}), 'ClosedCaption48Regular');
export default ClosedCaption48Regular;
      