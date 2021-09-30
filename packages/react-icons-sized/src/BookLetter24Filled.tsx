import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.5 8.74l1.12 2.76h-2.24l1.12-2.76z" fill={primaryFill} /><path d="M4 4.5v15A2.5 2.5 0 006.5 22h13.25a.75.75 0 000-1.5H6.5a1 1 0 01-1-1h14.25c.41 0 .75-.34.75-.75V4.5A2.5 2.5 0 0018 2H6.5A2.5 2.5 0 004 4.5zM12.5 6c.3 0 .58.18.7.47l3.24 8a.75.75 0 11-1.38.56L14.23 13h-3.46l-.83 2.03a.75.75 0 01-1.38-.56l3.25-8A.75.75 0 0112.5 6z" fill={primaryFill} /></svg>;
}

const BookLetter24Filled = wrapIcon(rawSvg({}), 'BookLetter24Filled');
export default BookLetter24Filled;
      