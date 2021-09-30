import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 6.75C4 5.5 5 4.5 6.25 4.5h9c1.24 0 2.25 1 2.25 2.25v14.5a.75.75 0 01-1.13.65l-5.62-3.28-5.62 3.28A.75.75 0 014 21.25V6.75zM6.25 6a.75.75 0 00-.75.75v13.2l4.87-2.85a.75.75 0 01.76 0L16 19.94V6.74a.75.75 0 00-.75-.74h-9zm9-4A4.75 4.75 0 0120 6.75v11.87a.75.75 0 01-1.5 0V6.75c0-1.8-1.46-3.25-3.25-3.25H6.64s.11-.56.8-1.08C8 2 8.6 2 8.6 2h6.65z" fill={primaryFill} /></svg>;
}

const BookmarkMultiple24Regular = wrapIcon(rawSvg({}), 'BookmarkMultiple24Regular');
export default BookmarkMultiple24Regular;
      