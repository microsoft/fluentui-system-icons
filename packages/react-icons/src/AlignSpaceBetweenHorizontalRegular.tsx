import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 4a2 2 0 00-2 2v8c0 1.1.9 2 2 2h1a2 2 0 002-2V6a2 2 0 00-2-2H3zM2 6a1 1 0 011-1h1a1 1 0 011 1v8a1 1 0 01-1 1H3a1 1 0 01-1-1V6zm14-2a2 2 0 00-2 2v8c0 1.1.9 2 2 2h1a2 2 0 002-2V6a2 2 0 00-2-2h-1zm-1 2a1 1 0 011-1h1a1 1 0 011 1v8a1 1 0 01-1 1h-1a1 1 0 01-1-1V6z" fill={primaryFill} /></svg>;
}

const AlignSpaceBetweenHorizontalRegular = wrapIcon(rawSvg({}), 'AlignSpaceBetweenHorizontalRegular');
export default AlignSpaceBetweenHorizontalRegular;
      