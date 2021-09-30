import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 6.5a.5.5 0 01.14-.35A.5.5 0 016.5 6h2a.5.5 0 010 1h-.8l1.15 1.15a.5.5 0 11-.7.7L7 7.71v.79a.5.5 0 01-1 0v-2zm.04 7.2a.5.5 0 01-.04-.2v-2a.5.5 0 011 0v.8l1.15-1.15a.5.5 0 01.7.7L7.71 13h.79a.5.5 0 010 1h-2a.5.5 0 01-.46-.3zm7.65-7.66a.5.5 0 01.3.46v2a.5.5 0 01-.99 0v-.8l-1.15 1.15a.5.5 0 01-.7-.7L12.29 7h-.79a.5.5 0 010-1h2a.5.5 0 01.2.04zm.16 7.82a.5.5 0 01-.35.14h-2a.5.5 0 010-1h.8l-1.15-1.15a.5.5 0 01.7-.7L13 12.29v-.79a.5.5 0 011 0v2a.5.5 0 01-.14.35zM3 5c0-1.1.9-2 2-2h10a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm2-1a1 1 0 00-1 1v10a1 1 0 001 1h10a1 1 0 001-1V5a1 1 0 00-1-1H5z" fill={primaryFill} /></svg>;
}

const ScaleFill20Regular = wrapIcon(rawSvg({}), 'ScaleFill20Regular');
export default ScaleFill20Regular;
      