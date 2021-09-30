import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 16a2 2 0 01-2-2V6c0-1.1.9-2 2-2h1a2 2 0 012 2v8a2 2 0 01-2 2H3zm-1-2a1 1 0 001 1h1a1 1 0 001-1V6a1 1 0 00-1-1H3a1 1 0 00-1 1v8zm7 2a2 2 0 01-2-2V6c0-1.1.9-2 2-2h1a2 2 0 012 2v8a2 2 0 01-2 2H9zm-1-2a1 1 0 001 1h1a1 1 0 001-1V6a1 1 0 00-1-1H9a1 1 0 00-1 1v8zm7 2a2 2 0 01-2-2V6c0-1.1.9-2 2-2h1a2 2 0 012 2v8a2 2 0 01-2 2h-1zm-1-2a1 1 0 001 1h1a1 1 0 001-1V6a1 1 0 00-1-1h-1a1 1 0 00-1 1v8z" fill={primaryFill} /></svg>;
}

const AlignSpaceEvenlyHorizontal20Regular = wrapIcon(rawSvg({}), 'AlignSpaceEvenlyHorizontal20Regular');
export default AlignSpaceEvenlyHorizontal20Regular;
      