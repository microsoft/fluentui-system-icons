import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 2.5a.5.5 0 00-1 0v15a.5.5 0 001 0v-15zM2 6c0-1.1.9-2 2-2h4v12H4a2 2 0 01-2-2V6zm9 10h4a2 2 0 002-2V6a2 2 0 00-2-2h-4v12z" fill={primaryFill} /></svg>;
}

const SplitVerticalFilled = wrapIcon(rawSvg({}), 'SplitVerticalFilled');
export default SplitVerticalFilled;
      