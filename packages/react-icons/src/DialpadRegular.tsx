import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 5a1 1 0 100-2 1 1 0 000 2z" fill={primaryFill} /><path d="M6 9a1 1 0 100-2 1 1 0 000 2z" fill={primaryFill} /><path d="M7 12a1 1 0 11-2 0 1 1 0 012 0z" fill={primaryFill} /><path d="M10 5a1 1 0 100-2 1 1 0 000 2z" fill={primaryFill} /><path d="M11 8a1 1 0 11-2 0 1 1 0 012 0z" fill={primaryFill} /><path d="M10 13a1 1 0 100-2 1 1 0 000 2z" fill={primaryFill} /><path d="M11 16a1 1 0 11-2 0 1 1 0 012 0z" fill={primaryFill} /><path d="M14 5a1 1 0 100-2 1 1 0 000 2z" fill={primaryFill} /><path d="M15 8a1 1 0 11-2 0 1 1 0 012 0z" fill={primaryFill} /><path d="M14 13a1 1 0 100-2 1 1 0 000 2z" fill={primaryFill} /></svg>;
}

const DialpadRegular = wrapIcon(rawSvg({}), 'DialpadRegular');
export default DialpadRegular;
      