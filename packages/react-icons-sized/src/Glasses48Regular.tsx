import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15.82 10h2.68a1.5 1.5 0 01.2 2.99l-.2.01h-2.68c-.35 0-.69.12-.96.34l-.15.15-4.14 4.5h6.93a4.5 4.5 0 014.47 4.02h4.06A4.5 4.5 0 0130.5 18h6.95l-4.16-4.52a1.5 1.5 0 00-.9-.47l-.2-.01h-2.7a1.5 1.5 0 01-.2-2.99l.2-.01h2.7a4.5 4.5 0 013.04 1.18l.26.27 7.29 7.9c.1.1.18.22.24.35.61.77.98 1.74.98 2.8v7a6.5 6.5 0 01-6.5 6.5h-5a6.5 6.5 0 01-6.5-6.5V25h-4v4.5a6.5 6.5 0 01-6.5 6.5h-5A6.5 6.5 0 014 29.5v-7c0-1.12.41-2.15 1.1-2.94l.07-.11.09-.1 7.24-7.9a4.5 4.5 0 012.94-1.43l.38-.02h2.68-2.68zm1.68 11h-9c-.83 0-1.5.67-1.5 1.5v7a3.5 3.5 0 003.5 3.5h5a3.5 3.5 0 003.5-3.5v-7c0-.83-.67-1.5-1.5-1.5zm22 0h-9c-.83 0-1.5.67-1.5 1.5v7a3.5 3.5 0 003.5 3.5h5a3.5 3.5 0 003.5-3.5v-7c0-.83-.67-1.5-1.5-1.5z" fill={primaryFill} /></svg>;
}

const Glasses48Regular = wrapIcon(rawSvg({}), 'Glasses48Regular');
export default Glasses48Regular;
      