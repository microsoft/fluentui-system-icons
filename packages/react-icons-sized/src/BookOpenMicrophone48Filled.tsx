import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M20 8c1.58 0 3 .66 4 1.73A5.48 5.48 0 0128 8h13a3 3 0 013 3v18a7 7 0 00-3-5.75V11H28a2.5 2.5 0 00-2.5 2.5v21c0 .6.2 1.14.55 1.57.13 1.38.52 2.68 1.12 3.87A5.49 5.49 0 0124 38.27 5.48 5.48 0 0120 40H7a3 3 0 01-3-3V11a3 3 0 013-3h13zm2.5 26.5v-21A2.5 2.5 0 0020 11H7v26h13a2.5 2.5 0 002.5-2.5zm9.92 2.5a4.98 4.98 0 01-.42-2v-6a5 5 0 0110 0v6a5 5 0 01-9.58 2zm-4.2 0a9.03 9.03 0 01-.22-2 1 1 0 112 0 7 7 0 1014 0 1 1 0 112 0 9 9 0 01-8 8.95V45a1 1 0 11-2 0v-1.05A9 9 0 0128.22 37z" fill={primaryFill} /></svg>;
}

const BookOpenMicrophone48Filled = wrapIcon(rawSvg({}), 'BookOpenMicrophone48Filled');
export default BookOpenMicrophone48Filled;
      