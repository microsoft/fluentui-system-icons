import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5 3a2 2 0 00-2 2v10c0 1.1.9 2 2 2h4.22l.21-.84.04-.16H5a1 1 0 01-1-1V5a1 1 0 011-1h10a1 1 0 011 1v4.23c.32-.14.66-.21 1-.23V5a2 2 0 00-2-2H5zm4.5 11h1.44l1-1H9.5a.5.5 0 000 1zm-2-6.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM6.75 11a.75.75 0 100-1.5.75.75 0 000 1.5zm0 3a.75.75 0 100-1.5.75.75 0 000 1.5zM9.5 7a.5.5 0 000 1h4a.5.5 0 000-1h-4zm0 3a.5.5 0 000 1h4a.5.5 0 000-1h-4zm1.48 5.38l4.83-4.83a1.87 1.87 0 112.64 2.64l-4.83 4.83a2.2 2.2 0 01-1.02.58l-1.5.37a.89.89 0 01-1.07-1.07l.37-1.5c.1-.39.3-.74.58-1.02z" fill={primaryFill} /></svg>;
}

const TextBulletListSquareEdit20Regular = wrapIcon(rawSvg({}), 'TextBulletListSquareEdit20Regular');
export default TextBulletListSquareEdit20Regular;
      