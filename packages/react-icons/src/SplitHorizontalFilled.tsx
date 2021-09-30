import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.5 10a.5.5 0 000-1h-15a.5.5 0 000 1h15zM14 2a2 2 0 012 2v4H4V4c0-1.1.9-2 2-2h8zM4 11v4c0 1.1.9 2 2 2h8a2 2 0 002-2v-4H4z" fill={primaryFill} /></svg>;
}

const SplitHorizontalFilled = wrapIcon(rawSvg({}), 'SplitHorizontalFilled');
export default SplitHorizontalFilled;
      