import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5 6.5A3.5 3.5 0 018.5 3h15A3.5 3.5 0 0127 6.5V24a2 2 0 01-2 2H7.09c.2.58.76 1 1.41 1H26a1 1 0 110 2H8.5A3.5 3.5 0 015 25.5v-19zm16 10c0-.83-.67-1.5-1.5-1.5h-7c-.83 0-1.5.67-1.5 1.5v.5c0 1.97 1.86 4 5 4 3.14 0 5-2.03 5-4v-.5zm-2.25-5.25a2.75 2.75 0 10-5.5 0 2.75 2.75 0 005.5 0z" fill={primaryFill} /></svg>;
}

const BookContacts32Filled = wrapIcon(rawSvg({}), 'BookContacts32Filled');
export default BookContacts32Filled;
      