import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.34 3.52a2.45 2.45 0 00-3.7.28 2.97 2.97 0 00-2.62 5.03l1.24 1.24-1.13 1.13 1.69 1.69 1.13-1.13L15.2 13a2.97 2.97 0 005.02-2.63 2.45 2.45 0 00.28-3.7l-.74-.73.65-.65a1.2 1.2 0 00-1.69-1.69l-.64.65-.74-.74zm.43 5.34c-.3.3-.77.3-1.06 0L15.14 7.3a.75.75 0 111.06-1.06l1.57 1.57c.29.3.29.77 0 1.06zM4.62 11.02a2.97 2.97 0 014.2 0l4.19 4.18a2.97 2.97 0 01-2.63 5.02 2.45 2.45 0 01-3.7.28l-.74-.74-.66.67a1.2 1.2 0 01-1.69-1.68l.67-.67-.74-.74a2.45 2.45 0 01.28-3.7c-.16-.92.11-1.9.82-2.62zm3.73 7.26c.3-.3.3-.77 0-1.06l-1.57-1.57a.75.75 0 00-1.06 1.06l1.57 1.57c.3.3.77.3 1.06 0z" fill={primaryFill} /></svg>;
}

const Dumbbell24Filled = wrapIcon(rawSvg({}), 'Dumbbell24Filled');
export default Dumbbell24Filled;
      