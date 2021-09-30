import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.5 3a.5.5 0 000 1h15a.5.5 0 000-1h-15zm0 13a.5.5 0 000 1h15a.5.5 0 000-1h-15zM4 13c0 1.1.9 2 2 2h1a2 2 0 002-2V7a2 2 0 00-2-2H6a2 2 0 00-2 2v6zm2 1a1 1 0 01-1-1V7a1 1 0 011-1h1a1 1 0 011 1v6a1 1 0 01-1 1H6zm7 1h1a2 2 0 002-2V7a2 2 0 00-2-2h-1a2 2 0 00-2 2v6c0 1.1.9 2 2 2zm-1-2V7a1 1 0 011-1h1a1 1 0 011 1v6a1 1 0 01-1 1h-1a1 1 0 01-1-1z" fill={primaryFill} /></svg>;
}

const AlignStretchVerticalRegular = wrapIcon(rawSvg({}), 'AlignStretchVerticalRegular');
export default AlignStretchVerticalRegular;
      