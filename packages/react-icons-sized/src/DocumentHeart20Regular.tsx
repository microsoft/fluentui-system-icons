import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 4c0-1.1.9-2 2-2h4.59c.4 0 .78.16 1.06.44l3.91 3.91c.28.28.44.67.44 1.06V16a2 2 0 01-2 2H8.45l1-1H14a1 1 0 001-1V8h-3.5A1.5 1.5 0 0110 6.5V3H6a1 1 0 00-1 1v5.17c-.33-.1-.66-.15-1-.17V4zm7-.8v3.3c0 .28.22.5.5.5h3.3L11 3.2zM5.65 18.69a.5.5 0 00.7 0l3.82-3.81a2.85 2.85 0 10-4.03-4.04l-.14.14-.13-.14a2.85 2.85 0 10-4.04 4.04l3.82 3.81z" fill={primaryFill} /></svg>;
}

const DocumentHeart20Regular = wrapIcon(rawSvg({}), 'DocumentHeart20Regular');
export default DocumentHeart20Regular;
      