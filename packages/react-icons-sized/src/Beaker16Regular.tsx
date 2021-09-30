import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.5 3H6v3.69c0 .44-.12.88-.34 1.26l-2.21 3.8A1.5 1.5 0 004.75 14h6.5a1.5 1.5 0 001.3-2.26l-2.21-3.8A2.5 2.5 0 0110 6.7V3h.5a.5.5 0 000-1h-5a.5.5 0 000 1zM7 6.69V3h2v3.69c0 .62.16 1.23.48 1.76L9.8 9H6.2l.32-.55A3.5 3.5 0 007 6.7zM5.62 10h4.76l1.31 2.25a.5.5 0 01-.43.75H4.74a.5.5 0 01-.43-.75L5.62 10z" fill={primaryFill} /></svg>;
}

const Beaker16Regular = wrapIcon(rawSvg({}), 'Beaker16Regular');
export default Beaker16Regular;
      