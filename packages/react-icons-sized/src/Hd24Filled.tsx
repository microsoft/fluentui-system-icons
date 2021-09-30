import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.5 14.5v-5h.25c.97 0 1.75.78 1.75 1.75v1.5c0 .97-.78 1.75-1.75 1.75h-.25z" fill={primaryFill} /><path d="M6.25 3A3.25 3.25 0 003 6.25v11.5C3 19.55 4.46 21 6.25 21h11.5c1.8 0 3.25-1.46 3.25-3.25V6.25C21 4.45 19.54 3 17.75 3H6.25zm1 5c.41 0 .75.34.75.75v2.75h2V8.75a.75.75 0 011.5 0v6.5a.75.75 0 01-1.5 0V13H8v2.25a.75.75 0 01-1.5 0v-6.5c0-.41.34-.75.75-.75zm6.5 0h1C16.55 8 18 9.46 18 11.25v1.5c0 1.8-1.46 3.25-3.25 3.25h-1a.75.75 0 01-.75-.75v-6.5c0-.41.34-.75.75-.75z" fill={primaryFill} /></svg>;
}

const Hd24Filled = wrapIcon(rawSvg({}), 'Hd24Filled');
export default Hd24Filled;
      