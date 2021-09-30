import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.5 16a1.5 1.5 0 000 3h7a1.5 1.5 0 100-3h-7zM19.99 4.1A2.25 2.25 0 0017.75 2H6.09A2.25 2.25 0 004 4.25v15.5l.01.15A2.25 2.25 0 006.25 22h11.5l.15-.01a2.25 2.25 0 002.1-2.25V4.24l-.01-.15zM6.25 3.5h11.6c.36.05.64.37.64.75v15.6a.75.75 0 01-.74.64H6.15a.75.75 0 01-.65-.75V4.14a.75.75 0 01.75-.64z" fill={primaryFill} /></svg>;
}

const DocumentFooter24Regular = wrapIcon(rawSvg({}), 'DocumentFooter24Regular');
export default DocumentFooter24Regular;
      