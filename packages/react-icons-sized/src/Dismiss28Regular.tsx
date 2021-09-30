import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.26 4.28c.3-.3.77-.3 1.06 0L14 12.96l8.68-8.68a.75.75 0 011.06 1.06l-8.68 8.68 8.65 8.64a.75.75 0 01-1.06 1.06L14 15.08l-8.65 8.64a.75.75 0 11-1.06-1.06l8.65-8.64-8.68-8.68a.75.75 0 010-1.06z" fill={primaryFill} /></svg>;
}

const Dismiss28Regular = wrapIcon(rawSvg({}), 'Dismiss28Regular');
export default Dismiss28Regular;
      