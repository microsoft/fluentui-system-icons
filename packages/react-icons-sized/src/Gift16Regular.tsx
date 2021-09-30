import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 2a2 2 0 011.5.68A2 2 0 0110.73 5H12a1 1 0 011 1v2a1 1 0 01-1 1v3a2 2 0 01-2 2H5a2 2 0 01-2-2V9a1 1 0 01-1-1V6a1 1 0 011-1h1.27A2 2 0 016 2zM5 4a1 1 0 001 1h1V4a1 1 0 00-2 0zm3 2v2h4V6H8zM7 6H3v2h4V6zM4 9v3a1 1 0 001 1h2V9H4zm4 4h2a1 1 0 001-1V9H8v4zm2-9a1 1 0 00-2 0v1h1a1 1 0 001-1z" fill={primaryFill} /></svg>;
}

const Gift16Regular = wrapIcon(rawSvg({}), 'Gift16Regular');
export default Gift16Regular;
      