import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M20 8c1.6 0 3.04.72 4 1.85A5.24 5.24 0 0128 8h13.25A2.75 2.75 0 0144 10.75v26.5A2.75 2.75 0 0141.25 40H28c-1.6 0-3.04-.72-4-1.85A5.24 5.24 0 0120 40H6.75A2.75 2.75 0 014 37.25v-26.5A2.75 2.75 0 016.75 8H20zm2.75 26.75v-21.5A2.75 2.75 0 0020 10.5H6.75a.25.25 0 00-.25.25v26.5c0 .14.11.25.25.25H20a2.75 2.75 0 002.75-2.75zm2.5-21.5v21.5A2.75 2.75 0 0028 37.5h13.25c.14 0 .25-.11.25-.25v-26.5a.25.25 0 00-.25-.25H28a2.75 2.75 0 00-2.75 2.75z" fill={primaryFill} /></svg>;
}

const BookOpen48Regular = wrapIcon(rawSvg({}), 'BookOpen48Regular');
export default BookOpen48Regular;
      