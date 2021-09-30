import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 8a2 2 0 00-2 2v2c0 1.1.9 2 2 2h8a2 2 0 002-2v-2a2 2 0 00-2-2H6zm-1 2a1 1 0 011-1h8a1 1 0 011 1v2a1 1 0 01-1 1H6a1 1 0 01-1-1v-2zm-3 6.5c0-.28.22-.5.5-.5h15a.5.5 0 010 1h-15a.5.5 0 01-.5-.5z" fill={primaryFill} /></svg>;
}

const AlignEndVerticalRegular = wrapIcon(rawSvg({}), 'AlignEndVerticalRegular');
export default AlignEndVerticalRegular;
      