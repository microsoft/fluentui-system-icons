import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 1a2 2 0 00-2 2v4.5c0 1.1.9 2 2 2h8a2 2 0 002-2V3a2 2 0 00-2-2H6zM5 3a1 1 0 011-1h8a1 1 0 011 1v4.5a1 1 0 01-1 1H6a1 1 0 01-1-1V3zm1 7.5a2 2 0 00-2 2V17c0 1.1.9 2 2 2h8a2 2 0 002-2v-4.5a2 2 0 00-2-2H6zm-1 2a1 1 0 011-1h8a1 1 0 011 1V17a1 1 0 01-1 1H6a1 1 0 01-1-1v-4.5z" fill={primaryFill} /></svg>;
}

const AlignSpaceFitVerticalRegular = wrapIcon(rawSvg({}), 'AlignSpaceFitVerticalRegular');
export default AlignSpaceFitVerticalRegular;
      