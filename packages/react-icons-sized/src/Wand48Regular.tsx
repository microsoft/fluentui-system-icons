import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M37.75 6c.69 0 1.25.56 1.25 1.25V9h1.75a1.25 1.25 0 010 2.5H39v1.75a1.25 1.25 0 01-2.5 0V11.5h-1.75a1.25 1.25 0 110-2.5h1.75V7.25c0-.69.56-1.25 1.25-1.25z" fill={primaryFill} /><path d="M15 11.25a1.25 1.25 0 00-2.5 0V13h-1.75a1.25 1.25 0 100 2.5h1.75v1.75a1.25 1.25 0 102.5 0V15.5h1.75a1.25 1.25 0 000-2.5H15v-1.75z" fill={primaryFill} /><path d="M33.75 30c.69 0 1.25.56 1.25 1.25V33h1.75a1.25 1.25 0 010 2.5H35v1.75a1.25 1.25 0 01-2.5 0V35.5h-1.75a1.25 1.25 0 110-2.5h1.75v-1.75c0-.69.56-1.25 1.25-1.25z" fill={primaryFill} /><path d="M25.89 15.4a4.75 4.75 0 116.72 6.72l-20.5 20.5A4.75 4.75 0 015.4 35.9l20.49-20.5zm-1.36 4.9L7.16 37.67a2.25 2.25 0 003.19 3.18L27.7 23.48l-3.18-3.18zm4.95 1.41l1.36-1.36a2.25 2.25 0 10-3.18-3.18l-1.36 1.36 3.18 3.18z" fill={primaryFill} /></svg>;
}

const Wand48Regular = wrapIcon(rawSvg({}), 'Wand48Regular');
export default Wand48Regular;
      