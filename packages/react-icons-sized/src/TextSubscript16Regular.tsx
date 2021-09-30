import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.17 3.13a.5.5 0 01.7.04L6.5 7.25l3.63-4.08a.5.5 0 01.74.66L7.17 8l2.85 3.2-.02.3c0 .47.22.9.56 1.17-.07.1-.13.2-.18.31a.5.5 0 01-.25-.15L6.5 8.75l-3.63 4.08a.5.5 0 11-.74-.66L5.83 8l-3.7-4.17a.5.5 0 01.04-.7zM12 11.5a.5.5 0 011 0c0 .26-.08.4-.19.5-.1.1-.2.17-.35.26l-.24.15C11.36 13 11 13.77 11 14.5c0 .28.22.5.5.5h2a.5.5 0 000-1h-1.4c.12-.25.32-.52.68-.76l.13-.08c.17-.11.42-.27.6-.45.29-.29.49-.67.49-1.21a1.5 1.5 0 00-3 0 .5.5 0 001 0z" fill={primaryFill} /></svg>;
}

const TextSubscript16Regular = wrapIcon(rawSvg({}), 'TextSubscript16Regular');
export default TextSubscript16Regular;
      