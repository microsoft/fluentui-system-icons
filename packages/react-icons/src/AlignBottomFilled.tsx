import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.5 17a.5.5 0 010-1h15a.5.5 0 010 1h-15zM4 13c0 1.1.9 2 2 2h1a2 2 0 002-2V5a2 2 0 00-2-2H6a2 2 0 00-2 2v8zm7 0c0 1.1.9 2 2 2h1a2 2 0 002-2V8a2 2 0 00-2-2h-1a2 2 0 00-2 2v5z" fill={primaryFill} /></svg>;
}

const AlignBottomFilled = wrapIcon(rawSvg({}), 'AlignBottomFilled');
export default AlignBottomFilled;
      