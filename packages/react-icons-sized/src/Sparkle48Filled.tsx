import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.46 31.51a2.67 2.67 0 004-1.13l1.23-3.77a6.16 6.16 0 013.9-3.9l3.63-1.18a2.67 2.67 0 000-5.04l-3.7-1.2a6.2 6.2 0 01-3.9-3.88l-1.17-3.63a2.66 2.66 0 00-4.06-1.29c-.46.33-.8.79-1 1.32l-1.18 3.67a6.19 6.19 0 01-3.8 3.81l-3.63 1.18a2.67 2.67 0 00.03 5.05l3.59 1.16a6.19 6.19 0 013.9 3.91l1.18 3.63c.19.52.53.97.98 1.29zm15.42 9.13a1.94 1.94 0 002.97-.97l.57-1.74a2.41 2.41 0 011.5-1.5l1.79-.59a1.95 1.95 0 00-.07-3.69l-1.76-.56a2.38 2.38 0 01-1.5-1.5l-.58-1.8a1.93 1.93 0 00-1.54-1.27 1.94 1.94 0 00-2.14 1.3l-.57 1.76a2.38 2.38 0 01-1.46 1.5l-1.79.58a1.94 1.94 0 00.03 3.68l1.75.57a2.37 2.37 0 011.5 1.5l.58 1.8c.14.37.39.7.72.93z" fill={primaryFill} /></svg>;
}

const Sparkle48Filled = wrapIcon(rawSvg({}), 'Sparkle48Filled');
export default Sparkle48Filled;
      