import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14 11.25c0-.97.78-1.75 1.75-1.75h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v1.5c0 .14.11.25.25.25h.5c.97 0 1.75.78 1.75 1.75v1.5c0 .97-.78 1.75-1.75 1.75h-1.5a.75.75 0 010-1.5h1.5c.14 0 .25-.11.25-.25v-1.5a.25.25 0 00-.25-.25h-.5c-.97 0-1.75-.78-1.75-1.75v-1.5z" fill={primaryFill} /><path d="M12.75 10.25a.75.75 0 00-1.5 0v6c0 .14-.11.25-.25.25H9.75a.75.75 0 000 1.5H11c.97 0 1.75-.78 1.75-1.75v-6z" fill={primaryFill} /><path d="M3 6.25v11.5C3 19.55 4.46 21 6.25 21h11.5c1.8 0 3.25-1.46 3.25-3.25V6.25C21 4.45 19.54 3 17.75 3H6.25A3.25 3.25 0 003 6.25zM6.25 4.5h11.5c.97 0 1.75.78 1.75 1.75v11.5c0 .97-.78 1.75-1.75 1.75H6.25c-.97 0-1.75-.78-1.75-1.75V6.25c0-.97.78-1.75 1.75-1.75z" fill={primaryFill} /></svg>;
}

const Javascript24Regular = wrapIcon(rawSvg({}), 'Javascript24Regular');
export default Javascript24Regular;
      