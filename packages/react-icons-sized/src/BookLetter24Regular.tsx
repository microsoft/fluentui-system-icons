import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.5 6c-.3 0-.58.18-.7.47l-3.24 8a.75.75 0 101.38.56l.83-2.03h3.46l.83 2.03a.75.75 0 001.38-.56l-3.25-8A.75.75 0 0012.5 6zm-1.12 5.5l1.12-2.76 1.12 2.76h-2.24z" fill={primaryFill} /><path d="M4 4.5A2.5 2.5 0 016.5 2H18a2.5 2.5 0 012.5 2.5v14.25c0 .41-.34.75-.75.75H5.5a1 1 0 001 1h13.25a.75.75 0 010 1.5H6.5A2.5 2.5 0 014 19.5v-15zM5.5 18H19V4.5a1 1 0 00-1-1H6.5a1 1 0 00-1 1V18z" fill={primaryFill} /></svg>;
}

const BookLetter24Regular = wrapIcon(rawSvg({}), 'BookLetter24Regular');
export default BookLetter24Regular;
      