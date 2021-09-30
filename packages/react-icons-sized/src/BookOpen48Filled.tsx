import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M20 8c1.58 0 3 .66 4 1.73A5.48 5.48 0 0128 8h13a3 3 0 013 3v26a3 3 0 01-3 3H28c-1.58 0-3-.66-4-1.73A5.48 5.48 0 0120 40H7a3 3 0 01-3-3V11a3 3 0 013-3h13zm2.5 26.5v-21A2.5 2.5 0 0020 11H7v26h13a2.5 2.5 0 002.5-2.5zm3-21v21A2.5 2.5 0 0028 37h13V11H28a2.5 2.5 0 00-2.5 2.5z" fill={primaryFill} /></svg>;
}

const BookOpen48Filled = wrapIcon(rawSvg({}), 'BookOpen48Filled');
export default BookOpen48Filled;
      